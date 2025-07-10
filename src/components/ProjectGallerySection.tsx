import React, { useMemo } from 'react';
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
import { Calendar, MapPin, Building2, Zap } from 'lucide-react';

const ProjectGallerySection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  // Dynamic project data - now more balanced and organized
  const projectImages = useMemo(() => [
    {
      image: '/lovable-uploads/6eeb083a-d40c-4b76-83f8-16f47fb7e3de.png',
      title: isRTL ? 'تركيب ألواح الألمنيوم المركبة' : 'Installing Aluminum Composite Panels',
      location: isRTL ? 'مول تجاري' : 'Commercial Mall',
      date: '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress',
      category: 'construction',
      priority: 'high'
    },
    {
      image: '/lovable-uploads/0e5cc940-6cab-4219-bd9c-e77b33f3d1e6.png',
      title: isRTL ? 'مواد البناء - ألواح MAS' : 'Building Materials - MAS Panels',
      location: isRTL ? 'مشروع سكني' : 'Residential Project',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'materials',
      priority: 'high'
    },
    {
      image: '/lovable-uploads/cfff5bd1-9a0b-4bbe-b48e-f907bd00f007.png',
      title: isRTL ? 'مشروع فيلا سكنية' : 'Residential Villa Project',
      location: isRTL ? 'مجمع سكني' : 'Residential Complex',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'residential',
      priority: 'high'
    },
    {
      image: '/lovable-uploads/98074594-27b1-412f-a859-12d1c61df66c.png',
      title: isRTL ? 'متجر ريلمي - واجهة تجارية' : 'Realme Store - Commercial Facade',
      location: isRTL ? 'مول تجاري' : 'Commercial Mall',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'commercial',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/a38f4f5b-7e27-4631-95e8-edca30369565.png',
      title: isRTL ? 'تركيب ألواح الألمنيوم' : 'Aluminum Panel Installation',
      location: isRTL ? 'ورشة العمل' : 'Workshop',
      date: '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress',
      category: 'construction',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/7326c2f2-ed9c-4dad-9545-888d5c13cc7e.png',
      title: isRTL ? 'البنك الأهلي المصري' : 'National Bank of Egypt',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'banking',
      priority: 'high'
    },
    {
      image: '/lovable-uploads/980629d1-e798-4cdd-8e06-13fb8800a913.png',
      title: isRTL ? 'فرع البنك الأهلي المصري' : 'National Bank of Egypt Branch',
      location: isRTL ? 'منطقة تجارية' : 'Commercial Area',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'banking',
      priority: 'high'
    },
    {
      image: '/lovable-uploads/05f62cb8-10c6-46b8-bd06-ebd5c82c0488.png',
      title: isRTL ? 'متجر نوك نوك' : 'Nok Nok Store',
      location: isRTL ? 'شارع تجاري' : 'Commercial Street',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'retail',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/ead3a99f-7f5c-4dd4-92e7-312642aacc35.png',
      title: isRTL ? 'متجر الواصل' : 'Al Wasel Store',
      location: isRTL ? 'مول تجاري' : 'Commercial Mall',
      date: '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress',
      category: 'retail',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/e3d94439-9980-4a05-b4f3-ff54faad7aa5.png',
      title: isRTL ? 'البنك الزراعي المصري - مرحلة التشطيب' : 'Agricultural Bank of Egypt - Finishing Phase',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress',
      category: 'banking',
      priority: 'high'
    },
    {
      image: '/lovable-uploads/c3de0598-fb73-4137-bdc5-4fd27e8b180b.png',
      title: isRTL ? 'البنك الزراعي المصري - الواجهة الرئيسية' : 'Agricultural Bank of Egypt - Main Facade',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'banking',
      priority: 'high'
    },
    {
      image: '/lovable-uploads/6fbe1062-da0f-40b2-b795-a147908535d3.png',
      title: isRTL ? 'البنك الزراعي المصري - أثناء التركيب' : 'Agricultural Bank of Egypt - During Installation',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress',
      category: 'banking',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/8c0e00d3-7148-45dd-a84f-5c784e4f15e8.png',
      title: isRTL ? 'البنك الزراعي المصري - مواد البناء' : 'Agricultural Bank of Egypt - Construction Materials',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress',
      category: 'materials',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/72303684-3595-4e6e-b7cc-72cbdf26aaaf.png',
      title: isRTL ? 'متجر توتال - الإضاءة الليلية' : 'Total Store - Night Lighting',
      location: isRTL ? 'شارع تجاري' : 'Commercial Street',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'retail',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/e3c5f1e0-4982-4e88-b5f4-fbe7b7d33b5d.png',
      title: isRTL ? 'البنك الزراعي المصري - أعمال البناء' : 'Agricultural Bank of Egypt - Construction Work',
      location: isRTL ? 'فرع بنكي' : 'Bank Branch',
      date: '2024',
      status: isRTL ? 'قيد التنفيذ' : 'In Progress',
      category: 'construction',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/16130827-f6e5-455f-819d-6073ffe0e192.png',
      title: isRTL ? 'متجر توتال - واجهة مضيئة' : 'Total Store - Illuminated Facade',
      location: isRTL ? 'شارع تجاري' : 'Commercial Street',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'retail',
      priority: 'medium'
    },
    {
      image: '/lovable-uploads/1cac0109-9c89-44f1-935a-2bd66dde9bd6.png',
      title: isRTL ? 'مبنى تجاري - واجهة خارجية' : 'Commercial Building - External Facade',
      location: isRTL ? 'منطقة تجارية' : 'Commercial Area',
      date: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      category: 'commercial',
      priority: 'medium'
    }
  ], [isRTL]);

  // Dynamic statistics calculation
  const stats = useMemo(() => {
    const completed = projectImages.filter(p => p.status === (isRTL ? 'مكتمل' : 'Completed')).length;
    const inProgress = projectImages.filter(p => p.status === (isRTL ? 'قيد التنفيذ' : 'In Progress')).length;
    const bankingProjects = projectImages.filter(p => p.category === 'banking').length;
    const commercialProjects = projectImages.filter(p => p.category === 'commercial' || p.category === 'retail').length;

    return [
      { 
        number: `${projectImages.length}+`, 
        label: isRTL ? 'مشروع مصور' : 'Documented Projects',
        icon: Building2
      },
      { 
        number: `${completed}`, 
        label: isRTL ? 'مشروع مكتمل' : 'Completed Projects',
        icon: Building2
      },
      { 
        number: `${bankingProjects}`, 
        label: isRTL ? 'فرع بنكي' : 'Bank Branches',
        icon: Building2
      },
      { 
        number: `${commercialProjects}`, 
        label: isRTL ? 'واجهة تجارية' : 'Commercial Facades',
        icon: Zap
      }
    ];
  }, [projectImages, isRTL]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'banking': return Building2;
      case 'commercial': case 'retail': return Zap;
      case 'construction': return Building2;
      default: return Building2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking': return 'bg-primary/10 text-primary';
      case 'commercial': case 'retail': return 'bg-secondary/10 text-secondary-foreground';
      case 'construction': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="project-gallery" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <span className={`text-primary font-medium ${isRTL ? 'font-cairo' : 'font-poppins'}`}>
              {isRTL ? 'معرض المشاريع' : 'Project Gallery'}
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${
            isRTL ? 'font-cairo' : 'font-poppins'
          }`}>
            <span className="gradient-text">
              {isRTL ? 'أعمالنا المميزة' : 'Our Featured Work'}
            </span>
          </h2>
          
          <p className={`text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
            isRTL ? 'font-cairo' : 'font-inter'
          }`}>
            {isRTL 
              ? 'صور حصرية من مشاريعنا أثناء العمل والتسليم - تركيب الواجهات للمولات التجارية والبنوك بأعلى معايير الجودة والاحترافية'
              : 'Exclusive photos from our projects during construction and delivery - Installing facades for commercial malls and banks with the highest standards of quality and professionalism'
            }
          </p>
        </div>

        {/* Dynamic Project Carousel */}
        <div className="relative max-w-full mx-auto mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projectImages.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                    <div className="h-full">
                      <Card className="bg-card card-hover group overflow-hidden h-full border-0 shadow-md">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 md:h-56 object-cover transition-all duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          
                          {/* Enhanced Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute top-3 right-3 flex gap-2">
                              <Badge 
                                variant={project.status === (isRTL ? 'مكتمل' : 'Completed') ? 'default' : 'secondary'}
                                className="bg-white/95 text-primary text-xs font-medium backdrop-blur-sm"
                              >
                                {project.status}
                              </Badge>
                              <Badge 
                                className={`text-xs font-medium backdrop-blur-sm ${getCategoryColor(project.category)}`}
                              >
                                <CategoryIcon className="w-3 h-3 mr-1" />
                                {project.category}
                              </Badge>
                            </div>
                          </div>

                          {/* Priority Indicator */}
                          {project.priority === 'high' && (
                            <div className="absolute top-3 left-3">
                              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                            </div>
                          )}
                        </div>
                        
                        <CardContent className="p-4 bg-gradient-card">
                          <h3 className={`text-base font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight ${
                            isRTL ? 'font-cairo text-right' : 'font-poppins'
                          }`}>
                            {project.title}
                          </h3>
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className={`${isRTL ? 'font-cairo' : 'font-inter'} truncate`}>
                                {project.location}
                              </span>
                            </div>
                            
                            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className={`${isRTL ? 'font-cairo' : 'font-inter'}`}>
                                {project.date}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-card/95 hover:bg-card shadow-xl border-2 border-primary/20 w-12 h-12 transition-all duration-300 hover:scale-110" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-card/95 hover:bg-card shadow-xl border-2 border-primary/20 w-12 h-12 transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>

        {/* Enhanced Dynamic Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 shadow-lg card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className={`text-muted-foreground text-sm ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;