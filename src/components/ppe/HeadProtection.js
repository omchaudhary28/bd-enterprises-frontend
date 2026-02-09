import React from 'react';
import { Link } from 'react-router-dom';

const HeadProtection = () => {
  const products = [
    {
      name: 'Industrial Hard Hats',
      image: '/images/ppes/Head-Protection.webp',
      summary: 'ANSI Z89.1 certified hard hats for maximum impact protection.',
      useCases: ['Construction sites', 'Manufacturing', 'Mining operations', 'Warehousing'],
      protection: 'Protects against impact from falling objects, low-hanging fixtures, and head collisions.',
      guidelines: 'Replace every 3-5 years; inspect monthly for cracks or damage; keep sweatband clean.',
      bdValue: 'We provide proper hard hat fitting, custom branding options, and replacement scheduling.',
    },
    {
      name: 'Safety Helmets',
      image: '/images/ppes/Head-Protection.webp',
      summary: 'Lightweight, comfortable helmets for work requiring extended wear.',
      useCases: ['Electrical work', 'Confined space work', 'Welding', 'High-altitude work'],
      protection: 'Guards against impacts, electrical hazards, and penetration from sharp objects.',
      guidelines: 'Inspect before each use; replace if dropped from height; maintain proper chin strap.',
      bdValue: 'Expert consulting on helmet selection for specific hazards; employee training included.',
    },
    {
      name: 'Bump Caps',
      image: '/images/ppes/Head-Protection.webp',
      summary: 'Lightweight protection for low-risk overhead hazards.',
      useCases: ['Warehouse operations', 'Food processing', 'Assembly lines', 'Cold storage'],
      protection: 'Reduces impact severity from minor bumps and light falling objects.',
      guidelines: 'Check for compatibility with other PPE; lightweight design reduces neck strain.',
      bdValue: 'Customized bump cap solutions for various work environments; comfort-focused recommendations.',
    },
  ];

  return (
    <div className="ppe-detail-page relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-slate-900 dark:to-slate-800 min-h-screen py-12 md:py-16">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Back Link */}
        <div className="mb-6 md:mb-8">
          <Link
            to="/ppe"
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 font-semibold text-sm md:text-base"
          >
            ← Back to PPEs
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-10 md:mb-16 text-center">
          <div className="text-5xl md:text-6xl mb-4">🛡️</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white glow-text mb-4">
            Head Protection
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Helmets and Hard Hats for Maximum Safety
          </p>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Comprehensive head protection solutions designed to shield your workforce from impact, falling objects, and overhead hazards.
          </p>
        </div>

        {/* Products Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 glow-text">Our Head Protection Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform active:scale-95 md:hover:scale-105 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-gray-300 mb-4 leading-snug">
                  {product.summary}
                </p>

                <div className="mb-4 flex-grow">
                  <h4 className="font-bold text-sm text-accent dark:text-blue-400 mb-2">Real-Life Use Cases:</h4>
                  <ul className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 space-y-1">
                    {product.useCases.map((useCase, idx) => (
                      <li key={idx}>• {useCase}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-sm text-secondary dark:text-blue-300 mb-2">How It Protects:</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 leading-snug">
                    {product.protection}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-sm text-secondary dark:text-blue-300 mb-2">Usage Guidelines:</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 leading-snug">
                    {product.guidelines}
                  </p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-xs sm:text-sm text-accent dark:text-blue-300 mb-1">BD Enterprises Value:</h4>
                  <p className="text-xs text-neutral-700 dark:text-gray-300">{product.bdValue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Protection Standards */}
        <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 rounded-lg md:rounded-xl border-2 border-accent glow-box" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6">
            Compliance & Standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">ANSI Z89.1 Certified</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                Meets American National Standards Institute requirements for hard hat performance and durability.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">OSHA Compliant</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                All head protection meets OSHA 29 CFR 1910.95 requirements for workplace safety.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">Impact Tested</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                Rigorous impact testing ensures protection from high-velocity object strikes and falls.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose BD Enterprises */}
        <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-lg md:rounded-xl border-2 border-accent text-white glow-box" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose BD Enterprises for Head Protection?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              'Expert hazard assessment for your specific workplace',
              'Proper fitting and sizing for optimal comfort',
              'Training on correct usage and maintenance',
              'Compliance documentation and audits',
              'Emergency replacement availability',
              'Customized branding options available',
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Protect Your Team?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Let our experts help you select and implement the perfect head protection solution for your workplace.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[48px] bg-accent dark:bg-blue-500 text-primary dark:text-white px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-black rounded-xl sm:rounded-full shadow-2xl ring-2 ring-white/30 hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider"
          >
            Discuss Head Protection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadProtection;
