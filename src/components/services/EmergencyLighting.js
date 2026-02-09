import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const EmergencyLighting = () => {
  React.useEffect(() => {
    if (AOS && typeof AOS.refresh === 'function') {
      AOS.refresh();
    }
  }, []);

  const services = [
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
    { icon: '📋', title: 'NFPA 101', description: 'Life Safety Code requirements for emergency lighting and exit sign placement' },
    { icon: '🛡️', title: 'IBC Standards', description: 'International Building Code compliance for evacuation route illumination' },
    { icon: '✓', title: 'ADA Compliance', description: 'Accessible design standards for exit signage location and visibility' }
  ];

  const benefits = [
    'Expert exit sign placement and facility surveys',
    'LED technology with 50,000+ hour lifespan',
    'Automatic battery backup with instant activation',
    'Comprehensive facility wayfinding and pathways',
    'NFPA 101 and IBC code compliance',
    'Annual inspections and battery replacement services'
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Back Link */}
        <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors mb-8 font-semibold text-sm md:text-base group" data-aos="fade-right">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Services
        </Link>

        {/* Hero Section */}
        <section className="mb-16 md:mb-24" data-aos="fade-up">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">Emergency Illumination</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text">
              Emergency Lighting & Exit Signage
            </h1>

            <p className="text-lg md:text-2xl font-bold text-blue-200 dark:text-blue-300 max-w-3xl mx-auto mb-4">
              Visibility When It Matters Most
            </p>

            <p className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In an emergency, visibility is critical for safe evacuation. Our LED exit signs and emergency lighting systems ensure occupants can navigate safely even during complete power loss. We combine advanced LED technology with intelligent battery backup systems to provide reliable illumination, code compliance, and minimal maintenance.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">
            Our Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 cursor-pointer flex flex-col h-full"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-500/20 to-accent/20">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Use Cases */}
                  <div className="mb-4 flex-grow">
                    <h4 className="text-xs font-bold text-accent/90 mb-2 uppercase tracking-wider">Primary Applications</h4>
                    <ul className="space-y-1">
                      {service.useCases.slice(0, 2).map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/70">
                          <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-xs font-bold text-accent/80 uppercase tracking-wider mb-1">How It Protects</p>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed">{service.protection}</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                      <p className="text-xs font-bold text-accent mb-1 uppercase tracking-wider">BD Value</p>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed">{service.bdValue}</p>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Standards Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">
            Compliance & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 p-6 md:p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {standard.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {standard.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text" data-aos="fade-down">
            Why Choose BD Enterprises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
                <span className="text-white/80 text-sm md:text-base leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-8 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ensure Safe Emergency Egress</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Get expert guidance on emergency lighting design and exit sign placement for your facility.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmergencyLighting;
