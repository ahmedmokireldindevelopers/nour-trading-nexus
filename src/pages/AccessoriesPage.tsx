import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { CheckCircle, Shield, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import product images
import accessories1 from '../assets/accessories-1.jpg';
import accessories2 from '../assets/accessories-2.jpg';
import accessories3 from '../assets/accessories-3.jpg';

const AccessoriesContent: React.FC = () => {
  const { isRTL } = useLanguage();

  const productData = {
    id: 'accessories',
    name: isRTL ? 'الإكسسوارات' : 'Accessories',
    description: isRTL ? 'إكسسوارات وقطع غيار متنوعة للشركات والعملاء' : 'Various accessories and spare parts for companies and customers',
    images: [accessories1, accessories2, accessories3],
    specifications: [
      { label: isRTL ? 'الأنواع' : 'Types', value: isRTL ? 'متنوعة' : 'Various' },
      { label: isRTL ? 'الجودة' : 'Quality', value: isRTL ? 'عالية' : 'High' },
      { label: isRTL ? 'التوافق' : 'Compatibility', value: isRTL ? 'عالمي' : 'Universal' },
      { label: isRTL ? 'الضمان' : 'Warranty', value: isRTL ? 'سنة واحدة' : '1 Year' }
    ],
    features: [
      isRTL ? 'جودة عالية' : 'Premium quality',
      isRTL ? 'تنوع كبير' : 'Wide variety',
      isRTL ? 'أسعار تنافسية' : 'Competitive prices'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center mb-8 text-nour-blue hover:text-nour-light-blue transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold text-nour-blue mb-6 ${
              isRTL ? 'font-cairo' : 'font-poppins'
            }`}>
              {productData.name}
            </h1>
            <p className={`text-xl text-nour-gray max-w-3xl mx-auto leading-relaxed ${
              isRTL ? 'font-cairo' : 'font-inter'
            }`}>
              {productData.description}
            </p>
          </div>

          {/* Product Images Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {productData.images.map((image, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${productData.name} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold text-nour-blue mb-6 flex items-center ${
                  isRTL ? 'font-cairo' : 'font-poppins'
                }`}>
                  <Shield className="w-6 h-6 mr-3 text-nour-yellow" />
                  {isRTL ? 'المواصفات التقنية' : 'Technical Specifications'}
                </h3>
                <div className="space-y-4">
                  {productData.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className={`font-medium text-nour-gray ${
                        isRTL ? 'font-cairo' : 'font-inter'
                      }`}>
                        {spec.label}:
                      </span>
                      <span className={`font-semibold text-nour-blue ${
                        isRTL ? 'font-cairo' : 'font-inter'
                      }`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold text-nour-blue mb-6 flex items-center ${
                  isRTL ? 'font-cairo' : 'font-poppins'
                }`}>
                  <Award className="w-6 h-6 mr-3 text-nour-yellow" />
                  {isRTL ? 'المميزات الرئيسية' : 'Key Features'}
                </h3>
                <ul className="space-y-4">
                  {productData.features.map((feature, index) => (
                    <li key={index} className={`flex items-center text-nour-gray ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}>
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button className="w-full bg-nour-blue hover:bg-nour-light-blue text-white font-semibold py-3">
                    {isRTL ? 'طلب عرض سعر' : 'Request Quote'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const AccessoriesPage: React.FC = () => {
  return (
    <LanguageProvider>
      <AccessoriesContent />
    </LanguageProvider>
  );
};

export default AccessoriesPage;