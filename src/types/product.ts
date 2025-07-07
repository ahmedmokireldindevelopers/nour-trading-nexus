
export interface Product {
  id: string;
  name_en: string;
  name_ar: string;
  description_en: string | null;
  description_ar: string | null;
  category: string;
  specifications: any;
  features_en: string[] | null;
  features_ar: string[] | null;
  images: string[] | null;
  is_active: boolean;
}

export const PRODUCT_CATEGORIES = ['pex-pipes', 'electrical-wires', 'dibond-installations', 'accessories'];
