import React from 'react';
import { Link } from 'react-router-dom';

const FootProtection = () => {
  const products = [
    {
      name: 'Steel-Toed Safety Boots',
      image: '/images/ppes/Foot-Protection-1536x922.webp',
      summary: 'Heavy-duty boots with reinforced steel toe caps for impact and compression protection.',
      useCases: ['Construction sites', 'Manufacturing', 'Warehouses', 'Heavy equipment operation'],
      protection: 'Protects feet from falling objects, crushing hazards, and impacts up to 6,000 PSI.',
      guidelines: 'Inspect steel cap regularly; replace if boot sustains impact; keep laces secure.',
      bdValue: 'Proper boot fitting services; arch support recommendations; bulk purchasing options.',
    },
    {
      name: 'Metatarsal Guard Boots',
      image: '/images/ppes/Foot-Protection-1536x922.webp',
      summary: 'Extended protection over the top of foot against impact and rolling hazards.',
      useCases: ['Logging operations', 'Mining', 'Heavy industrial', 'Molten material handling'],
      protection: 'Covers arch and top of foot; protection against rolling and falling objects.',
      guidelines: 'High-temperature rated options available; check for composite vs. steel.',
      bdValue: 'Expert fitting for maximum protection; heat-resistant options available.',
    },
    {
      name: 'Puncture-Resistant Sole Boots',
      image: '/images/ppes/Foot-Protection-1536x922.webp',
      summary: 'Boots with reinforced midsoles to prevent puncture from sharp objects.',
      useCases: ['Roofing work', 'Landscaping', 'Concrete work', 'Recycling facilities'],
      protection: 'Prevents nails, screws, and sharp debris from penetrating sole.',
      guidelines: 'Inspect sole routinely; replace if punctured; maintain boot integrity.',
      bdValue: 'ASTM rating guidance; sole replacement and re-soling services available.',
    },
  ];

  return (
    <div className="ppe-detail-page relative overflow-hidden bg-gradient-to-r from-[#111111] to-[#1C1C1C] dark:from-slate-900 dark:to-slate-800 min-h-screen py-12 md:py-16">
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-6 md:mb-8">
          <Link to="/ppe" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 font-semibold text-sm md:text-base">
            ← Back to PPEs
          </Link>
        </div>

        <div className="mb-10 md:mb-16 text-center">
          <div className="text-5xl md:text-6xl mb-4">👢</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white glow-text mb-4">
            Foot Protection
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Safety Shoes & Boots for Maximum Foot Safety
          </p>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            ASTM-certified safety footwear protecting against impacts, punctures, and crushing hazards.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 glow-text">Our Foot Protection Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform active:scale-95 md:hover:scale-105 flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 flex items-center justify-center overflow-hidden">
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
                  <h4 className="font-bold text-sm text-[#FCBF49] mb-2">How It Protects:</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 leading-snug">{product.protection}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-sm text-[#FCBF49] mb-2">Usage Guidelines:</h4>
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

        <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#1C1C1C] to-[#111111] rounded-lg md:rounded-xl border-2 border-accent glow-box" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6">Compliance & Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">ASTM F75 Rated</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                Meets ASTM standards for protective footwear impact and compression testing.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">OSHA Compliant</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                All footwear meets OSHA 29 CFR 1910.95 foot protection regulations.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary dark:text-white mb-2">EH Rating</h4>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-300">
                Electrical Hazard rated footwear for electrical protection when needed.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-lg md:rounded-xl border-2 border-accent text-white glow-box" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose B. D. Enterprises for Foot Protection?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              'Professional boot fitting and comfort assessment',
              'Arch support and orthotics counseling',
              'Multiple boot styles and brands available',
              'Bulk purchasing programs for crews',
              'Boot replacement and resoling services',
              'ASTM rating and hazard-specific recommendations',
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-accent text-lg font-bold flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Protect Your Team's Feet</h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Get expert safety boot fitting and recommendations for your workforce.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center min-h-[48px] bg-accent dark:bg-[#D62828] text-primary dark:text-white px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-black rounded-xl sm:rounded-full shadow-2xl ring-2 ring-white/30 hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider">
            Discuss Foot Protection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FootProtection;


