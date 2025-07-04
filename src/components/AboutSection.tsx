
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Check, Users, Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: <Check className="w-8 h-8 text-nour-yellow" />,
      title: t('about.mission'),
      description: t('about.mission.text')
    },
    {
      icon: <Users className="w-8 h-8 text-nour-yellow" />,
      title: t('about.vision'),
      description: t('about.vision.text')
    },
    {
      icon: <Briefcase className="w-8 h-8 text-nour-yellow" />,
      title: t('about.values'),
      description: t('about.values.text')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-nour-blue mb-6 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {t('about.title')}
          </h2>
          <p className={`text-xl text-nour-gray max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="prose prose-lg max-w-none">
              <p className={`text-lg text-nour-dark-gray leading-relaxed mb-6 ${
                isRTL ? 'font-cairo' : 'font-inter'
              }`}>
                {t('about.description')}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-nour-blue mb-2">500+</div>
                  <div className="text-nour-gray font-medium">
                    {isRTL ? 'مشروع مكتمل' : 'Projects Completed'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-nour-blue mb-2">50+</div>
                  <div className="text-nour-gray font-medium">
                    {isRTL ? 'عميل راض' : 'Happy Clients'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-nour-blue to-nour-light-blue rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-nour-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-12 h-12 text-nour-dark-gray" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
                    {isRTL ? 'خبرة وثقة' : 'Experience & Trust'}
                  </h3>
                  <p className={`text-lg opacity-90 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                    {isRTL 
                      ? 'نبني شراكات طويلة الأمد مع عملائنا من خلال تقديم خدمات متميزة'
                      : 'Building long-term partnerships with our clients through exceptional service delivery'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-nour-blue/10 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold text-nour-blue mb-4 ${
                  isRTL ? 'font-cairo' : 'font-poppins'
                }`}>
                  {value.title}
                </h3>
                <p className={`text-nour-gray leading-relaxed ${
                  isRTL ? 'font-cairo' : 'font-inter'
                }`}>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
