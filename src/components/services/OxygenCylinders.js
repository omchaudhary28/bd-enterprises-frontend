import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import PageHero from '../PageHero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OxygenCylinders = () => {
  React.useEffect(() => {
    if (AOS && typeof AOS.refresh === 'function') {
      AOS.refresh();
    }
  }, []);

  const oxygenCylinderImages = [
    '/images/ppes/ppes%20oxygen%20cylender/12L-1.jpg',
    '/images/ppes/ppes%20oxygen%20cylender/cylinder_final_red.webp',
    '/images/ppes/ppes%20oxygen%20cylender/breathing-apparatus-set-500x500.webp',
    '/images/ppes/ppes%20oxygen%20cylender/Self-contained_breathing_apparatus.jpg',
    '/images/ppes/ppes%20oxygen%20cylender/Kl99-Firefighting-Respirator-60-Mins-Scba-with-6-8-Liter-Cylinder.avif',
    '/images/ppes/ppes%20oxygen%20cylender/Best-Price-Scba-Respiration-Cylinder-Respirator-for-Firefighter.avif',
    '/images/ppes/ppes%20oxygen%20cylender/54034_w.webp',
  ];

  const services = [
    { id: 'medical-oxygen', imageIndex: 0, name: 'Medical Oxygen Cylinders', summary: 'High-purity medical-grade oxygen cylinders for healthcare facilities, hospitals, and emergency response.', useCases: ['Hospitals and clinics', 'Ambulance services', 'Home healthcare', 'Emergency medical response'], protection: 'ISO certified medical oxygen ensures safe, reliable supply for patient care. Regular hydrostatic testing and certification included.', bdValue: 'Trusted supplier of medical oxygen with 24/7 availability, certified refill stations, and compliant documentation.' },
    { id: 'scba-cylinders', imageIndex: 2, name: 'SCBA Cylinders (Self-Contained Breathing Apparatus)', summary: 'Firefighter and industrial SCBA cylinders with carbon fiber and aluminum options for maximum safety.', useCases: ['Firefighting and rescue', 'Industrial confined space entry', 'Hazardous material response', 'Mining and tunneling'], protection: 'DOT/TC certified cylinders provide clean, breathable air in immediately dangerous to life or health (IDLH) environments.', bdValue: 'Expert fitting, training, and maintenance support. NFPA 1981 compliant SCBA systems for fire and industrial safety.' },
    { id: 'industrial-breathing', imageIndex: 4, name: 'Industrial Breathing Air Cylinders', summary: 'Cylinders for welding, spray painting, and industrial applications requiring clean, dry breathing air.', useCases: ['Welding and fabrication', 'Spray painting and coating', 'Chemical processing', 'Laboratory and research'], protection: 'Compressed breathing air meets OSHA Grade D standards. Cylinders are inspected and certified for safe industrial use.', bdValue: 'Complete breathing air solutions including cylinders, regulators, and refill services. Custom configurations for your workflow.' },
  ];

  const standards = [
    { title: 'ISO 11114', description: 'Gas cylinders compatibility of cylinder and valve materials with gas contents' },
    { title: 'DOT/TC Certification', description: 'Department of Transportation and Transport Canada standards for cylinder safety' },
    { title: 'NFPA 1981', description: 'Standard on Open-Circuit Self-Contained Breathing Apparatus for emergency services' },
  ];

  const benefits = [
    'Certified cylinders with full traceability and documentation',
    'Hydrostatic testing and recertification services',
    '24/7 emergency cylinder replacement and refill',
    'Expert guidance on cylinder selection and sizing',
    'Training on safe handling, storage, and use',
    'Delivery and pickup services for commercial clients',
  ];

  const [isAutoplay, setIsAutoplay] = useState(true);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        <PageHero
          badge="PPE & Safety Equipment"
          title="Oxygen & Breathing Air Cylinders"
          subtitle="Medical, SCBA, and Industrial Breathing Air Solutions"
          description="B. D. Enterprises supplies certified oxygen and breathing air cylinders for medical, firefighting, and industrial applications. From medical oxygen for healthcare to SCBA cylinders for fire rescue, we provide reliable cylinders with full testing, refill, and maintenance support."
          backTo="/services"
        />
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">Our Cylinder Range</h2>
          <div className="relative group" onMouseEnter={() => setIsAutoplay(false)} onMouseLeave={() => setIsAutoplay(true)}>
            <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={24} slidesPerView={1} autoplay={isAutoplay ? { delay: 4000, disableOnInteraction: false } : false} pagination={{ clickable: true, dynamicBullets: true }} navigation={{ prevEl: '.swiper-btn-prev-oxy', nextEl: '.swiper-btn-next-oxy' }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }} className="!pb-12">
              {oxygenCylinderImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/20 h-64">
                    <img src={src} alt={`Oxygen cylinder ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-btn-prev-oxy absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="swiper-btn-next-oxy absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </section>
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">Cylinder Types & Applications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative w-full overflow-hidden bg-slate-900/50" style={{ aspectRatio: '16/9' }}>
                  <img src={oxygenCylinderImages[service.imageIndex] || oxygenCylinderImages[0]} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors">{service.name}</h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">{service.summary}</p>
                  <div className="mb-4 flex-grow">
                    <h4 className="text-xs font-bold text-accent/90 mb-2 uppercase tracking-wider">Primary Applications</h4>
                    <ul className="space-y-1">{service.useCases.map((uc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/70">
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                        <span>{uc}</span>
                      </li>
                    ))}</ul>
                  </div>
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <div><p className="text-xs font-bold text-accent/80 uppercase tracking-wider mb-1">Compliance & Safety</p><p className="text-xs md:text-sm text-white/70 leading-relaxed">{service.protection}</p></div>
                    <div className="bg-accent/10 rounded-lg p-3 border border-accent/20"><p className="text-xs font-bold text-accent mb-1 uppercase tracking-wider">BD Value</p><p className="text-xs md:text-sm text-white/80 leading-relaxed">{service.bdValue}</p></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">Standards & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 md:p-8 border border-white/20 hover:border-accent/50 transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-xl font-bold text-white mb-3">{standard.title}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">Why Choose B. D. Enterprises</h2>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Cylinder Solutions?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">Get expert guidance on selecting the right oxygen or breathing air cylinders for your facility.</p>
            <Link to="/contact" className="inline-flex items-center justify-center min-h-[48px] px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider">Contact Us Today</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OxygenCylinders;
