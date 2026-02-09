import React from 'react';
import { Link } from 'react-router-dom';

const FireExtinguishers = () => {
  const products = [
    {
      image: '/images/fire extinguisher/automated-Fire-extinguisher.webp',
      name: 'Automated Fire Suppression Systems',
      summary: 'State-of-the-art automated systems for immediate, 24/7 fire detection and suppression before significant damage occurs.',
      useCases: [
        'Data centers and server rooms',
        'High-value equipment protection',
        'Manufacturing facilities',
        'Storage areas with sensitive materials'
      ],
      protection: 'Detects fires in their earliest stages and automatically activates suppression agents, reducing response time and minimizing property damage.',
      guidelines: 'Requires professional inspection annually; Regular testing of detection sensors; Proper agent refills after discharge',
      bdValue: 'Expert system design tailored to your facility\'s unique risks, 24/7 monitoring support, and rapid emergency response.'
    },
    {
      image: '/images/fire extinguisher/CO2-Fire-suppression-system.jpg',
      name: 'CO2 Fire Suppression Systems',
      summary: 'Precision-engineered CO2 systems for protecting unoccupied industrial and commercial spaces with sensitive equipment.',
      useCases: [
        'Data centers and server facilities',
        'Power generation equipment',
        'Flammable liquid storage',
        'High-value machinery areas',
        'Electrical equipment rooms'
      ],
      protection: 'CO2 suppresses fires by displacing oxygen and cooling the protected area, leaving no residue and requiring no cleanup.',
      guidelines: 'Requires NFPA 12 compliance certification; Monthly system checks; Professional discharge testing every 5 years',
      bdValue: 'Clean agent technology with zero residue, comprehensive NFPA 12 compliance, and specialized technician training.'
    },
    {
      image: '/images/fire extinguisher/co2-flooding-system-1000x1000.jpg',
      name: 'CO2 Flooding Systems',
      summary: 'Total room protection with rapid CO2 flooding for swift, automated suppression of fires in complex industrial environments.',
      useCases: [
        'Large unoccupied hazardous areas',
        'Multi-hazard industrial zones',
        'Research laboratories',
        'Specialized equipment rooms',
        'High-risk manufacturing zones'
      ],
      protection: 'System fills entire room with CO2 concentration sufficient to extinguish fires within seconds, preventing catastrophic loss.',
      guidelines: 'Requires site-specific engineering; Pre-discharge alarm verification; Annual pressure testing; Proper safety signage',
      bdValue: 'Custom engineered solutions for complex fire risks, comprehensive safety protocols, and continuous system monitoring.'
    },
    {
      image: '/images/services/fire-extinguisher-tubing.svg',
      name: 'CO2 Tubing Systems',
      summary: 'Precision-engineered piping networks connecting storage cylinders to discharge nozzles with reliable agent delivery.',
      useCases: [
        'System interconnections',
        'Multi-zone coverage',
        'Extended reach applications',
        'Building-wide protection networks'
      ],
      protection: 'Properly routed and installed tubing ensures reliable agent delivery and consistent suppression performance across all protected areas.',
      guidelines: 'Professional installation required; Pressure testing of all connections; Proper labeling and zone identification; Annual inspections',
      bdValue: 'Certified installation by NFPA-trained technicians, pressure-tested connections, and clear zone identification for safety.'
    }
  ];

  const standards = [
    { title: 'NFPA 10', description: 'National Fire Protection Association standard for portable fire extinguishers and systems' },
    { title: 'NFPA 12', description: 'Standards for CO2 extinguishing systems including safe discharge and operational procedures' },
    { title: 'OSHA Compliance', description: 'Workplace fire safety regulations and annual inspection documentation requirements' }
  ];

  const whyChooseUs = [
    'NFPA-certified technicians with specialized fire suppression expertise',
    'Multi-class extinguisher coverage for all fire types (A, B, C, D)',
    'Annual compliance inspections with full documentation',
    '24/7 emergency replacement and rapid response availability',
    'Comprehensive staff training and certification programs included',
    'Custom system design tailored to your facility\'s specific fire risks'
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
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 inline-block">🧯</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 glow-text">Fire Extinguisher Systems</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4">
            Fire extinguishers are the first line of defense in fire emergencies. Our comprehensive fire extinguisher systems provide multi-class coverage for any facility type, ensuring rapid response capabilities and regulatory compliance.
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From manufacturing plants to office buildings, we install, inspect, and maintain systems tailored to your specific fire risks and operational needs.
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
          <Link to="/contact" className="inline-block bg-accent dark:bg-blue-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-opacity-90 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl glow-box min-h-[44px] flex items-center justify-center">
            Discuss Fire Extinguisher Systems
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FireExtinguishers;
