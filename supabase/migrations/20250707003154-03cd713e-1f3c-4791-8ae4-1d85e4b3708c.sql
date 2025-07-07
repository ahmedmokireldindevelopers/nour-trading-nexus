
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Create content management tables
CREATE TABLE public.website_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  content_en TEXT,
  content_ar TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (section, key)
);

CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  description_en TEXT,
  description_ar TEXT,
  category TEXT NOT NULL,
  specifications JSONB,
  features_en TEXT[],
  features_ar TEXT[],
  images TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- RLS Policies for user_roles (admin only)
CREATE POLICY "Admins can manage all roles" 
  ON public.user_roles 
  FOR ALL 
  TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for website_content
CREATE POLICY "Anyone can view content" 
  ON public.website_content 
  FOR SELECT 
  TO authenticated, anon 
  USING (true);

CREATE POLICY "Admins can manage content" 
  ON public.website_content 
  FOR ALL 
  TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for products
CREATE POLICY "Anyone can view active products" 
  ON public.products 
  FOR SELECT 
  TO authenticated, anon 
  USING (is_active = true);

CREATE POLICY "Admins can manage products" 
  ON public.products 
  FOR ALL 
  TO authenticated 
  USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger function for profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$;

-- Create trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert initial content data
INSERT INTO public.website_content (section, key, content_en, content_ar) VALUES
('hero', 'title', 'NOUR Engineering Solutions', 'حلول نور الهندسية'),
('hero', 'subtitle', 'Leading provider of PEX pipes, electrical solutions, and premium installations', 'مزود رائد لأنابيب PEX والحلول الكهربائية والتركيبات المتميزة'),
('about', 'title', 'About NOUR', 'عن نور'),
('about', 'description', 'With years of expertise in engineering solutions, NOUR has established itself as a trusted partner for quality PEX pipes, electrical wires, dibond installations, and accessories.', 'مع سنوات من الخبرة في الحلول الهندسية، رسخت نور نفسها كشريك موثوق للأنابيب عالية الجودة والأسلاك الكهربائية وتركيبات الديبوند والإكسسوارات.');
