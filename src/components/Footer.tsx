import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, Facebook, Users, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { key: 'nav.home', section: 'hero' },
    { key: 'nav.about', section: 'about' },
    { key: 'nav.services', section: 'services' },
    { key: 'nav.contact', section: 'contact' }
  ];

  const services = [
    'services.supplies.title',
    'services.contracting.title',
    'services.delivery.title',
    'services.sourcing.title'
  ];

  const socialLinks = [
    {
      icon: <Users className="w-5 h-5" />,
      name: 'WhatsApp',
      url: 'https://wa.me/97412345678',
      color: 'hover:bg-green-500'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: 'Facebook',
      url: 'https://facebook.com/nourtrading',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/nourtrading',
      color: 'hover:bg-blue-700'
    }
  ];

  return (
    <footer className="bg-nour-dark-gray text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/3d4036e1-2fe0-469f-95cc-372f1736cad6.png" 
                alt="Nour Trading & Supplies Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <p className={`text-gray-300 leading-relaxed ${
              isRTL ? 'font-cairo' : 'font-inter'
            }`}>
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nour-yellow flex-shrink-0" />
                <span className={`text-gray-300 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                  +974 1234 5678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nour-yellow flex-shrink-0" />
                <span className={`text-gray-300 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                  info@nourtrading.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-nour-yellow flex-shrink-0" />
                <span className={`text-gray-300 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                  {isRTL ? 'الدوحة، قطر' : 'Doha, Qatar'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-6 text-nour-yellow ${
              isRTL ? 'font-cairo' : 'font-poppins'
            }`}>
              {t('footer.quicklinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className={`text-gray-300 hover:text-nour-yellow transition-colors ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-xl font-bold mb-6 text-nour-yellow ${
              isRTL ? 'font-cairo' : 'font-poppins'
            }`}>
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className={`text-gray-300 hover:text-nour-yellow transition-colors ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}
                  >
                    {t(service)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className={`text-xl font-bold mb-6 text-nour-yellow ${
              isRTL ? 'font-cairo' : 'font-poppins'
            }`}>
              {t('footer.followus')}
            </h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-nour-yellow hover:bg-yellow-400 text-nour-dark-gray font-semibold"
            >
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-gray-400 text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}>
              © 2024 Nour Trading & Supplies. {t('footer.rights')}.
            </p>
            <div className="flex space-x-6">
              <button className={`text-gray-400 hover:text-nour-yellow text-sm transition-colors ${
                isRTL ? 'font-cairo' : 'font-inter'
              }`}>
                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </button>
              <button className={`text-gray-400 hover:text-nour-yellow text-sm transition-colors ${
                isRTL ? 'font-cairo' : 'font-inter'
              }`}>
                {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
