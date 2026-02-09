import React from 'react';
import { Link } from 'react-router-dom';

const ComplianceInspection = () => {
  const products = [
    {
      image: '/images/services/compliance-inspection.svg',
      name: 'Comprehensive Fire Code Compliance Audit',
      summary: 'Full facility assessment against NFPA standards, IBC requirements, and local fire codes with detailed findings and remediation prioritization.',
      useCases: [
        'Annual compliance verification',
        'Pre-insurance audit preparation',
        'Pre-inspection facility readiness check',
        'Major facility renovation/expansion projects'
      ],
      protection: 'Identifies compliance gaps before regulatory inspectors do, reducing fines, liability, and operational disruptions.',
      guidelines: 'Annual audits recommended; After major facility changes; Before insurance policy renewals',
      bdValue: 'Expert engineer assessment, clear photographic documentation, prioritized remediation list, and insurance-ready reporting.'
    },
    {
      image: '/images/services/system-inspection.svg',
      name: 'System-Specific Inspection & Certification',
      summary: 'Individual testing and certification of fire extinguishers, alarms, sprinklers, hydrants, and emergency lighting with detailed system reports.',
      useCases: [
        'Annual fire extinguisher certification',
        'Fire alarm and detection system testing',
        'Sprinkler and suppression system flow tests',
        'Hydrant system operability verification'
      ],
      protection: 'Ensures each protective system is fully functional and ready to perform during actual emergencies.',
      guidelines: 'Annual testing for all systems; Quarterly checks for high-risk components; After any system activation',
      bdValue: 'NFPA-certified technicians, detailed component testing, certification documentation for regulatory compliance.'
    },
    {
      image: '/images/services/remediation-planning.svg',
      name: 'Code Remediation & Documentation',
      summary: 'Strategic planning and implementation of code corrections with project management, regulatory coordination, and compliance documentation.',
      useCases: [
        'Remediation project planning and scheduling',
        'Contractor coordination and oversight',
        'Regulatory communication and approvals',
        'Compliance documentation for insurance'
      ],
      protection: 'Transforms audit findings into actionable improvements with professional oversight and regulatory coordination.',
      guidelines: 'Typically 30-90 days depending on scope; Quarterly progress check-ins; Final verification upon completion',
      bdValue: 'Expert project management, vendor coordination, regulatory expertise, and final compliance verification.'
    }
  ];

  const standards = [
    { title: 'NFPA 1', description: 'Fire Code - primary standard for fire protection and prevention requirements' },
    { title: 'IBC Standards', description: 'International Building Code requirements for fire safety and egress' },
    { title: 'Local Codes', description: 'Jurisdiction-specific fire marshal regulations and adopted standards' }
  ];

  const whyChooseUs = [
    'PE-licensed fire protection engineers conducting comprehensive audits',
    'Multi-system expertise (extinguishers, alarms, sprinklers, lighting)',
    'Detailed photographic documentation and priority remediation lists',
    'Regulatory coordination and code interpretation guidance',
    'Project management for code remediation implementation',
    'Complete audit documentation ready for insurance and fire marshal approval'
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
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 inline-block">✓</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 glow-text">Fire Code Compliance & Inspection Services</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4">
            Navigating fire code requirements can be complex. Our experienced inspectors conduct thorough compliance audits, ensuring your facility meets or exceeds all NFPA standards, IBC requirements, and local fire marshal regulations.
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide detailed reports, actionable remediation plans, and full documentation to keep your facility compliant, reduce liability, and pass insurance and regulatory inspections with confidence.
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
                    <h4 className="text-xs sm:text-sm font-semibold text-primary dark:text-blue-400 mb-2 uppercase tracking-wide">Recommended Schedule</h4>
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
            Request Compliance Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComplianceInspection;
