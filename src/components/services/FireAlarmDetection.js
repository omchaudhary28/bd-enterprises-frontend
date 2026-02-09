import React from 'react';
import { Link } from 'react-router-dom';

const FireAlarmDetection = () => {
  const products = [
    {
      image: '/images/services/fire-alarm-system-design.svg',
      name: 'Addressable Fire Alarm System',
      summary: 'Pinpoints exact device location for faster response, troubleshooting, and maintenance with intelligent network monitoring.',
      useCases: [
        'Large facilities requiring zone-based control',
        'Multi-building campuses with centralized monitoring',
        'Industrial complexes with complex layouts',
        'Buildings requiring network peer-to-peer linking'
      ],
      protection: 'Identifies exact device location in seconds, enabling rapid emergency response and precise system diagnostics.',
      guidelines: 'Requires annual NFPA 72 compliance testing; Network connectivity checks monthly; Device address verification quarterly',
      bdValue: 'Expert system design, code-compliant installation, and centralized monitoring with real-time alerts across all zones.'
    },
    {
      image: '/images/services/fire-alarm-detection.svg',
      name: 'Advanced Detection Devices',
      summary: 'Comprehensive suite of smoke, heat, and multi-detectors with AI-powered false alarm reduction technology.',
      useCases: [
        'Early warning detection for all building types',
        'Dusty or humid environments (heat detectors)',
        'Warehouse and high-ceiling applications (beam detectors)',
        'Industrial high-risk areas (flame detectors)'
      ],
      protection: 'Multiple detection methods (smoke, heat, flame) work together to identify fires in their earliest stages before significant damage occurs.',
      guidelines: 'Monthly visual inspections; Annual sensor testing and calibration; Dust/obstruction clearing every 6 months',
      bdValue: 'Intelligent detector placement analysis, multi-sensor redundancy, and false alarm reduction that maintains safety without nuisance alarms.'
    },
    {
      image: '/images/services/fire-alarm-monitoring.svg',
      name: 'Professional Monitoring & Mobile Alerts',
      summary: '24/7 certified monitoring center with instant mobile notifications and automatic emergency dispatch coordination.',
      useCases: [
        'All commercial and industrial fire alarm systems',
        'Remote facility oversight from corporate offices',
        'Multi-location enterprise with unified monitoring',
        'High-risk facilities requiring priority dispatch'
      ],
      protection: 'Trained professionals receive and verify all signals 24/7, immediately coordinating with emergency services for rapid response.',
      guidelines: 'System connectivity testing weekly; Alert logs reviewed monthly; Dispatch drills quarterly',
      bdValue: 'Round-the-clock certified monitoring, instant key personnel notifications, automatic emergency dispatch, and detailed response documentation.'
    }
  ];

  const standards = [
    { title: 'NFPA 72', description: 'National standard for fire alarm system installation, design, and testing' },
    { title: 'NFPA 101', description: 'Life Safety Code requiring fire detection and alarm systems in occupied buildings' },
    { title: 'Local Codes', description: 'Compliance with jurisdiction-specific fire alarm and detection requirements' }
  ];

  const whyChooseUs = [
    'NFPA 72-certified system designers and technicians',
    'State-of-the-art addressable technology with network integration',
    'AI-powered false alarm reduction maintaining safety',
    '24/7 professional monitoring center with instant dispatch coordination',
    'Mobile app notifications for real-time system awareness',
    'Annual compliance testing and detailed documentation'
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
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 inline-block">🚨</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 glow-text">Fire Alarm & Detection Systems</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4">
            Early detection is critical in fire safety. Our state-of-the-art fire alarm and detection systems use the latest technology to identify fire hazards within seconds, enabling rapid response and evacuation.
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From small offices to large industrial facilities, we design, install, and monitor systems that meet or exceed all regulatory requirements while minimizing false alarms.
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

export default FireAlarmDetection;
