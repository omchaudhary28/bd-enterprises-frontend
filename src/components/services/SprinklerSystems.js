import React from 'react';
import { Link } from 'react-router-dom';

const SprinklerSystems = () => {
  const products = [
    {
      image: '/images/services/sprinkler-systems.svg',
      name: 'Wet Sprinkler Systems',
      summary: 'Continuous water-filled pipes with pendant and upright heads for immediate response and maximum suppression effectiveness.',
      useCases: [
        'Heated buildings and indoor facilities',
        'Office buildings and commercial spaces',
        'Retail centers and warehouses',
        'Manufacturing and industrial facilities'
      ],
      protection: 'Water immediately discharges when any head detects heat, providing the fastest possible response to active fires.',
      guidelines: 'Annual flow testing required; Quarterly visual inspections; Antifreeze inspection in cold storage areas',
      bdValue: 'Proven highest suppression effectiveness, simplest system design, best insurance rates, and lowest maintenance requirements.'
    },
    {
      image: '/images/services/dry-pipe-systems.svg',
      name: 'Dry Pipe & Deluge Systems',
      summary: 'Pressurized air-filled systems for cold environments and open-head deluge systems for high-hazard applications.',
      useCases: [
        'Unheated buildings and freezer areas',
        'Cold storage facilities and outdoor covered areas',
        'High-hazard industrial processes',
        'Flammable material storage rooms'
      ],
      protection: 'Dry systems prevent water from freezing; Deluge systems flood entire areas with water simultaneously for extreme fire scenarios.',
      guidelines: 'Monthly pressure monitoring; Quarterly dry pipe valve testing; Semi-annual commissioning inspections',
      bdValue: 'Freeze-protection for cold climates, comprehensive flooding for high-risk areas, and specialized valve engineering.'
    },
    {
      image: '/images/services/hydrant-systems.svg',
      name: 'Fire Pump & Hydrant Systems',
      summary: 'Complete water supply systems with electric and diesel backup pumps, pressure maintenance, and reliable hydrant access points.',
      useCases: [
        'Large facilities with high water demand',
        'Areas with inadequate municipal water supply',
        'Multi-building campuses requiring distributed access',
        'High-rise buildings with pressure boosting needs'
      ],
      protection: 'Maintains consistent system pressure 24/7 and provides immediate water access for firefighting operations via hydrants.',
      guidelines: 'Pump testing quarterly; Jockey pump maintenance biannually; Hydrant flow testing every 3 years',
      bdValue: 'Redundant electric and diesel pumps with automatic switchover, pressure-sensitive activation, and comprehensive system monitoring.'
    }
  ];

  const standards = [
    { title: 'NFPA 13', description: 'Installation of sprinkler systems with proper spacing, support, and commissioning requirements' },
    { title: 'NFPA 20', description: 'Fire pump installation, testing, and maintenance standards for reliability' },
    { title: 'FM Approval', description: 'Factory Mutual approval for enhanced insurance rating and loss prevention' }
  ];

  const whyChooseUs = [
    'NFPA 13/20-certified engineers with hydraulic design expertise',
    'Wet, dry, and deluge systems for all facility types',
    'Expert fire pump selection and installation with redundancy',
    'Complete hydrant system design and placement',
    'Annual flow testing and certification documentation',
    '24/7 emergency service and rapid response support'
  ];

  return (
    <div className="ppe-detail-page relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-black min-h-screen py-12 md:py-16">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Back Link */}
        <Link to="/services" className="inline-flex items-center text-white hover:text-accent transition-colors mb-6 font-semibold text-sm md:text-base" data-aos="fade-right">
          ← Back to Services
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 inline-block">💦</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 glow-text">Sprinkler & Suppression Systems</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4">
            Sprinkler systems are the gold standard in fire suppression. Our high-performance systems automatically detect and suppress fires before they spread, protecting lives, property, and business continuity.
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We design, install, and maintain systems for every building type—from warehouses and factories to office parks and retail centers. Our systems minimize collateral water damage while maximizing fire suppression effectiveness.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12" data-aos="fade-down">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Product Image */}
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 dark:from-slate-700 dark:to-slate-600">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Product Content */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  {/* Name & Summary */}
                  <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{product.summary}</p>

                  {/* Use Cases */}
                  <div className="mb-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-primary dark:text-blue-400 mb-2 uppercase tracking-wide">Use Cases</h4>
                    <ul className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      {product.useCases.slice(0, 3).map((useCase, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2 flex-shrink-0">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Protection */}
                  <div className="mb-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-primary dark:text-blue-400 mb-2 uppercase tracking-wide">How It Protects</h4>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{product.protection}</p>
                  </div>

                  {/* Guidelines */}
                  <div className="mb-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-primary dark:text-blue-400 mb-2 uppercase tracking-wide">Maintenance Guidelines</h4>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{product.guidelines}</p>
                  </div>

                  {/* BD Value */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 p-3 sm:p-4 rounded-lg border-l-4 border-accent mt-auto">
                    <h4 className="text-xs sm:text-sm font-bold text-primary dark:text-blue-400 mb-1">BD Enterprises Value</h4>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{product.bdValue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12" data-aos="fade-down">
            Compliance & Standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-2">{standard.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose BD Enterprises */}
        <div className="mb-16 md:mb-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-white text-center mb-8 md:mb-12" data-aos="fade-down">
            Why Choose BD Enterprises
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={index * 50}>
                <span className="text-2xl text-accent mr-3 flex-shrink-0 mt-1">✓</span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16" data-aos="fade-up">
          <Link to="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-accent to-orange-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-base font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider min-h-[48px]">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SprinklerSystems;
