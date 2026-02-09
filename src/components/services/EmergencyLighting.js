import React from 'react';
import { Link } from 'react-router-dom';

const EmergencyLighting = () => {
  const products = [
    {
      image: '/images/services/emergency-lighting-exits.svg',
      name: 'LED Exit Signs',
      summary: 'Energy-efficient LED exit signage with long battery life, low maintenance requirements, and superior visibility.',
      useCases: [
        'Interior exit doors and corridors',
        'Stairwell and emergency exits',
        'Fire escape routes and marked pathways',
        'Commercial and industrial facilities'
      ],
      protection: 'Ensures occupants can clearly identify exit routes during power loss or emergency situations.',
      guidelines: 'Monthly visual inspection; Annual battery testing; Replacement every 5-7 years',
      bdValue: 'Durable LED technology with 50,000+ hour lifespan, minimal maintenance, excellent visibility, and code-compliant placement.'
    },
    {
      image: '/images/services/emergency-backup-system.svg',
      name: 'Battery Backup Systems',
      summary: 'Intelligent inverter systems providing automatic power backup for all emergency lighting when grid power fails.',
      useCases: [
        'Central battery backup for multiple fixtures',
        'Individual unit battery packs',
        'Automated switchover from grid to battery',
        'Large facilities with extensive exit signage'
      ],
      protection: 'Automatically activates emergency lighting within seconds of power loss, maintaining full visibility throughout facility.',
      guidelines: 'Quarterly system testing; Annual battery load testing; Biannual service and maintenance inspections',
      bdValue: 'Fast automatic failover, continuous monitoring of battery health, remote testing capability, and comprehensive system diagnostics.'
    },
    {
      image: '/images/services/emergency-pathways.svg',
      name: 'Emergency Pathway & Wayfinding Lighting',
      summary: 'Illuminated pathways and directional signage guiding occupants safely to exits during darkness or power loss.',
      useCases: [
        'Floor-mounted evacuation route markers',
        'Directional arrows and signage lighting',
        'Stairwell edge marking and handrail illumination',
        'Large facilities with complex layouts'
      ],
      protection: 'Provides continuous visible path guidance enabling safe evacuation even in complete darkness.',
      guidelines: 'Monthly visual checks of pathway markers; Annual illumination level testing; Battery replacement every 3-5 years',
      bdValue: 'Photoluminescent and LED combined systems, high-visibility markings, intuitive wayfinding design, and full facility coverage.'
    }
  ];

  const standards = [
    { title: 'NFPA 101', description: 'Life Safety Code requirements for emergency lighting and exit sign placement' },
    { title: 'IBC Standards', description: 'International Building Code compliance for evacuation route illumination' },
    { title: 'ADA Compliance', description: 'Accessible design standards for exit signage location and visibility' }
  ];

  const whyChooseUs = [
    'Expert exit sign placement and facility surveys',
    'LED technology with 50,000+ hour lifespan',
    'Automatic battery backup with instant activation',
    'Comprehensive facility wayfinding and pathways',
    'NFPA 101 and IBC code compliance',
    'Annual inspections and battery replacement services'
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
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 inline-block">💡</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 glow-text">Emergency Lighting & Exit Signage</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4">
            In an emergency, visibility is critical. Our emergency lighting and exit signage systems guide occupants safely out of your facility when conventional lighting fails, providing peace of mind and regulatory compliance.
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine advanced LED technology with intelligent battery backup systems to ensure continuous operation during power outages, while reducing energy costs and maintenance requirements.
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

export default EmergencyLighting;
