
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Menu, X, Phone, Check } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { key: 'nav.home', section: 'hero' },
    { key: 'nav.about', section: 'about' },
    { key: 'nav.services', section: 'services' },
    { key: 'nav.clients', section: 'testimonials' },
    { key: 'nav.contact', section: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3d4036e1-2fe0-469f-95cc-372f1736cad6.png" 
              alt="Nour Trading & Supplies Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className={`font-medium transition-colors hover:text-nour-yellow ${
                  isScrolled ? 'text-nour-dark-gray' : 'text-white'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-nour-dark-gray' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              <span className="text-sm font-medium">
                {language === 'en' ? 'عربي' : 'English'}
              </span>
            </button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-nour-yellow hover:bg-yellow-400 text-nour-dark-gray font-medium px-6"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('hero.cta1')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-nour-dark-gray hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="block w-full text-left px-4 py-3 text-nour-dark-gray hover:bg-gray-50 font-medium"
                >
                  {t(item.key)}
                </button>
              ))}
              <div className="flex items-center justify-between px-4 py-3 border-t">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-nour-dark-gray"
                >
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'عربي' : 'English'}
                  </span>
                </button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-nour-yellow hover:bg-yellow-400 text-nour-dark-gray font-medium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('hero.cta1')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
