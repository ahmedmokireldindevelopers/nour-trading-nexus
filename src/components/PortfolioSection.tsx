
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Play, Pause } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: isRTL ? 'شحن المولدات الكهربائية' : 'Generator Shipping',
      description: isRTL ? 'نقل وشحن المولدات عالية الضغط للشركات الكبرى' : 'Transportation of high-pressure generators for major companies',
      category: isRTL ? 'الشحن والنقل' : 'Shipping & Transport'
    },
    {
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: isRTL ? 'تركيب المحركات الصناعية' : 'Industrial Motor Installation',
      description: isRTL ? 'تركيب وصيانة المحركات في المرافق الصناعية' : 'Installation and maintenance of motors in industrial facilities',
      category: isRTL ? 'التركيب والصيانة' : 'Installation & Maintenance'
    },
    {
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: isRTL ? 'مستودع قطع الغيار' : 'Spare Parts Warehouse',
      description: isRTL ? 'مخازن متخصصة لقطع غيار المولدات والمحركات' : 'Specialized warehouses for generator and motor spare parts',
      category: isRTL ? 'التخزين والتوريد' : 'Storage & Supply'
    },
    {
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: isRTL ? 'اختبار المعدات' : 'Equipment Testing',
      description: isRTL ? 'فحص واختبار المعدات قبل التسليم للعملاء' : 'Testing and inspection of equipment before delivery to clients',
      category: isRTL ? 'الفحص والاختبار' : 'Testing & Inspection'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: isRTL ? 'التركيب الميداني' : 'Field Installation',
      description: isRTL ? 'فرق متخصصة لتركيب المعدات في المواقع' : 'Specialized teams for on-site equipment installation',
      category: isRTL ? 'الخدمات الميدانية' : 'Field Services'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: isRTL ? 'صيانة دورية' : 'Preventive Maintenance',
      description: isRTL ? 'برامج الصيانة الدورية للمولدات والمحركات' : 'Preventive maintenance programs for generators and motors',
      category: isRTL ? 'الصيانة الدورية' : 'Preventive Maintenance'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-nour-blue mb-6 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {isRTL ? 'معرض أعمالنا' : 'Our Portfolio'}
          </h2>
          <p className={`text-xl text-nour-gray max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {isRTL 
              ? 'شاهد أحدث مشاريعنا في مجال الشحن والتوريد والتركيب'
              : 'Explore our latest projects in shipping, supply, and installation'
            }
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className="bg-nour-yellow text-nour-dark-gray mb-2">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className={`text-xl font-bold text-nour-blue mb-3 group-hover:text-nour-light-blue transition-colors ${
                          isRTL ? 'font-cairo' : 'font-poppins'
                        }`}>
                          {item.title}
                        </h3>
                        
                        <p className={`text-nour-gray leading-relaxed ${
                          isRTL ? 'font-cairo text-right' : 'font-inter'
                        }`}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border-0 w-12 h-12" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border-0 w-12 h-12" />
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: isRTL ? 'مشروع مكتمل' : 'Completed Projects' },
            { number: '50+', label: isRTL ? 'عميل راضي' : 'Satisfied Clients' },
            { number: '15+', label: isRTL ? 'سنة خبرة' : 'Years Experience' },
            { number: '24/7', label: isRTL ? 'دعم فني' : 'Technical Support' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-nour-blue mb-2">{stat.number}</div>
              <div className={`text-nour-gray ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
