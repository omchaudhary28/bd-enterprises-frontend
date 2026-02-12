import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import PageHero from '../PageHero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Fabrication = () => {
  React.useEffect(() => {
    if (AOS && typeof AOS.refresh === 'function') {
      AOS.refresh();
    }
  }, []);

  const fabricationImages = [
    '/images/complainces%20and%20audits/Industrial-buildings-2.jpg',
    '/images/sprinkler%20system/facilities-management-pipes-29818525.webp',
    '/images/complainces%20and%20audits/0_l7xz_e_0Y31BCplJ.png',
    '/images/sprinkler%20system/Fire_sprinkler_roof_mount_side_view.jpg',
    '/images/Hero%20Images/overhead_curve_cleaning.jpg',
    '/images/complainces%20and%20audits/fire-and-life-safety-safety-inspection-checklist-sipe.jpg',
  ];

  const services = [
    { id: 'fire-equipment-fabrication', imageIndex: 0, name: 'Fire Extinguisher & Equipment Cabinets', summary: 'Custom fabrication of fire extinguisher cabinets, hose reel cabinets, and mounting brackets for fire safety equipment.', useCases: ['Fire extinguisher cabinets and wall mounts', 'Hose reel cabinets and stands', 'Fire blanket storage cabinets', 'Fire safety equipment brackets and frames'], protection: 'Precision fabrication using quality materials. Welded and finished to meet NFPA and fire safety standards.', bdValue: "One-stop solutions for fire safety equipment fabrication. Custom designs to fit your facility's exact requirements." },
    { id: 'sprinkler-fabrication', imageIndex: 1, name: 'Sprinkler System Pipe & Supports', summary: 'Fabrication of sprinkler system pipe components, pipe hangers, support structures, and riser assemblies.', useCases: ['Sprinkler pipe fabrication and assembly', 'Pipe hangers and seismic bracing', 'Sprinkler riser and manifold fabrication', 'Fire suppression piping support structures'], protection: 'Engineered and fabricated to NFPA 13 standards. Proper sizing, materials, and installation support included.', bdValue: 'Expert fire sprinkler fabrication integrated with our suppression solutions. Seamless installation and compliance.' },
    { id: 'fire-safety-enclosures', imageIndex: 4, name: 'Fire Alarm & Safety Enclosures', summary: 'Custom enclosures and mounting systems for fire alarm panels, detection equipment, and emergency systems.', useCases: ['Fire alarm panel enclosures', 'Smoke detector mounting brackets', 'Emergency lighting housings', 'Fire pump and valve cabinets'], protection: 'Quality materials and workmanship. Fabrication meets applicable fire safety codes and NFPA standards.', bdValue: '25+ years of experience in fire safety fabrication. Trusted by enterprises for code-compliant installations.' },
  ];

  const benefits = ['Fire safety-specific fabrication only', 'NFPA and code-compliant designs', 'Quality materials and expert workmanship', 'Integrated with fire extinguisher, sprinkler & alarm systems', 'Timely delivery and installation support', 'Competitive pricing for fire safety projects'];

  const [isAutoplay, setIsAutoplay] = useState(true);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        <PageHero
          badge="Fire Safety Fabrication"
          title="Fabrication Services"
          subtitle="Fire Safety Fabrication & Custom Installations"
          description="B. D. Enterprises offers custom fire safety fabrication services including extinguisher cabinets, sprinkler pipe supports, fire alarm enclosures, and equipment mounting systems. All fabrication is code-compliant and integrates seamlessly with your fire protection systems."
          backTo="/services"
        />
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">Our Fabrication Capabilities</h2>
          <div className="relative group" onMouseEnter={() => setIsAutoplay(false)} onMouseLeave={() => setIsAutoplay(true)}>
            <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={24} slidesPerView={1} autoplay={isAutoplay ? { delay: 4000, disableOnInteraction: false } : false} pagination={{ clickable: true, dynamicBullets: true }} navigation={{ prevEl: '.swiper-btn-prev-fab', nextEl: '.swiper-btn-next-fab' }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }} className="!pb-12">
              {fabricationImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/20 h-64">
                    <img src={src} alt={`Fabrication ${index + 1}`} className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-btn-prev-fab absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="swiper-btn-next-fab absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </section>
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">Fabrication Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative w-full overflow-hidden bg-slate-900/50" style={{ aspectRatio: '16/9' }}>
                  <img src={fabricationImages[service.imageIndex] || fabricationImages[0]} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors">{service.name}</h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">{service.summary}</p>
                  <div className="mb-4 flex-grow">
                    <h4 className="text-xs font-bold text-accent/90 mb-2 uppercase tracking-wider">Applications</h4>
                    <ul className="space-y-1">{service.useCases.map((uc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/70">
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                        <span>{uc}</span>
                      </li>
                    ))}</ul>
                  </div>
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <p className="text-xs md:text-sm text-white/70 leading-relaxed">{service.protection}</p>
                    <div className="bg-accent/10 rounded-lg p-3 border border-accent/20"><p className="text-xs font-bold text-accent mb-1 uppercase tracking-wider">BD Value</p><p className="text-xs md:text-sm text-white/80 leading-relaxed">{service.bdValue}</p></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all" data-aos="fade-up" data-aos-delay={index * 50}>
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                <span className="text-white/80 text-sm md:text-base leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Fire Safety Fabrication?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">Discuss your fire safety fabrication requirements with our experts. We provide custom cabinets, sprinkler supports, enclosures, and mounting systems.</p>
            <Link to="/contact" className="inline-flex items-center justify-center min-h-[48px] px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider">Get a Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fabrication;
