import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import { CheckCircle, Zap, Shield, Award } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { Link } from 'react-router-dom';

// Import product images
import pexPipe1 from '../assets/pex-pipe-1.jpg';
import pexPipe2 from '../assets/pex-pipe-2.jpg';
import pexPipe3 from '../assets/pex-pipe-3.jpg';
import electricalWires1 from '../assets/electrical-wires-1.jpg';
import electricalWires2 from '../assets/electrical-wires-2.jpg';
import electricalWires3 from '../assets/electrical-wires-3.jpg';
import dibondInstallation1 from '../assets/dibond-installation-1.jpg';
import dibondInstallation2 from '../assets/dibond-installation-2.jpg';
import dibondInstallation3 from '../assets/dibond-installation-3.jpg';
import accessories1 from '../assets/accessories-1.jpg';
import accessories2 from '../assets/accessories-2.jpg';
import accessories3 from '../assets/accessories-3.jpg';
import customerInstall1 from '../assets/customer-install-1.jpg';
import customer2 from '../assets/customer-2.jpg';
import customer3 from '../assets/customer-3.jpg';

const ProductsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const products = [
    {
      id: 'pex-pipes',
      name: isRTL ? 'أنابيب PEX' : 'PEX Pipes',
      description: isRTL ? 'أنابيب PEX عالية الجودة لأنظمة السباكة' : 'High-quality PEX pipes for plumbing systems',
      images: [pexPipe1, pexPipe2, pexPipe3],
      specifications: [
        { label: isRTL ? 'الأحجام' : 'Sizes', value: isRTL ? '12مم - 32مم' : '12mm - 32mm' },
        { label: isRTL ? 'الضغط' : 'Working Pressure', value: '10 Bar' },
        { label: isRTL ? 'درجة الحرارة' : 'Max Temperature', value: '95°C' },
        { label: isRTL ? 'الضمان' : 'Warranty', value: isRTL ? '25 سنة' : '25 Years' }
      ],
      features: [
        isRTL ? 'مقاوم للتجمد' : 'Freeze resistant',
        isRTL ? 'سهل التركيب' : 'Easy installation',
        isRTL ? 'خالي من الرصاص' : 'Lead-free'
      ]
    },
    {
      id: 'electrical-wires',
      name: isRTL ? 'الأسلاك الكهربائية' : 'Electrical Wires',
      description: isRTL ? 'أسلاك كهربائية عالية الجودة للتطبيقات المختلفة' : 'High-quality electrical wires for various applications',
      images: [electricalWires1, electricalWires2, electricalWires3],
      specifications: [
        { label: isRTL ? 'الأحجام' : 'Sizes', value: isRTL ? '1.5مم - 25مم²' : '1.5mm - 25mm²' },
        { label: isRTL ? 'الجهد' : 'Voltage Rating', value: '450/750V' },
        { label: isRTL ? 'المعيار' : 'Standard', value: 'IEC 60227' },
        { label: isRTL ? 'المادة' : 'Material', value: isRTL ? 'نحاس خالص' : 'Pure Copper' }
      ],
      features: [
        isRTL ? 'موصلية عالية' : 'High conductivity',
        isRTL ? 'مقاوم للحرارة' : 'Heat resistant',
        isRTL ? 'عازل آمن' : 'Safe insulation'
      ]
    },
    {
      id: 'dibond-installations',
      name: isRTL ? 'تركيبات الديبوند' : 'Dibond Installations',
      description: isRTL ? 'تركيبات ديبوند احترافية للمولات والمحلات والسوبر ماركت' : 'Professional dibond installations for malls, shops, and supermarkets',
      images: [dibondInstallation1, dibondInstallation2, dibondInstallation3],
      specifications: [
        { label: isRTL ? 'السماكة' : 'Thickness', value: isRTL ? '3-6مم' : '3-6mm' },
        { label: isRTL ? 'المقاس' : 'Size', value: isRTL ? 'حسب الطلب' : 'Custom sizes' },
        { label: isRTL ? 'المادة' : 'Material', value: isRTL ? 'ألومنيوم مركب' : 'Aluminum Composite' },
        { label: isRTL ? 'الألوان' : 'Colors', value: isRTL ? 'متعدد الألوان' : 'Multi-color' }
      ],
      features: [
        isRTL ? 'مقاوم للعوامل الجوية' : 'Weather resistant',
        isRTL ? 'سهل التنظيف' : 'Easy to clean',
        isRTL ? 'تصميم عصري' : 'Modern design'
      ]
    },
    {
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
    }
  ];

  const allImages = [
    ...products[0].images,
    ...products[1].images,
    ...products[2].images,
    ...products[3].images,
    customerInstall1,
    customer2,
    customer3
  ];

  const customerTestimonials = [
    {
      name: isRTL ? 'أحمد محمد - مدير المشاتريع' : 'Ahmed Mohammed - Project Manager',
      company: isRTL ? 'شركة البناء الحديث' : 'Modern Construction Co.',
      text: isRTL ? 'منتجات عالية الجودة وخدمة ممتازة. نثق بشركة نور للتجارة والتوريدات في جميع مشاريعنا.' : 'High-quality products and excellent service. We trust Nour Trading & Supplies for all our projects.',
      image: customerInstall1
    },
    {
      name: isRTL ? 'سارة علي - مهندسة كهرباء' : 'Sarah Ali - Electrical Engineer',
      company: isRTL ? 'مؤسسة الهندسة المتقدمة' : 'Advanced Engineering Corp.',
      text: isRTL ? 'التوريد في الوقت المحدد والمنتجات تطابق أعلى المعايير الدولية.' : 'Timely delivery and products meet the highest international standards.',
      image: customer2
    },
    {
      name: isRTL ? 'محمد الخالدي - مقاول' : 'Mohammed Al-Khalidi - Contractor',
      company: isRTL ? 'مقاولات الخليج' : 'Gulf Contracting',
      text: isRTL ? 'شراكة موثوقة منذ سنوات. المواسير والتجهيزات بجودة ممتازة.' : 'Reliable partnership for years. Excellent quality pipes and fittings.',
      image: customer3
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-nour-blue mb-6 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {isRTL ? 'منتجاتنا ومواصفاتها' : 'Our Products & Specifications'}
          </h2>
          <p className={`text-xl text-nour-gray max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {isRTL 
              ? 'نوفر أعلى جودة من المواسير والتجهيزات الكهربائية وأنظمة السباكة'
              : 'We supply the highest quality electrical conduits and plumbing systems'
            }
          </p>
        </div>

        {/* Animated Product Carousel */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold text-nour-blue text-center mb-12 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {isRTL ? 'معرض المنتجات' : 'Product Gallery'}
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {allImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Product Header */}
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="mb-4 bg-nour-yellow text-nour-dark-gray">
                    {isRTL ? 'منتج مميز' : 'Premium Product'}
                  </Badge>
                  <h3 className={`text-2xl font-bold text-nour-blue mb-3 ${
                    isRTL ? 'font-cairo' : 'font-poppins'
                  }`}>
                    {product.name}
                  </h3>
                  <p className={`text-nour-gray mb-6 ${
                    isRTL ? 'font-cairo' : 'font-inter'
                  }`}>
                    {product.description}
                  </p>
                </div>

                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className={`text-lg font-semibold text-nour-blue mb-4 flex items-center ${
                    isRTL ? 'font-cairo' : 'font-poppins'
                  }`}>
                    <Shield className="w-5 h-5 mr-2 text-nour-yellow" />
                    {isRTL ? 'المواصفات التقنية' : 'Technical Specifications'}
                  </h4>
                  <div className="space-y-2">
                    {product.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className={`text-sm font-medium text-nour-gray ${
                          isRTL ? 'font-cairo' : 'font-inter'
                        }`}>
                          {spec.label}:
                        </span>
                        <span className={`text-sm font-semibold text-nour-blue ${
                          isRTL ? 'font-cairo' : 'font-inter'
                        }`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className={`text-lg font-semibold text-nour-blue mb-4 flex items-center ${
                    isRTL ? 'font-cairo' : 'font-poppins'
                  }`}>
                    <Award className="w-5 h-5 mr-2 text-nour-yellow" />
                    {isRTL ? 'المميزات' : 'Key Features'}
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm text-nour-gray ${
                        isRTL ? 'font-cairo' : 'font-inter'
                      }`}>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link 
                    to={`/${product.id.replace('_', '-')}`}
                    className="block"
                  >
                    <Button className="w-full bg-nour-blue hover:bg-nour-light-blue text-white font-semibold py-3">
                      {isRTL ? 'عرض التفاصيل' : 'View Details'}
                    </Button>
                  </Link>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-nour-blue text-nour-blue hover:bg-nour-blue hover:text-white"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {isRTL ? 'طلب عرض سعر' : 'Request Quote'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Testimonials with Photos */}
        <div className="bg-gradient-to-br from-nour-blue to-nour-light-blue rounded-2xl p-12 text-white animate-fade-in">
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {isRTL ? 'آراء عملائنا' : 'What Our Customers Say'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-nour-yellow">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className={`text-white/90 mb-4 italic ${
                    isRTL ? 'font-cairo' : 'font-inter'
                  }`}>
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className={`font-semibold text-nour-yellow ${
                      isRTL ? 'font-cairo' : 'font-poppins'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm text-white/80 ${
                      isRTL ? 'font-cairo' : 'font-inter'
                    }`}>
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;