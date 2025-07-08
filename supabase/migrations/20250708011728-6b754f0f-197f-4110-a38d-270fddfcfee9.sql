-- Assign admin role to the existing user
INSERT INTO public.user_roles (user_id, role) 
VALUES ('1acd4353-a3ec-40a2-add2-edb892126535', 'admin'::app_role)
ON CONFLICT (user_id, role) DO NOTHING;