import React, { useState, useEffect } from 'react';

const About = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare');

  useEffect(() => {
    // Animate growth metrics
    setTimeout(() => {
    }, 500);
  }, []);

  const metrics = [
    { label: 'Years in Business', value: '25+' },
    { label: 'Facilities Protected', value: '4,500+' },
    { label: 'Professional Team', value: '120+' },
    { label: 'Certifications', value: 'NFPA Certified' },
  ];

  const industryServices = {
    'Healthcare Facilities': {
      icon: '\u{1F3E5}',
      description: 'Comprehensive fire safety solutions for hospitals, clinics, and medical centers.',
      services: [
        'Fire alarm systems with automatic alerts to nursing stations',
        'Sprinkler systems with pharmaceutical-safe suppression',
        'Emergency lighting in patient rooms and evacuation routes',
        'Specialized training for medical staff and evacuation protocols',
        'Compliance with NFPA 99 and healthcare facility standards',
        'Regular inspections for patient safety and liability protection'
      ]
    },
    'Manufacturing Plants': {
      icon: '\u{1F3ED}',
      description: 'Heavy-duty fire protection for industrial operations and production facilities.',
      services: [
        'Multi-type fire extinguisher systems for industrial hazards',
        'Specialized suppression for chemical storage areas',
        'High-capacity sprinkler systems for large warehouse spaces',
        'Emergency exit lighting and wayfinding systems',
        'Employee fire safety and evacuation training programs',
        'NFPA 13 and industrial code compliance audits'
      ]
    },
    'Commercial Buildings': {
      icon: '\u{1F3E2}',
      description: 'Professional fire safety for office buildings, retail, and mixed-use spaces.',
      services: [
        'Advanced fire alarm systems with monitored detection',
        'Building-wide sprinkler system design and installation',
        'LED emergency lighting and exit sign solutions',
        'Tenant evacuation coordination and planning',
        'Regular maintenance and certification services',
        'Annual compliance audits and code updates'
      ]
    },
    'Residential Properties': {
      icon: '\u{1F3E0}',
      description: 'Home and apartment safety solutions for residential communities.',
      services: [
        'Residential fire alarm systems with mobile alerts',
        'Fire extinguisher placement and resident training',
        'Emergency lighting for common areas and exits',
        'Sprinkler system design for apartments and condos',
        'Community safety awareness programs',
        'Homeowner compliance certification and inspections'
      ]
    },
    'Government Facilities': {
      icon: '\u{1F3DB}\u{FE0F}',
      description: 'Critical fire protection for government buildings and public spaces.',
      services: [
        'State-of-the-art fire detection and suppression systems',
        'Enhanced emergency lighting for public safety',
        'Multi-building compliance and coordination',
        'Staff and public safety training programs',
        'Full NFPA compliance and certifications',
        'Security integration with fire safety systems'
      ]
    },
    'Educational Institutions': {
      icon: '\u{1F393}',
      description: 'Comprehensive safety for schools, universities, and training centers.',
      services: [
        'Fire safety systems designed for high-occupancy buildings',
        'Student and staff evacuation training programs',
        'Emergency lighting in classrooms and corridors',
        'Accessible fire extinguisher placement',
        'Annual drills and safety protocol updates',
        'Laboratory and specialized area fire suppression'
      ]
    },
    'Hospitality': {
      icon: '\u{1F3E8}',
      description: 'Guest-safe fire protection for hotels, restaurants, and entertainment venues.',
      services: [
        'Guest room and corridor fire alarm systems',
        'Kitchen and laundry area suppression systems',
        'Smoke detection with guest notification',
        'Emergency lighting for safe evacuation',
        'Staff safety training and guest communication',
        'Regular inspections and maintenance scheduling'
      ]
    },
    'Data Centers': {
      icon: '\u{1F4BE}',
      description: 'Specialized fire protection for critical IT infrastructure.',
      services: [
        'Non-water suppression systems (FM-200, Novec, etc.)',
        'Clean agent fire suppression to protect equipment',
        'Advanced fire detection systems',
        'Redundant backup systems for critical operations',
        ' 24/7 monitoring and immediate response protocols',
        'Data protection and minimal downtime during incidents'
      ]
    }
  };

  const industries = [
    'Healthcare Facilities',
    'Manufacturing Plants',
    'Commercial Buildings',
    'Residential Properties',
    'Government Facilities',
    'Educational Institutions',
    'Hospitality',
    'Data Centers',
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-white/90">About Our Company</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text">
            25+ Years of Fire Safety Excellence
          </h1>
          
          <p className="text-lg md:text-2xl font-bold text-blue-200 dark:text-blue-300 max-w-3xl mx-auto mb-4">
            Trusted by Thousands of Facilities
          </p>
          
          <p className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto">
            For over 25 years, BD Enterprises has been the trusted fire safety partner for thousands of facilities across North America, delivering certified, compliant protection solutions that save lives and protect assets.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24" data-aos="fade-up">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 p-6 md:p-8 flex flex-col items-center justify-center text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl md:text-5xl font-black mb-3 text-accent">{metric.value}</div>
              <p className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-wider">{metric.label}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 glow-text">Our Mission</h2>
            <p className="text-base md:text-lg text-white/80 dark:text-gray-300 leading-relaxed mb-4">
              To protect lives, assets, and communities through comprehensive fire safety solutions delivered with unmatched expertise and unwavering commitment to excellence.
            </p>
            <p className="text-base md:text-lg text-white/80 dark:text-gray-300 leading-relaxed">
              We partner with facility managers, business owners, and safety directors to implement best-in-class fire protection systems that exceed code requirements and provide true peace of mind.
            </p>
          </div>
          <div data-aos="zoom-in" className="overflow-hidden rounded-2xl shadow-2xl">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Our Mission" className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div data-aos="zoom-in" className="order-2 md:order-1 overflow-hidden rounded-2xl shadow-2xl">
            <img src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=600&h=400&fit=crop" alt="Our Vision" className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
          </div>
          <div data-aos="fade-left" className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 glow-text">Our Vision</h2>
            <p className="text-base md:text-lg text-white/80 dark:text-gray-300 leading-relaxed mb-4">
              To be the most trusted and innovative fire safety partner in North America, setting industry standards for protection, compliance, and customer service.
            </p>
            <p className="text-base md:text-lg text-white/80 dark:text-gray-300 leading-relaxed">
              We envision a future where every facility has access to cutting-edge fire safety technology, expert training, and proactive maintenance—keeping people and assets safe every single day.
            </p>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16 md:mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 glow-text">Industries We Serve</h2>
          <p className="text-center text-white/80 text-base md:text-lg mb-12 max-w-3xl mx-auto">
            From healthcare facilities to data centers, we provide specialized fire safety solutions tailored to each industry's unique requirements.
          </p>
          
          {/* Industry Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            {industries.map((industry, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndustry(industry)}
                className={`group relative p-4 md:p-6 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 md:hover:scale-105 text-xs sm:text-sm md:text-base flex flex-col items-center justify-center gap-2 min-h-[100px] overflow-hidden ${
                  selectedIndustry === industry
                    ? 'bg-gradient-to-r from-accent to-orange-500 text-white shadow-2xl ring-2 ring-white'
                    : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-white hover:border-accent/50'
                }`}
                data-aos="zoom-in"
                data-aos-delay={index * 30}
              >
                <div className="text-2xl md:text-3xl">{industryServices[industry]?.icon}</div>
                <div className="leading-tight text-center line-clamp-2 text-xs md:text-sm">{industry}</div>
                {selectedIndustry === industry && <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>}
              </button>
            ))}
          </div>

          {/* Selected Industry Details */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 overflow-hidden" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-6xl text-center md:text-left">{industryServices[selectedIndustry]?.icon}</div>
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 glow-text">{selectedIndustry}</h3>
                <p className="text-base md:text-lg text-white/80">{industryServices[selectedIndustry]?.description}</p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {industryServices[selectedIndustry]?.services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-gradient-to-br from-accent/20 to-transparent rounded-xl p-4 border border-accent/30 hover:border-accent/60 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/></svg>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 glow-text">Our Core Values</h2>
          <p className="text-white/80 text-base md:text-lg mb-12 max-w-3xl mx-auto">
            These principles guide every decision we make and every service we deliver.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300 group" data-aos="zoom-in">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Safety First</h3>
              <p className="text-white/80 text-sm md:text-base">Every decision is driven by our unwavering commitment to protecting lives and assets from fire hazards.</p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300 group" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Excellence</h3>
              <p className="text-white/80 text-sm md:text-base">We maintain the highest standards in certification, training, and service delivery across every project.</p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300 group" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Partnership</h3>
              <p className="text-white/80 text-sm md:text-base">We work collaboratively with our clients to understand their unique needs and exceed their expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
