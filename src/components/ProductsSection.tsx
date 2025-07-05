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

// Import product images
import pvcConduit1 from '../assets/pvc-conduit-1.jpg';
import pvcConduit2 from '../assets/pvc-conduit-2.jpg';
import pvcConduit3 from '../assets/pvc-conduit-3.jpg';
import flexibleConduit1 from '../assets/flexible-conduit-1.jpg';
import flexibleConduit2 from '../assets/flexible-conduit-2.jpg';
import flexibleConduit3 from '../assets/flexible-conduit-3.jpg';
import pexPipe1 from '../assets/pex-pipe-1.jpg';
import pexPipe2 from '../assets/pex-pipe-2.jpg';
import pexPipe3 from '../assets/pex-pipe-3.jpg';
import customerInstall1 from '../assets/customer-install-1.jpg';
import customer2 from '../assets/customer-2.jpg';
import customer3 from '../assets/customer-3.jpg';

const ProductsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const products = [
    {
      id: 'pvc-conduit',
      name: isRTL ? 'مواسير PVC الكهربائية' : 'Electrical PVC Conduit',
      description: isRTL ? 'مواسير PVC عالية الجودة للتمديدات الكهربائية' : 'High-quality PVC conduits for electrical installations',
      images: [pvcConduit1, pvcConduit2, pvcConduit3],
      specifications: [
        { label: isRTL ? 'الأحجام' : 'Sizes', value: isRTL ? '16مم - 110مم' : '16mm - 110mm' },
        { label: isRTL ? 'المعيار' : 'Standard', value: 'BS EN 61386' },
        { label: isRTL ? 'المقاومة' : 'Impact Resistance', value: isRTL ? 'عالية' : 'High' },
        { label: isRTL ? 'درجة الحرارة' : 'Temperature Range', value: '-25°C to +60°C' }
      ],
      features: [
        isRTL ? 'مقاوم للتآكل' : 'Corrosion resistant',
        isRTL ? 'سهل التركيب' : 'Easy installation',
        isRTL ? 'متوافق مع المعايير الدولية' : 'International standards compliant'
      ]
    },
    {
      id: 'flexible-conduit',
      name: isRTL ? 'مواسير PVC المرنة' : 'Flexible PVC Electrical Conduit',
      description: isRTL ? 'مواسير مرنة للتطبيقات الكهربائية المعقدة' : 'Flexible conduits for complex electrical applications',
      images: [flexibleConduit1, flexibleConduit2, flexibleConduit3],
      specifications: [
        { label: isRTL ? 'الأحجام' : 'Sizes', value: isRTL ? '10مم - 50مم' : '10mm - 50mm' },
        { label: isRTL ? 'المرونة' : 'Flexibility', value: isRTL ? 'عالية' : 'High' },
        { label: isRTL ? 'مقاومة الضغط' : 'Crush Resistance', value: isRTL ? 'ممتازة' : 'Excellent' },
        { label: isRTL ? 'اللون' : 'Color', value: isRTL ? 'أسود/رمادي' : 'Black/Gray' }
      ],
      features: [
        isRTL ? 'مرونة فائقة' : 'Superior flexibility',
        isRTL ? 'حماية ممتازة للكابلات' : 'Excellent cable protection',
        isRTL ? 'مناسب للمساحات الضيقة' : 'Ideal for tight spaces'
      ]
    },
    {
      id: 'pex-pipe',
      name: isRTL ? 'أنابيب PEX الحمراء' : 'PEX Pipe / Red PEX Tubing',
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
    }
  ];

  const allImages = [
    ...products[0].images,
    ...products[1].images,
    ...products[2].images,
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
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
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
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-nour-blue hover:bg-nour-light-blue text-white font-semibold py-3"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {isRTL ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
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