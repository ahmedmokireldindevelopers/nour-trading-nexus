
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ar: 'عن الشركة' },
  'nav.services': { en: 'Services', ar: 'الخدمات' },
  'nav.clients': { en: 'Clients', ar: 'العملاء' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },
  
  // Hero Section
  'hero.title': { en: 'Excellence in Trading & Supply Solutions', ar: 'التميز في حلول التجارة والتوريد' },
  'hero.subtitle': { en: 'Your trusted partner for quality trading, sourcing, and supply chain solutions across the Middle East', ar: 'شريكك الموثوق لحلول التجارة والتوريد عالية الجودة في الشرق الأوسط' },
  'hero.cta1': { en: 'Request Quote', ar: 'طلب عرض سعر' },
  'hero.cta2': { en: 'Free Consultation', ar: 'استشارة مجانية' },
  
  // About Section
  'about.title': { en: 'About Nour Trading & Supplies', ar: 'عن شركة نور للتجارة والتوريد' },
  'about.subtitle': { en: 'Building trust through excellence and commitment', ar: 'بناء الثقة من خلال التميز والالتزام' },
  'about.description': { en: 'With years of experience in the trading and supply industry, Nour Trading & Supplies has established itself as a leader in providing comprehensive solutions for businesses across various sectors.', ar: 'مع سنوات من الخبرة في صناعة التجارة والتوريد، رسخت شركة نور للتجارة والتوريد مكانتها كرائدة في تقديم الحلول الشاملة للشركات عبر مختلف القطاعات.' },
  'about.mission': { en: 'Our Mission', ar: 'مهمتنا' },
  'about.mission.text': { en: 'To provide exceptional trading and supply solutions that exceed our clients\' expectations while maintaining the highest standards of quality and integrity.', ar: 'تقديم حلول تجارية وتوريد استثنائية تتجاوز توقعات عملائنا مع الحفاظ على أعلى معايير الجودة والنزاهة.' },
  'about.vision': { en: 'Our Vision', ar: 'رؤيتنا' },
  'about.vision.text': { en: 'To be the most trusted and preferred partner for trading and supply solutions in the region, known for our reliability, innovation, and customer-centric approach.', ar: 'أن نكون الشريك الأكثر ثقة وتفضيلاً لحلول التجارة والتوريد في المنطقة، معروفين بموثوقيتنا وابتكارنا ونهجنا المتمحور حول العميل.' },
  'about.values': { en: 'Our Values', ar: 'قيمنا' },
  'about.values.text': { en: 'Trust, Quality, Commitment, Innovation, and Excellence drive everything we do.', ar: 'الثقة والجودة والالتزام والابتكار والتميز تقود كل ما نقوم به.' },
  
  // Services Section
  'services.title': { en: 'Our Services', ar: 'خدماتنا' },
  'services.subtitle': { en: 'Comprehensive solutions for all your trading and supply needs', ar: 'حلول شاملة لجميع احتياجاتك في التجارة والتوريد' },
  'services.supplies.title': { en: 'General Supplies', ar: 'التوريدات العامة' },
  'services.supplies.desc': { en: 'High-quality products and materials sourced from trusted suppliers worldwide', ar: 'منتجات ومواد عالية الجودة من موردين موثوقين حول العالم' },
  'services.contracting.title': { en: 'Contracting Services', ar: 'خدمات المقاولات' },
  'services.contracting.desc': { en: 'Professional contracting solutions for construction and infrastructure projects', ar: 'حلول مقاولات احترافية لمشاريع البناء والبنية التحتية' },
  'services.delivery.title': { en: 'Logistics & Delivery', ar: 'اللوجستيات والتوصيل' },
  'services.delivery.desc': { en: 'Efficient and reliable delivery services with full tracking and support', ar: 'خدمات توصيل فعالة وموثوقة مع تتبع كامل ودعم' },
  'services.sourcing.title': { en: 'Custom Sourcing', ar: 'التوريد المخصص' },
  'services.sourcing.desc': { en: 'Specialized sourcing solutions tailored to your specific requirements', ar: 'حلول توريد متخصصة مصممة وفقاً لمتطلباتك المحددة' },
  
  // Testimonials
  'testimonials.title': { en: 'What Our Clients Say', ar: 'ماذا يقول عملاؤنا' },
  'testimonials.subtitle': { en: 'Trusted by businesses across the region', ar: 'موثوقون من قبل الشركات في جميع أنحاء المنطقة' },
  
  // Contact Section
  'contact.title': { en: 'Get in Touch', ar: 'تواصل معنا' },
  'contact.subtitle': { en: 'Ready to discuss your project? Contact us today', ar: 'مستعد لمناقشة مشروعك؟ اتصل بنا اليوم' },
  'contact.form.name': { en: 'Full Name', ar: 'الاسم الكامل' },
  'contact.form.email': { en: 'Email Address', ar: 'البريد الإلكتروني' },
  'contact.form.phone': { en: 'Phone Number', ar: 'رقم الهاتف' },
  'contact.form.company': { en: 'Company Name', ar: 'اسم الشركة' },
  'contact.form.message': { en: 'Message', ar: 'الرسالة' },
  'contact.form.submit': { en: 'Send Message', ar: 'إرسال الرسالة' },
  'contact.info.address': { en: 'Our Address', ar: 'عنواننا' },
  'contact.info.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.info.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  
  // Footer
  'footer.description': { en: 'Excellence in trading and supply solutions across the Middle East', ar: 'التميز في حلول التجارة والتوريد في الشرق الأوسط' },
  'footer.quicklinks': { en: 'Quick Links', ar: 'روابط سريعة' },
  'footer.services.title': { en: 'Services', ar: 'الخدمات' },
  'footer.followus': { en: 'Follow Us', ar: 'تابعنا' },
  'footer.rights': { en: 'All rights reserved', ar: 'جميع الحقوق محفوظة' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  
  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || translation.en || key;
  };
  
  const isRTL = language === 'ar';
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-cairo' : 'font-inter'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
