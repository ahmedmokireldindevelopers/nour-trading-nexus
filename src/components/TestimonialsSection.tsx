
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Users } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      name: isRTL ? 'أحمد الخليج' : 'Ahmed Al-Khalij',
      company: isRTL ? 'شركة الخليج للإنشاءات' : 'Gulf Construction Company',
      content: isRTL 
        ? 'خدمة ممتازة وجودة عالية. تعاملنا مع نور للتجارة في عدة مشاريع وكانت النتائج مذهلة دائماً.'
        : 'Excellent service and high quality. We have worked with Nour Trading on several projects and the results have always been outstanding.',
      rating: 5
    },
    {
      name: isRTL ? 'فاطمة الزهراء' : 'Fatima Al-Zahra',
      company: isRTL ? 'مجموعة الزهراء التجارية' : 'Al-Zahra Commercial Group',
      content: isRTL
        ? 'فريق محترف ومتفاني. يقدمون حلول مبتكرة ويلتزمون بالمواعيد المحددة.'
        : 'Professional and dedicated team. They provide innovative solutions and stick to deadlines.',
      rating: 5
    },
    {
      name: isRTL ? 'محمد الشامي' : 'Mohammed Al-Shami',
      company: isRTL ? 'شركة الشام للتطوير' : 'Al-Sham Development Company',
      content: isRTL
        ? 'شراكة ناجحة استمرت لسنوات. الثقة والجودة هما ما يميز نور للتجارة والتوريد.'
        : 'A successful partnership that has lasted for years. Trust and quality are what distinguish Nour Trading & Supplies.',
      rating: 5
    }
  ];

  const clients = [
    { name: isRTL ? 'شركة قطر الوطنية' : 'Qatar National Company', logo: '🏢' },
    { name: isRTL ? 'مجموعة الخليج' : 'Gulf Group', logo: '🏗️' },
    { name: isRTL ? 'شركة الشرق الأوسط' : 'Middle East Corporation', logo: '🏭' },
    { name: isRTL ? 'مؤسسة البناء الحديث' : 'Modern Construction Foundation', logo: '🏘️' },
    { name: isRTL ? 'شركة التجارة المتقدمة' : 'Advanced Trading Company', logo: '📦' },
    { name: isRTL ? 'مجموعة الاستثمار' : 'Investment Group', logo: '💼' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-nour-blue mb-6 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {t('testimonials.title')}
          </h2>
          <p className={`text-xl text-nour-gray max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-nour-yellow text-xl">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className={`text-nour-dark-gray mb-6 text-center italic leading-relaxed ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}>
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-nour-blue to-nour-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`font-bold text-nour-blue mb-1 ${
                    isRTL ? 'font-cairo' : 'font-poppins'
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-nour-gray text-sm ${
                    isRTL ? 'font-cairo' : 'font-inter'
                  }`}>
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="animate-fade-in">
          <h3 className={`text-2xl font-bold text-center text-nour-blue mb-12 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {isRTL ? 'شركاؤنا الموثوقون' : 'Our Trusted Partners'}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[120px] group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <span className={`text-xs text-nour-gray font-medium ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
