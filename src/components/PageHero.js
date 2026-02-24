import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ badge, title, subtitle, description, backTo, backLabel = 'Back to Services' }) => (
  <section className="mb-16 md:mb-24" data-aos="fade-up">
    {backTo && (
      <Link
        to={backTo}
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#E9ECEF] transition-colors hover:text-[#FCBF49] md:text-base group"
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
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F77F00]/45 bg-[#F77F00]/15 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#D62828] animate-pulse" />
          <span className="text-xs font-semibold text-[#FCBF49] sm:text-sm">{badge}</span>
        </div>
      )}
      <h1 className="mb-4 text-4xl font-black tracking-tighter text-[#F8F9FA] glow-text sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mb-4 max-w-3xl text-lg font-bold text-[#FCBF49] md:text-2xl">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
          {description}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
