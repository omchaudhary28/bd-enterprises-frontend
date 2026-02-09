import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const MainContent = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-slate-900 dark:to-slate-800 text-white pt-10 pb-8 md:py-20 lg:py-32 md:min-h-[70vh] lg:min-h-screen flex items-start md:items-center">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-7 md:gap-10 relative z-10">
        <AnimatedSection animation="fade-right" className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-[2.05rem] min-[380px]:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-3 md:mb-6 glow-text">
            Protect. Secure. Succeed.
            <span className="block text-accent text-[1.35rem] min-[380px]:text-2xl md:text-4xl lg:text-5xl mt-2 leading-tight">
              Advanced Fire Safety Solutions.
            </span>
          </h1>
          <p className="text-[0.98rem] min-[380px]:text-base md:text-lg lg:text-xl mb-5 md:mb-8 leading-relaxed text-white/90 dark:text-gray-200 max-w-[60ch] mx-auto lg:mx-0">
            <span className="block">
              BD Enterprises provides comprehensive fire safety and protection systems for businesses nationwide.
            </span>
            <span className="block mt-2">
              With 25+ years of expertise, we safeguard what matters most through certified, compliant, and reliable solutions.
            </span>
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] bg-accent dark:bg-blue-500 text-primary dark:text-white px-6 py-3.5 text-base rounded-xl md:rounded-full font-bold shadow-lg ring-2 ring-white/20 dark:ring-white/15 md:hover:bg-white md:hover:text-primary dark:md:hover:bg-blue-400 transition-colors duration-200 glow-box active:scale-[0.99]"
            >
              Request Safety Consultation
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="zoom-in" delay={200} className="lg:w-1/2 flex justify-center w-full">
          <img
            src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=800&h=600&fit=crop"
            alt="Fire Safety Solutions"
            className="rounded-2xl shadow-2xl max-w-full w-full md:w-4/5 max-w-[560px] lg:max-w-none aspect-[4/3] object-cover glow-box image-reveal-scroll md:hover:scale-[1.01] md:transition-transform md:duration-300"
          />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MainContent;
