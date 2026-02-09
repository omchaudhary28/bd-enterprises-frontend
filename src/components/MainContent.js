import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const MainContent = () => {
  const services = [
    { icon: '🧯', title: 'Fire Extinguishers', desc: 'Portable & System Solutions' },
    { icon: '🚨', title: 'Alarm Detection', desc: 'Smart Detection Systems' },
    { icon: '💧', title: 'Sprinkler Systems', desc: 'Automatic Suppression' },
  ];

  const trustPoints = [
    { number: '25+', label: 'Years Experience' },
    { number: '5K+', label: 'Clients Served' },
    { number: '100%', label: 'Compliance Rate' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main glowing orbs with animation */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent opacity-15 dark:opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary opacity-5 dark:opacity-5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-gradient-to-b from-white to-transparent" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent),linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-20">
            {/* Left Column - Text */}
            <AnimatedSection animation="fade-right" className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-4 md:mb-6 mx-auto lg:mx-0" data-aos="fade-down">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-white/90">Industry Leader Since 2000</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-4 md:mb-6 glow-text">
                <span className="block mb-2">Protect.</span>
                <span className="block mb-2">Secure.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-300 to-secondary">Succeed.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-200 dark:text-blue-300 mb-4 md:mb-6 leading-snug">
                Advanced Fire Safety Solutions for Every Space
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-white/85 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed">
                Comprehensive fire safety and protection systems. 25+ years of expertise. ISO certified. NFPA compliant. Serving 5,000+ clients across industries.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center min-h-[48px] md:min-h-[56px] bg-gradient-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-accent text-white px-8 md:px-12 py-3 md:py-4 font-bold rounded-full shadow-2xl ring-2 ring-white/30 dark:ring-white/10 hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider text-sm md:text-base"
                  data-aos="fade-up"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center min-h-[48px] md:min-h-[56px] bg-white/15 hover:bg-white/25 text-white px-8 md:px-12 py-3 md:py-4 font-bold rounded-full backdrop-blur-sm border-2 border-white/30 hover:border-white/50 transition-all duration-200 uppercase tracking-wider text-sm md:text-base"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust Points */}
              <div className="grid grid-cols-3 gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="200">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-accent mb-1">{point.number}</div>
                    <div className="text-xs sm:text-sm text-white/75 font-semibold">{point.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Column - Image & Animation */}
            <AnimatedSection animation="zoom-in" delay={200} className="order-1 lg:order-2">
              <div className="relative">
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[500px] bg-gradient-to-br from-blue-400 to-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=600&h=600&fit=crop"
                    alt="Fire Safety Professional"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-accent text-primary font-bold px-6 py-4 rounded-2xl shadow-2xl text-center border-4 border-white dark:border-slate-800 animate-bounce" style={{ animation: 'bounce 3s infinite' }}>
                  <div className="text-2xl md:text-3xl">✓</div>
                  <div className="text-xs md:text-sm font-bold">100% Safe</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Service Preview Cards */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6" data-aos="fade-up">
            {services.map((service, idx) => (
              <Link
                to="/services"
                key={idx}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl mb-3 transition-transform duration-300 group-hover:scale-125">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/75 group-hover:text-white/90 transition-colors">{service.desc}</p>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </div>
  );
};

export default MainContent;
