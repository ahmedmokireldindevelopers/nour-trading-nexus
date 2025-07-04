
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Phone, Check } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nour-blue via-nour-dark-gray to-nour-blue">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-nour-yellow/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-nour-light-blue/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-nour-yellow to-yellow-300 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-nour-dark-gray font-bold text-3xl">N</span>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isRTL ? 'sm:flex-row-reverse' : ''
          }`}>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-nour-yellow hover:bg-yellow-400 text-nour-dark-gray font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3" />
              {t('hero.cta1')}
            </Button>
            
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-nour-dark-gray font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Check className="w-5 h-5 mr-3" />
              {t('hero.cta2')}
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-nour-yellow" />
                <span className="font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-nour-yellow" />
                <span className="font-medium">Trusted Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-nour-yellow" />
                <span className="font-medium">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
