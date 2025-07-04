import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, MessageSquare, Facebook, Users } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: isRTL ? 'تم إرسال الرسالة' : 'Message Sent',
      description: isRTL 
        ? 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.'
        : 'Thank you for contacting us. We will get back to you as soon as possible.',
    });
    
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-nour-yellow" />,
      title: t('contact.info.phone'),
      content: '+974 1234 5678',
      action: () => window.open('tel:+97412345678')
    },
    {
      icon: <Mail className="w-6 h-6 text-nour-yellow" />,
      title: t('contact.info.email'),
      content: 'info@nourtrading.com',
      action: () => window.open('mailto:info@nourtrading.com')
    },
    {
      icon: <MapPin className="w-6 h-6 text-nour-yellow" />,
      title: t('contact.info.address'),
      content: isRTL ? 'الدوحة، قطر' : 'Doha, Qatar',
      action: () => window.open('https://maps.google.com')
    }
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-nour-blue mb-6 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {t('contact.title')}
          </h2>
          <p className={`text-xl text-nour-gray max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl animate-fade-in-left">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className={`text-nour-dark-gray font-medium ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}>
                      {t('contact.form.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-nour-blue focus:ring-nour-blue"
                      placeholder={t('contact.form.name')}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className={`text-nour-dark-gray font-medium ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}>
                      {t('contact.form.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-nour-blue focus:ring-nour-blue"
                      placeholder={t('contact.form.email')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className={`text-nour-dark-gray font-medium ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}>
                      {t('contact.form.phone')}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-nour-blue focus:ring-nour-blue"
                      placeholder={t('contact.form.phone')}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className={`text-nour-dark-gray font-medium ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}>
                      {t('contact.form.company')}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 border-gray-300 focus:border-nour-blue focus:ring-nour-blue"
                      placeholder={t('contact.form.company')}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className={`text-nour-dark-gray font-medium ${
                    isRTL ? 'font-cairo' : 'font-inter'
                  }`}>
                    {t('contact.form.message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 border-gray-300 focus:border-nour-blue focus:ring-nour-blue resize-none"
                    placeholder={t('contact.form.message')}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-nour-blue hover:bg-nour-light-blue text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting 
                    ? (isRTL ? 'جاري الإرسال...' : 'Sending...') 
                    : t('contact.form.submit')
                  }
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className={`text-2xl font-bold text-nour-blue mb-6 ${
                  isRTL ? 'font-cairo' : 'font-poppins'
                }`}>
                  {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={info.action}
                    >
                      <div className="w-12 h-12 bg-nour-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className={isRTL ? 'mr-4' : ''}>
                        <h4 className={`font-semibold text-nour-dark-gray ${
                          isRTL ? 'font-cairo' : 'font-inter'
                        }`}>
                          {info.title}
                        </h4>
                        <p className={`text-nour-gray ${
                          isRTL ? 'font-cairo' : 'font-inter'
                        }`}>
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className={`text-2xl font-bold text-nour-blue mb-6 ${
                  isRTL ? 'font-cairo' : 'font-poppins'
                }`}>
                  {t('footer.followus')}
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-nour-dark-gray text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-nour-blue to-nour-light-blue rounded-xl p-6 text-white">
                <h3 className={`text-xl font-bold mb-4 ${
                  isRTL ? 'font-cairo' : 'font-poppins'
                }`}>
                  {isRTL ? 'ساعات العمل' : 'Business Hours'}
                </h3>
                <div className={`space-y-2 ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                  <div className="flex justify-between">
                    <span>{isRTL ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isRTL ? 'السبت' : 'Saturday'}</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between opacity-75">
                    <span>{isRTL ? 'الجمعة' : 'Friday'}</span>
                    <span>{isRTL ? 'مغلق' : 'Closed'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
