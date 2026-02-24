import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getPatternBackgroundImage } from '../../utils/patternSystem';

const FireExtinguishers = () => {
  React.useEffect(() => {
    if (AOS && typeof AOS.refresh === 'function') {
      AOS.refresh();
    }
  }, []);

  // Real images from /public/images/fire extinguisher/
  const fireExtinguisherImages = [
    '/images/fire extinguisher/automated-Fire-extinguisher.webp',
    '/images/fire extinguisher/CO2-Fire-suppression-system.jpg',
    '/images/fire extinguisher/co2-flooding-system-1000x1000.jpg',
  ];

  const services = [
    {
      id: 'automated-suppression',
      imageIndex: 0,
      name: 'Automated Fire Suppression Systems',
      summary: 'State-of-the-art automated systems for immediate, 24/7 fire detection and suppression before significant damage occurs.',
      useCases: [
        'Data centers and server rooms',
        'High-value equipment protection',
        'Manufacturing facilities',
        'Storage areas with sensitive materials'
      ],
      protection: 'Detects fires in their earliest stages and automatically activates suppression agents, reducing response time and minimizing property damage.',
      guidelines: 'Requires professional inspection annually; Regular testing of detection sensors; Proper agent refills after discharge',
      bdValue: 'Expert system design tailored to your facility\'s unique risks, 24/7 monitoring support, and rapid emergency response.'
    },
    {
      id: 'co2-suppression',
      imageIndex: 1,
      name: 'CO2 Fire Suppression Systems',
      summary: 'Precision-engineered CO2 systems for protecting unoccupied industrial and commercial spaces with sensitive equipment.',
      useCases: [
        'Data centers and server facilities',
        'Power generation equipment',
        'Flammable liquid storage',
        'High-value machinery areas',
        'Electrical equipment rooms'
      ],
      protection: 'CO2 suppresses fires by displacing oxygen and cooling the protected area, leaving no residue and requiring no cleanup.',
      guidelines: 'Requires NFPA 12 compliance certification; Monthly system checks; Professional discharge testing every 5 years',
      bdValue: 'Clean agent technology with zero residue, comprehensive NFPA 12 compliance, and specialized technician training.'
    },
    {
      id: 'co2-flooding',
      imageIndex: 2,
      name: 'CO2 Flooding Systems',
      summary: 'Total room protection with rapid CO2 flooding for swift, automated suppression of fires in complex industrial environments.',
      useCases: [
        'Large unoccupied hazardous areas',
        'Multi-hazard industrial zones',
        'Research laboratories',
        'Specialized equipment rooms',
        'High-risk manufacturing zones'
      ],
      protection: 'System fills entire room with CO2 concentration sufficient to extinguish fires within seconds, preventing catastrophic loss.',
      guidelines: 'Requires site-specific engineering; Pre-discharge alarm verification; Annual pressure testing; Proper safety signage',
      bdValue: 'Custom engineered solutions for complex fire risks, comprehensive safety protocols, and continuous system monitoring.'
    }
  ];

  const standards = [
    { title: 'NFPA 10', description: 'National Fire Protection Association standard for portable fire extinguishers and systems' },
    { title: 'NFPA 12', description: 'Standards for CO2 extinguishing systems including safe discharge and operational procedures' },
    { title: 'OSHA Compliance', description: 'Workplace fire safety regulations and annual inspection documentation requirements' }
  ];

  const benefits = [
    'NFPA-certified technicians with specialized fire suppression expertise',
    'Multi-class extinguisher coverage for all fire types (A, B, C, D)',
    'Annual compliance inspections with full documentation',
    '24/7 emergency replacement and rapid response availability',
    'Comprehensive staff training and certification programs included',
    'Custom system design tailored to your facility\'s specific fire risks'
  ];

  const swiperRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#1C1C1C] to-[#111111] min-h-screen">
      {/* Animated Background - No SVG Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#D62828] opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Back Link */}
        <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors mb-8 font-semibold text-sm md:text-base group" data-aos="fade-right">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Services
        </Link>

        {/* Hero Section */}
        <section className="mb-16 md:mb-24" data-aos="fade-up">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">Fire Suppression Systems</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text">
              Fire Extinguisher & Suppression Systems
            </h1>

            <p className="text-lg md:text-2xl font-bold text-[#FCBF49] max-w-3xl mx-auto mb-4">
              Multi-Class Protection for Every Fire Type
            </p>

            <p className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fire extinguishers are the first line of defense in emergencies. We provide comprehensive multi-class suppression systems designed for any facility type, from automated CO2 systems for sensitive equipment to traditional portable extinguishers. Our expert installation, inspections, and maintenance ensure rapid response when every second matters.
            </p>
          </div>
        </section>

        {/* Services Carousel */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">
            Our Services
          </h2>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={isAutoplay ? { delay: 4500, disableOnInteraction: false } : false}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="!pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <div
                    className="group/card relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 flex flex-col h-full"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    {/* Real Image Container - 16:9 aspect ratio */}
                    <div className="relative w-full overflow-hidden bg-slate-900/50" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={fireExtinguisherImages[service.imageIndex]}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Container */}
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover/card:text-accent transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
                        {service.summary}
                      </p>

                      {/* Use Cases */}
                      <div className="mb-4 flex-grow">
                        <h4 className="text-xs font-bold text-accent/90 mb-2 uppercase tracking-wider">Primary Applications</h4>
                        <ul className="space-y-1">
                          {service.useCases.slice(0, 2).map((useCase, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/70">
                              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 border-t border-white/10 pt-4">
                        <div>
                          <p className="text-xs font-bold text-accent/80 uppercase tracking-wider mb-1">How It Protects</p>
                          <p className="text-xs md:text-sm text-white/70 leading-relaxed">{service.protection}</p>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                          <p className="text-xs font-bold text-accent mb-1 uppercase tracking-wider">BD Value</p>
                          <p className="text-xs md:text-sm text-white/80 leading-relaxed">{service.bdValue}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Navigation Buttons */}
            <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-24 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-24 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Standards Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">
            Compliance & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 p-6 md:p-8"
                style={{
                  backgroundImage: getPatternBackgroundImage('fire-extinguishers', index),
                  backgroundSize: '200px 200px',
                  backgroundAttachment: 'fixed',
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {standard.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {standard.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">
            Why Choose B. D. Enterprises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
                <span className="text-white/80 text-sm md:text-base leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-8 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-[#D62828]/25 to-[#F77F00]/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need Expert Fire Suppression?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Get professional guidance on selecting and installing the right fire suppression system for your facility.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FireExtinguishers;

