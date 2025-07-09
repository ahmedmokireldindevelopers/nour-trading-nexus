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
import { Calendar, MapPin, Users } from 'lucide-react';

const ProjectGallerySection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const projectImages = [
    {
      image: '/lovable-uploads/6eeb083a-d40c-4b76-83f8-16f47fb7e3de.png',
      title: isRTL ? 'تركيب ألواح الألمنيوم المركبة' : 'Installing Aluminum Composite Panels',
      location: isRTL ? 'مول تجاري' : 'Commercial Mall',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress'
    },
    {
      image: '/lovable-uploads/0e5cc940-6cab-4219-bd9c-e77b33f3d1e6.png',
      title: isRTL ? 'مواد البناء - ألواح MAS' : 'Building Materials - MAS Panels',
      location: isRTL ? 'مشروع سكني' : 'Residential Project',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/cfff5bd1-9a0b-4bbe-b48e-f907bd00f007.png',
      title: isRTL ? 'مشروع فيلا سكنية' : 'Residential Villa Project',
      location: isRTL ? 'مجمع سكني' : 'Residential Complex',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/98074594-27b1-412f-a859-12d1c61df66c.png',
      title: isRTL ? 'متجر ريلمي - واجهة تجارية' : 'Realme Store - Commercial Facade',
      location: isRTL ? 'مول تجاري' : 'Commercial Mall',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/a38f4f5b-7e27-4631-95e8-edca30369565.png',
      title: isRTL ? 'تركيب ألواح الألمنيوم' : 'Aluminum Panel Installation',
      location: isRTL ? 'ورشة العمل' : 'Workshop',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress'
    },
    {
      image: '/lovable-uploads/7326c2f2-ed9c-4dad-9545-888d5c13cc7e.png',
      title: isRTL ? 'البنك الأهلي المصري' : 'National Bank of Egypt',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/980629d1-e798-4cdd-8e06-13fb8800a913.png',
      title: isRTL ? 'فرع البنك الأهلي المصري' : 'National Bank of Egypt Branch',
      location: isRTL ? 'منطقة تجارية' : 'Commercial Area',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/05f62cb8-10c6-46b8-bd06-ebd5c82c0488.png',
      title: isRTL ? 'متجر نوك نوك' : 'Nok Nok Store',
      location: isRTL ? 'شارع تجاري' : 'Commercial Street',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/ead3a99f-7f5c-4dd4-92e7-312642aacc35.png',
      title: isRTL ? 'متجر الواصل' : 'Al Wasel Store',
      location: isRTL ? 'مول تجاري' : 'Commercial Mall',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress'
    },
    {
      image: '/lovable-uploads/e3d94439-9980-4a05-b4f3-ff54faad7aa5.png',
      title: isRTL ? 'البنك الزراعي المصري - مرحلة التشطيب' : 'Agricultural Bank of Egypt - Finishing Phase',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress'
    },
    {
      image: '/lovable-uploads/c3de0598-fb73-4137-bdc5-4fd27e8b180b.png',
      title: isRTL ? 'البنك الزراعي المصري - الواجهة الرئيسية' : 'Agricultural Bank of Egypt - Main Facade',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/6fbe1062-da0f-40b2-b795-a147908535d3.png',
      title: isRTL ? 'البنك الزراعي المصري - أثناء التركيب' : 'Agricultural Bank of Egypt - During Installation',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress'
    },
    {
      image: '/lovable-uploads/8c0e00d3-7148-45dd-a84f-5c784e4f15e8.png',
      title: isRTL ? 'البنك الزراعي المصري - مواد البناء' : 'Agricultural Bank of Egypt - Construction Materials',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress'
    },
    {
      image: '/lovable-uploads/72303684-3595-4e6e-b7cc-72cbdf26aaaf.png',
      title: isRTL ? 'متجر توتال - الإضاءة الليلية' : 'Total Store - Night Lighting',
      location: isRTL ? 'شارع تجاري' : 'Commercial Street',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/e3c5f1e0-4982-4e88-b5f4-fbe7b7d33b5d.png',
      title: isRTL ? 'البنك الزراعي المصري - أعمال البناء' : 'Agricultural Bank of Egypt - Construction Work',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress'
    },
    {
      image: '/lovable-uploads/16130827-f6e5-455f-819d-6073ffe0e192.png',
      title: isRTL ? 'متجر توتال - واجهة مضيئة' : 'Total Store - Illuminated Facade',
      location: isRTL ? 'شارع تجاري' : 'Commercial Street',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    },
    {
      image: '/lovable-uploads/1cac0109-9c89-44f1-935a-2bd66dde9bd6.png',
      title: isRTL ? 'مبنى تجاري - واجهة خارجية' : 'Commercial Building - External Facade',
      location: isRTL ? 'منطقة تجارية' : 'Commercial Area',
      date: isRTL ? '2024' : '2024',
      status: isRTL ? 'مكتمل' : 'Completed'
    }
  ];

  return (
    <section id="project-gallery" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-6 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            {isRTL ? 'معرض المشاريع' : 'Project Gallery'}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {isRTL 
              ? 'صور حصرية من مشاريعنا أثناء العمل والتسليم - تركيب الواجهات للمولات التجارية والبنوك'
              : 'Exclusive photos from our projects during work and delivery - Installing facades for commercial malls and banks'
            }
          </p>
        </div>

        <div className="relative max-w-full mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 md:-ml-2">
              {projectImages.map((project, index) => (
                <CarouselItem key={index} className="pl-1 md:pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="h-full">
                    <Card className="bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute top-2 right-2">
                            <Badge 
                              variant={project.status === (isRTL ? 'مكتمل' : 'Completed') ? 'default' : 'secondary'}
                              className="bg-white/90 text-primary text-xs"
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-3">
                        <h3 className={`text-sm font-bold text-primary mb-2 line-clamp-2 group-hover:text-primary/80 transition-colors ${
                          isRTL ? 'font-cairo text-right' : 'font-poppins'
                        }`}>
                          {project.title}
                        </h3>
                        
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <MapPin className="h-3 w-3 text-primary" />
                            <span className={isRTL ? 'font-cairo' : 'font-inter'}>
                              {project.location}
                            </span>
                          </div>
                          
                          <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <Calendar className="h-3 w-3 text-primary" />
                            <span className={isRTL ? 'font-cairo' : 'font-inter'}>
                              {project.date}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl border-0 w-10 h-10" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl border-0 w-10 h-10" />
          </Carousel>
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '100+', label: isRTL ? 'مشروع مصور' : 'Documented Projects' },
            { number: '50+', label: isRTL ? 'مول تجاري' : 'Commercial Malls' },
            { number: '25+', label: isRTL ? 'فرع بنكي' : 'Bank Branches' },
            { number: '200+', label: isRTL ? 'واجهة مكتملة' : 'Completed Facades' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className={`text-muted-foreground ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;