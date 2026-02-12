import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';

const HearingProtection = () => {
  const products = [
    {
      name: 'Foam Earplugs',
      image: '/images/ppes/Hearing-Protection-1536x922.webp',
      summary: 'Affordable, disposable ear protection for noise levels up to 105 dB.',
      useCases: ['Manufacturing floors', 'Construction sites', 'Airport operations', 'Large machinery'],
      protection: 'Reduces noise exposure to safe levels; prevents noise-induced hearing loss.',
      guidelines: 'Insert correctly (rolled and seated properly); replace daily; wash hands before use.',
      bdValue: 'Bulk supply options and proper insertion training for maximum effectiveness.',
    },
    {
      name: 'Earmuffs',
      image: '/images/ppes/Hearing-Protection_2022.avif',
      summary: 'Reusable, durable hearing protection with comfortable headband.',
      useCases: ['Loud industrial environments', 'Shooting ranges', 'Loud events', 'Continuous noise'],
      protection: 'Provides 20-33 dB noise reduction rating; more comfortable for extended wear.',
      guidelines: 'Clean regularly; check seals monthly; comfortable wearing for 8+ hours.',
      bdValue: 'Custom sizing and comfort modifications; compliance documentation provided.',
    },
    {
      name: 'Custom Molded Plugs',
      image: '/images/ppes/iStock-2056001475.webp',
      summary: 'Personalized hearing protection molded to individual ear canals.',
      useCases: ['Professional musicians', 'Audio engineers', 'Long-term industrial work', 'Government work'],
      protection: 'Perfect fit ensures maximum sealing and protection; very comfortable for all-day wear.',
      guidelines: 'Moldable material; can be remolded annually; longer-lasting than foam plugs.',
      bdValue: 'Fitting and molding services; replacement/remolding program available.',
    },
  ];

  return (
    <div className="ppe-detail-page relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <PageHero
          badge="PPE & Personal Safety"
          title="Hearing Protection"
          subtitle="Earplugs & Earmuffs for Noise Reduction"
          description="Prevent noise-induced hearing loss with ANSI-rated hearing protection solutions for any decibel level."
          backTo="/services"
          backLabel="Back to Services"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 glow-text">Our Hearing Protection Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform active:scale-95 md:hover:scale-105 flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-white mb-2">{product.name}</h3>
                <p className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-gray-300 mb-4 leading-snug">{product.summary}</p>
                <div className="mb-4 flex-grow">
                  <h4 className="font-bold text-sm text-accent dark:text-blue-400 mb-2">Real-Life Use Cases:</h4>
                  <ul className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 space-y-1">
                    {product.useCases.map((useCase, idx) => <li key={idx}>• {useCase}</li>)}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-sm text-secondary dark:text-blue-300 mb-2">How It Protects:</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 leading-snug">{product.protection}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-sm text-secondary dark:text-blue-300 mb-2">Usage Guidelines:</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 leading-snug">{product.guidelines}</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-xs sm:text-sm text-accent dark:text-blue-300 mb-1">B. D. Enterprises Value:</h4>
                  <p className="text-xs text-neutral-700 dark:text-gray-300">{product.bdValue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 rounded-lg md:rounded-xl border-2 border-accent glow-box" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6">Compliance & Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">ANSI S3.19 Rated</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                Meets standards for hearing protector classification and performance.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">OSHA Compliant</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                Complies with OSHA hearing protection regulations and noise exposure standards.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">NRR Certified</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                Noise Reduction Rating labeled according to EPA regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-lg md:rounded-xl border-2 border-accent text-white glow-box" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose B. D. Enterprises for Hearing Protection?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              'Audiometric testing and baseline hearing assessment',
              'Personal fit testing to ensure proper seal',
              'Training on proper insertion techniques',
              'Annual replacements and remolding services',
              'Noise level assessment for your facility',
              'Compliance documentation and records',
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Protect Your Team's Hearing</h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Schedule a hearing protection assessment for your facility today.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center min-h-[48px] bg-accent dark:bg-blue-500 text-primary dark:text-white px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-black rounded-xl sm:rounded-full shadow-2xl ring-2 ring-white/30 hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider">
            Get Hearing Assessment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HearingProtection;
