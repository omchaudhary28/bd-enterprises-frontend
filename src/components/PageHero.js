import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable hero section for service and PPE pages.
 * Matches the Oxygen Cylinders style: gradient bg, badge, large heading, subtitle, description.
 */
const PageHero = ({ badge, title, subtitle, description, backTo, backLabel = 'Back to Services' }) => (
  <section className="mb-16 md:mb-24" data-aos="fade-up">
    {backTo && (
      <Link
        to={backTo}
        className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors mb-8 font-semibold text-sm md:text-base group"
        data-aos="fade-right"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {backLabel}
      </Link>
    )}
    <div className="text-center max-w-4xl mx-auto">
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-white/90">{badge}</span>
        </div>
      )}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-2xl font-bold text-blue-200 dark:text-blue-300 max-w-3xl mx-auto mb-4">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
