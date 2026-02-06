import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const MainContent = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary dark:from-slate-900 dark:to-slate-800 text-white py-12 md:py-20 lg:py-32 min-h-screen flex items-center">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
        <AnimatedSection animation="fade-right" className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 glow-text">
            Protect. Secure. Succeed.
            <span className="block text-accent text-2xl md:text-4xl lg:text-5xl mt-2">Advanced Fire Safety Solutions.</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed text-gray-100 dark:text-gray-200">
            BD Enterprises provides comprehensive fire safety and protection systems for businesses nationwide. With 25+ years of expertise, we safeguard what matters most through certified, compliant, and reliable solutions.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-accent dark:bg-blue-500 text-primary dark:text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg md:rounded-full font-semibold hover:bg-white hover:text-primary dark:hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 glow-box active:scale-95"
            >
              Request Safety Consultation
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="zoom-in" delay={200} className="lg:w-1/2 flex justify-center w-full">
          <img
            src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=800&h=600&fit=crop"
            alt="Fire Safety Solutions"
            className="rounded-lg shadow-2xl max-w-full h-auto w-full md:w-4/5 transform hover:scale-105 transition-transform duration-500 glow-box image-reveal-scroll"
          />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MainContent;
