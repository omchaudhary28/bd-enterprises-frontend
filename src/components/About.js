import React, { useState, useEffect } from 'react';

const About = () => {
  const [growthData, setGrowthData] = useState([0, 0, 0, 0, 0]);
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare');

  useEffect(() => {
    // Animate growth metrics
    setTimeout(() => {
      setGrowthData([250, 500, 1200, 2800, 4500]);
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
      icon: '🏥',
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
      icon: '🏭',
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
      icon: '🏢',
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
      icon: '🏠',
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
      icon: '🏛️',
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
      icon: '🎓',
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
      icon: '🏨',
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
      icon: '💾',
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
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary dark:from-slate-900 dark:to-slate-800 min-h-screen py-12 md:py-16">
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-accent opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent opacity-5 dark:opacity-15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full overflow-hidden">
        <div className="bg-gradient-to-br from-teal-100 via-blue-100 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-lg md:rounded-xl shadow-md glow-box overflow-hidden" data-aos="fade-up" data-aos-duration="400">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary dark:text-white text-center glow-text" data-aos="fade-down" data-aos-duration="400">About BD Enterprises</h2>
          <p className="text-base md:text-xl text-neutral-700 dark:text-gray-300 leading-relaxed text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400">
          For over 25 years, BD Enterprises has been the trusted fire safety partner for thousands of facilities across North America, delivering certified, compliant protection solutions that save lives and protect assets.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="400">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary dark:text-blue-400 mb-3 md:mb-4">Our Mission</h3>
            <p className="text-sm md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
              To protect lives, assets, and communities through comprehensive fire safety solutions delivered with unmatched expertise and unwavering commitment to excellence.
            </p>
            <p className="text-sm md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed">
              We partner with facility managers, business owners, and safety directors to implement best-in-class fire protection systems that exceed code requirements and provide true peace of mind.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500" className="overflow-hidden rounded-lg md:rounded-xl shadow-md glow-box image-reveal-scroll">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" alt="Our Mission" className="rounded-lg md:rounded-xl w-full h-auto transition-transform duration-500 hover:scale-110" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12">
          <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500" className="order-2 md:order-1 overflow-hidden rounded-lg md:rounded-xl shadow-md glow-box image-reveal-scroll">
            <img src="https://images.unsplash.com/photo-1581092162562-40038f56c6fe?w=600&h=400&fit=crop" alt="Our Vision" className="rounded-lg md:rounded-xl w-full h-auto transition-transform duration-500 hover:scale-110" />
          </div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="400" className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary dark:text-blue-400 mb-3 md:mb-4">Our Vision</h3>
            <p className="text-sm md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
              To be the most trusted and innovative fire safety partner in North America, setting industry standards for protection, compliance, and customer service.
            </p>
            <p className="text-sm md:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed">
              We envision a future where every facility has access to cutting-edge fire safety technology, expert training, and proactive maintenance—keeping people and assets safe every single day.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-10 md:mt-16 mb-10 md:mb-12 px-2 md:px-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary dark:text-white mb-6 md:mb-8 glow-text">Why Choose BD Enterprises?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-primary to-secondary dark:from-slate-700 dark:to-blue-900 text-white p-4 md:p-6 rounded-lg md:rounded-xl text-center glow-box hover:shadow-2xl transition-shadow" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-accent">{metric.value}</div>
                <p className="text-xs md:text-base font-semibold leading-tight">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Chart Visualization */}
        <div className="mt-10 md:mt-12 mb-10 md:mb-12 p-4 md:p-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-950 rounded-lg md:rounded-xl glow-box overflow-x-auto border border-blue-200 dark:border-slate-700" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-4 md:mb-6 text-center">Our Growth: Facilities Protected by Year</h3>
          <div className="flex items-end justify-between md:justify-around h-48 md:h-64 gap-2 md:gap-4 min-w-full md:min-w-0 px-2 md:px-0">
            {['Year 1', 'Year 5', 'Year 10', 'Year 20', 'Today'].map((year, index) => (
              <div key={index} className="flex flex-col items-center gap-1 md:gap-2 flex-shrink-0">
                <div className="text-xs md:text-sm font-semibold text-primary dark:text-white text-center">{growthData[index]}</div>
                <div
                  className="w-8 md:w-12 bg-gradient-to-t from-secondary to-accent rounded-t-lg transition-all duration-1000 ease-out"
                  style={{ height: `${(growthData[index] / 4500) * 160}px`, minHeight: '4px' }}
                ></div>
                <div className="text-xs text-neutral-700 dark:text-gray-300 text-center leading-tight">{year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served - Interactive */}
        <div className="mt-10 md:mt-12 mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary dark:text-white mb-6 md:mb-8 glow-text">Industries We Serve</h3>
          
          {/* Industry Selection Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
            {industries.map((industry, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndustry(industry)}
                className={`p-3 md:p-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform active:scale-95 md:hover:scale-105 text-xs md:text-sm industry-card-scroll ${
                  selectedIndustry === industry
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg ring-2 ring-accent scale-105'
                    : 'bg-gradient-to-br from-teal-100 to-blue-100 dark:bg-slate-700 border-2 border-secondary dark:border-blue-500 text-primary dark:text-white hover:from-teal-200 hover:to-blue-200 dark:hover:bg-slate-600'
                }`}
                data-aos="zoom-in"
                data-aos-delay={index * 30}
                style={{ animationDelay: `${index * 100}ms`, opacity: 1 }}
              >
                <div className="text-lg md:text-2xl mb-1">{industryServices[industry]?.icon}</div>
                <div className="leading-tight">{industry}</div>
              </button>
            ))}
          </div>

          {/* Selected Industry Details */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-950 p-5 md:p-8 rounded-lg md:rounded-xl glow-box border border-blue-200 dark:border-slate-700 service-card-scroll" data-aos="fade-up" data-aos-duration="300">
            <div className="mb-5 md:mb-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl">{industryServices[selectedIndustry]?.icon}</div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">{selectedIndustry}</h4>
                <p className="text-sm md:text-base text-neutral-700 dark:text-gray-300 mt-1">{industryServices[selectedIndustry]?.description}</p>
              </div>
              <div className="w-full overflow-hidden rounded-lg shadow-md image-reveal-scroll md:flex-shrink-0 md:w-48 h-40">
                {selectedIndustry === 'Healthcare Facilities' && <img src="https://images.unsplash.com/photo-1519494026892-80bbd2651601?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
                {selectedIndustry === 'Manufacturing Plants' && <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
                {selectedIndustry === 'Commercial Buildings' && <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
                {selectedIndustry === 'Residential Properties' && <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
                {selectedIndustry === 'Government Facilities' && <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
                {selectedIndustry === 'Educational Institutions' && <img src="https://images.unsplash.com/photo-1427504494785-cdac41688b2c?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
                {selectedIndustry === 'Hospitality' && <img src="https://images.unsplash.com/photo-1631049307038-da31c3eafb77?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
                {selectedIndustry === 'Data Centers' && <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" alt={selectedIndustry} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />}
              </div>
            </div>

            <div>
              <h5 className="text-lg md:text-xl font-bold text-secondary dark:text-blue-300 mb-4">What We Provide:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {industryServices[selectedIndustry]?.services.map((service, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-br from-teal-100 to-blue-100 dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100 dark:border-slate-700 service-card-scroll" data-aos="fade-up" data-aos-delay={index * 100} style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="text-accent text-lg md:text-2xl mr-2 md:mr-3 flex-shrink-0">✓</span>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-200">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 md:mt-6 p-3 md:p-4 bg-gradient-to-br from-teal-100 to-blue-100 dark:bg-gray-800 rounded-lg border-l-4 border-accent dark:border-slate-700">
              <p className="text-xs md:text-sm text-neutral-700 dark:text-gray-200 font-semibold">
                💡 Ready to protect your {selectedIndustry.toLowerCase()}? Contact us for a customized fire safety solution designed specifically for your industry.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-10 md:mt-16 text-center p-6 md:p-8 bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-gray-950 text-white rounded-lg md:rounded-xl glow-box overflow-hidden border border-blue-300 dark:border-slate-700" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 glow-text">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="px-2">
              <h4 className="text-lg md:text-xl font-bold mb-2 text-accent">🛡️ Safety First</h4>
              <p className="text-sm md:text-base text-gray-100">Every decision is driven by our commitment to protecting lives and assets</p>
            </div>
            <div className="px-2">
              <h4 className="text-lg md:text-xl font-bold mb-2 text-accent">✓ Excellence</h4>
              <p className="text-sm md:text-base text-gray-100">We maintain the highest standards in certification, training, and service delivery</p>
            </div>
            <div className="px-2">
              <h4 className="text-lg md:text-xl font-bold mb-2 text-accent">🤝 Partnership</h4>
              <p className="text-sm md:text-base text-gray-100">We work collaboratively with clients to understand and exceed their expectations</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
