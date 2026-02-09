import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const MainContent = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-slate-900 dark:to-slate-800 text-white py-8 sm:py-12 md:py-20 lg:py-32 min-h-[auto] md:min-h-[70vh] lg:min-h-screen flex items-center">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-7 md:gap-10 relative z-10">
        <AnimatedSection animation="fade-right" className="lg:w-1/2 text-center lg:text-left w-full">
          <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] sm:leading-[1.08] md:leading-[1.06] mb-2 sm:mb-3 md:mb-6 glow-text">
            Protect. Secure. Succeed.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-3 sm:mb-4 md:mb-6 leading-snug">
            Advanced Fire Safety Solutions.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-8 leading-relaxed text-white/90 dark:text-gray-200 max-w-[65ch] mx-auto lg:mx-0">
            Comprehensive fire safety and protection systems. 25+ years of expertise. Certified. Compliant. Reliable.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] bg-accent dark:bg-blue-500 text-primary dark:text-white px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-black rounded-xl sm:rounded-full shadow-2xl ring-2 ring-white/30 dark:ring-white/20 hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-200 glow-box uppercase tracking-wider"
            >
              Get Consultation
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="zoom-in" delay={200} className="hidden lg:flex lg:w-1/2 justify-center w-full">
          <img
            src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=800&h=600&fit=crop"
            alt="Fire Safety Solutions"
            className="rounded-2xl shadow-2xl max-w-full w-full md:w-4/5 max-w-[560px] lg:max-w-none aspect-[4/3] object-cover glow-box image-reveal-scroll hover:scale-[1.02] transition-transform duration-300"
          />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MainContent;
