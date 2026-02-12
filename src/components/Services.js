import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: 'Fire Extinguisher Systems',
    description: 'Certified, compliant fire extinguishers for all facility types.',
    long_description: 'Regular inspections, maintenance, and emergency replacement services available 24/7.',
    imageUrl: '/images/fire%20extinguisher/CO2-Fire-suppression-system.jpg',
    category: 'Safety',
    benefits: ['Certified Equipment', '24/7 Support', 'Regular Maintenance'],
    path: '/services/fire-extinguishers',
  },
  {
    title: 'Fire Alarm & Detection',
    description: 'State-of-the-art fire detection and alarm systems with smart monitoring.',
    long_description: 'Automatic alerts, professional monitoring, and code compliance guaranteed.',
    imageUrl: '/images/Fire%20Alarm%20Systems/618cdfa3202b1d251c484e97_How%20Do%20Fire%20Alarms%20Work%20in%20Commercial%20Buildings.jpg',
    category: 'Detection',
    benefits: ['Smart Monitoring', 'Auto Alerts', 'Code Compliant'],
    path: '/services/fire-alarm-detection',
  },
  {
    title: 'Sprinkler Systems',
    description: 'High-performance sprinkler and suppression systems engineered for maximum protection.',
    long_description: 'Installation, maintenance, and annual inspections included.',
    imageUrl: '/images/sprinkler%20system/Fire_sprinkler_roof_mount_side_view.jpg',
    category: 'Safety',
    benefits: ['Automatic', 'Efficient', 'Certified'],
    path: '/services/sprinkler-systems',
  },
  {
    title: 'Emergency Lighting & Exits',
    description: 'Code-compliant emergency lighting, exit signs, and wayfinding systems.',
    long_description: 'Battery backup and LED solutions for cost savings and reliability.',
    imageUrl: '/images/emergency%20lights/3mDZADxjMAulmzrzYOOn9xHZSn4QVEwl41FESCKhECk7GlvfznL8xpQrBjj6YZvX-eHOBJA_QWPNVw_wkv0lI_IHJipVPdklUgWHd6NXeQw.jpg',
    category: 'Safety',
    benefits: ['LED Solutions', 'Battery Backup', 'Code Ready'],
    path: '/services/emergency-lighting',
  },
  {
    title: 'Fire Hydrant Systems',
    description: 'Design, installation and testing of hydrant systems for building and industrial sites.',
    long_description: 'Full-service hydrant solutions including pumps, valves, and periodic testing.',
    imageUrl: '/images/sprinkler%20system/high%20hazard%20sprinkler%20systems.jpg',
    category: 'Protection',
    benefits: ['Engineered Design', 'Site Testing', 'Code Compliant'],
    path: '/services/fire-hydrant-systems',
  },
  {
    title: 'Smoke Detection Systems',
    description: 'Advanced smoke detection and early-warning systems for risk mitigation.',
    long_description: 'Addressable and conventional smoke detection solutions integrated with alarms and monitoring.',
    imageUrl: '/images/Fire%20Alarm%20Systems/types-of-fire-alarm.png',
    category: 'Detection',
    benefits: ['Early Warning', 'Integrated Monitoring', 'Scalable'],
    path: '/services/smoke-detection',
  },
  {
    title: 'Industrial Safety Products (PPE)',
    description: 'Full range of certified PPE for industrial workplaces.',
    long_description: 'Helmets, gloves, footwear, respiratory and hearing protection from leading brands.',
    imageUrl: '/images/ppes/Head-Protection.webp',
    category: 'PPE',
    benefits: ['Certified', 'Durable', 'Comfort Fit'],
    path: '/services/ppe',
  },
  {
    title: 'Oxygen & SCBA Cylinders',
    description: 'Medical oxygen, SCBA, and breathing air cylinders.',
    long_description: 'Certified cylinders with hydrostatic testing, refill, and maintenance services.',
    imageUrl: '/images/ppes/ppes%20oxygen%20cylender/cylinder_final_red.webp',
    category: 'PPE',
    benefits: ['Certified', 'Refill Service', '24/7 Support'],
    path: '/services/oxygen-cylinders',
  },
  {
    title: 'Fabrication Work',
    description: 'Custom fabrication for fire protection components and site installations.',
    long_description: 'In-house fabrication capabilities for piping, mounts and engineered assemblies.',
    imageUrl: '/images/complainces%20and%20audits/Industrial-buildings-2.jpg',
    category: 'Fabrication',
    benefits: ['Customised', 'Precision', 'On-site Support'],
    path: '/services/fabrication',
  },
  {
    title: 'Fire Safety Training',
    description: 'NFPA-certified fire safety training and employee evacuation drills.',
    long_description: 'Customized programs for your facility to ensure workplace readiness.',
    imageUrl: '/images/fire%20safety%20training/Fire%20Extinguisher%20Training%20Demo%20Open%20Burn.jpg',
    category: 'Training',
    benefits: ['NFPA Certified', 'Custom Programs', 'Expert Led'],
    path: '/services/fire-safety-training',
  },
  {
    title: 'Compliance & Inspection',
    description: 'Full NFPA and code compliance audits.',
    long_description: 'Annual inspections, documentation, and certification to keep your facility up-to-date.',
    imageUrl: '/images/complainces%20and%20audits/fire-and-life-safety-safety-inspection-checklist-sipe.jpg',
    category: 'Inspection',
    benefits: ['Full Audits', 'Documentation', 'Certification'],
    path: '/services/compliance-inspection',
  },
];

const categories = ['All Services', 'Safety', 'Detection', 'Protection', 'PPE', 'Fabrication', 'Training', 'Inspection'];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [filteredServices, setFilteredServices] = useState(servicesData);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All Services') {
      setFilteredServices(servicesData);
    } else {
      setFilteredServices(servicesData.filter(service => service.category === category));
    }
  };

  return (
    <div className="services-page relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
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
            <span className="text-xs sm:text-sm font-semibold text-white/90">Complete Fire Safety Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text">
            We Protect What Matters
          </h1>
          
          <p className="text-lg md:text-2xl font-bold text-blue-200 dark:text-blue-300 max-w-2xl mx-auto mb-4">
            Comprehensive Fire Safety Solutions
          </p>
          
          <p className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto">
            From detection to suppression, from training to compliance—we deliver integrated fire safety solutions tailored to your facility's unique needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 dark:bg-white/5 text-white hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {filteredServices.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 cursor-pointer flex flex-col h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-accent/20">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/services/compliance-inspection.svg'; }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-white/75 dark:text-gray-300 mb-3 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-1 mb-4 flex-grow">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 px-4 rounded-full font-bold text-sm md:text-base bg-gradient-to-r from-accent to-orange-500 text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105 active:scale-95 uppercase tracking-wider">
                  Learn More
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Our experts can design a comprehensive fire safety package tailored to your facility's specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            >
              Get Your Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
