
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShoppingBag, Briefcase, Delivery, Search } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: <ShoppingBag className="w-10 h-10 text-nour-yellow" />,
      title: t('services.supplies.title'),
      description: t('services.supplies.desc'),
      color: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Briefcase className="w-10 h-10 text-nour-yellow" />,
      title: t('services.contracting.title'),
      description: t('services.contracting.desc'),
      color: 'from-green-50 to-green-100'
    },
    {
      icon: <Delivery className="w-10 h-10 text-nour-yellow" />,
      title: t('services.delivery.title'),
      description: t('services.delivery.desc'),
      color: 'from-purple-50 to-purple-100'
    },
    {
      icon: <Search className="w-10 h-10 text-nour-yellow" />,
      title: t('services.sourcing.title'),
      description: t('services.sourcing.desc'),
      color: 'from-orange-50 to-orange-100'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-nour-blue mb-6 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {t('services.title')}
          </h2>
          <p className={`text-xl text-nour-gray max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer animate-scale-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                {/* Icon Container */}
                <div className={`mb-6 mx-auto w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-14 h-14 bg-nour-blue rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-bold text-nour-blue mb-4 group-hover:text-nour-light-blue transition-colors ${
                  isRTL ? 'font-cairo' : 'font-poppins'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-nour-gray leading-relaxed flex-grow ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}>
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button 
                    onClick={scrollToContact}
                    className="text-nour-blue hover:text-nour-yellow font-semibold text-sm uppercase tracking-wide transition-colors"
                  >
                    {isRTL ? 'اعرف المزيد' : 'Learn More'} →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-nour-blue to-nour-light-blue rounded-2xl p-12 text-white animate-fade-in">
          <h3 className={`text-3xl font-bold mb-4 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
            {isRTL ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
          </h3>
          <p className={`text-xl mb-8 opacity-90 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
            {isRTL 
              ? 'احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك'
              : 'Get a free consultation and discover how we can help you'
            }
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-nour-yellow hover:bg-yellow-400 text-nour-dark-gray font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
