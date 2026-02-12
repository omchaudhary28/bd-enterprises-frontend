import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import HeroCarousel from './HeroCarousel';

const MainContent = () => {
  const services = [
    { icon: '🧯', title: 'Industrial Safety Products (PPE)', desc: 'Certified protective equipment for workplace safety' },
    { icon: '💧', title: 'Fire Hydrant & Sprinkler Systems', desc: 'Engineered suppression and hydrant installations' },
    { icon: '🚨', title: 'Fire Alarm & Smoke Detection', desc: 'Addressable alarms and advanced smoke detection systems' },
    { icon: '🔧', title: 'Fabrication & Installation', desc: 'Fire safety fabrication and precision installation services' },
  ];

  const trustPoints = [
    { number: 'Since 2006', label: 'Established' },
    { number: 'ISO 9001:2015', label: 'Quality Certified' },
    { number: 'Authorized', label: 'Distributors: Midas • Jama • Techtion • Kanex • Valpro • Ninja • Spectrum • Honeywell • Aag' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Full-screen hero carousel - first thing on load (pointsafety.in style) */}
      <section className="relative w-full">
        <HeroCarousel fullScreen />
      </section>

      {/* Hero text block - below carousel, full opacity, bright background */}
      <section id="home-content" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-sky-600 shadow-xl">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 py-14 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/25 backdrop-blur-sm border border-white/40">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-white">B. D. Enterprises — Fire Safety Since 2006</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-white">
                <span className="block">Protect.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-white">Secure.</span>
                <span className="block">Succeed.</span>
              </h2>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium">
                Advanced fire safety systems, expert engineering, and compliance-first installations trusted by enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link to="/contact" className="inline-flex items-center justify-center min-h-[52px] bg-white text-blue-600 hover:bg-amber-400 hover:text-blue-900 px-10 py-3.5 font-bold rounded-xl shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm">
                  Get Free Consultation
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center min-h-[52px] bg-white/20 hover:bg-white/35 text-white px-10 py-3.5 font-bold rounded-xl border-2 border-white/80 hover:border-white transition-all duration-300 uppercase tracking-wider text-sm">
                  Explore Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content section - bright gradient, enhanced spacing */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.15) 1px, transparent 0)',
            backgroundSize: '28px 28px'
          }} />
        </div>

        <div className="relative z-10 pt-12 sm:pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Company intro block */}
            <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
              <AnimatedSection animation="fade-up" className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200" data-aos="fade-down">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-blue-800">Established 2006 • ISO 9001:2015 Certified</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-800">
                  B. D. Enterprises
                </h3>
                <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                  Since 2006, B. D. Enterprises has delivered professional, code-compliant industrial safety products and fire protection systems. We provide PPE, fire hydrant and sprinkler systems, alarm and smoke detection, and precision fire safety fabrication—backed by ISO 9001:2015 quality management.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8" data-aos="fade-up" data-aos-delay="200">
                  {trustPoints.map((point, idx) => (
                    <div key={idx} className="text-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="text-xl sm:text-2xl font-black text-blue-600 mb-1">{point.number}</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-semibold">{point.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Service Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" data-aos="fade-up">
              {services.map((service, idx) => (
                <Link
                  to="/services"
                  key={idx}
                  className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl mb-3 transition-transform duration-300 group-hover:scale-125">{service.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{service.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">→</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
    </div>
  );
};

export default MainContent;
