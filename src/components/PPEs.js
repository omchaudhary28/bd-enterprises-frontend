import React from 'react';
import { Link } from 'react-router-dom';

const ppeCategories = [
  {
    title: 'Head Protection',
    subtitle: 'Helmets & Hard Hats',
    description: 'Shields from impact, falling objects, and overhead hazards. Essential for construction, manufacturing, and industrial workplaces.',
    imageUrl: 'https://images.unsplash.com/photo-1516169104891-35b1dd1ca893?w=600&h=400&fit=crop',
    path: '/services/ppe/head-protection',
    emoji: '🛡️',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Eye & Face Protection',
    subtitle: 'Goggles & Shields',
    description: 'Guard against chemical splashes, welding sparks, and flying debris. Critical for labs, welding, and chemical handling.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173d7f6f0?w=600&h=400&fit=crop',
    path: '/services/ppe/eye-face-protection',
    emoji: '👓',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Hearing Protection',
    subtitle: 'Earplugs & Earmuffs',
    description: 'Prevents noise-induced hearing loss in loud industrial environments. ANSI/OSHA compliant protection.',
    imageUrl: 'https://images.unsplash.com/photo-1484632341272-339079fa3142?w=600&h=400&fit=crop',
    path: '/services/ppe/hearing-protection',
    emoji: '🎧',
    color: 'from-green-400 to-teal-500',
  },
  {
    title: 'Respiratory Protection',
    subtitle: 'Masks & Respirators',
    description: 'Protects from dust, fumes, gases, and hazardous particles. NIOSH-certified for maximum safety.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5f00206dd?w=600&h=400&fit=crop',
    path: '/services/ppe/respiratory-protection',
    emoji: '😷',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Hand Protection',
    subtitle: 'Gloves',
    description: 'Specialized gloves for chemical handling, thermal protection, and mechanical safety. Customized for different hazards.',
    imageUrl: 'https://images.unsplash.com/photo-1576158547314-71207b676bfc?w=600&h=400&fit=crop',
    path: '/services/ppe/hand-protection',
    emoji: '🧤',
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Body Protection',
    subtitle: 'Coveralls & Vests',
    description: 'Full-body coverage from chemical exposure, thermal hazards, and contamination. Durable and compliant.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    path: '/services/ppe/body-protection',
    emoji: '🧥',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    title: 'Foot Protection',
    subtitle: 'Safety Shoes & Boots',
    description: 'Steel-toed and protective footwear for impact and puncture resistance. ASTM certified for workplace safety.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop',
    path: '/services/ppe/foot-protection',
    emoji: '👢',
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'BASCA Cylinders',
    subtitle: 'Fire Suppressant Cylinders',
    description: 'Advanced fire suppression technology for specialized environments. Clean agent systems for sensitive equipment protection.',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695aeb952?w=600&h=400&fit=crop',
    path: '/services/ppe/basca-cylinders',
    emoji: '🔴',
    color: 'from-red-400 to-red-600',
  },
];

const PPEs = () => {
  return (
    <div className="ppe-page relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
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
            <span className="text-xs sm:text-sm font-semibold text-white/90">Complete PPE Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text">
            Personal Protective Equipment
          </h1>
          
          <p className="text-lg md:text-2xl font-bold text-blue-200 dark:text-blue-300 max-w-2xl mx-auto mb-4">
            Comprehensive PPE for Every Workplace Hazard
          </p>
          
          <p className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto">
            From head to toe protection, we provide certified, durable PPE solutions with expert guidance on proper usage, maintenance, and compliance.
          </p>
        </div>

        {/* Quick Category Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 mb-16 md:mb-20">
          {ppeCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 active:scale-95 md:hover:scale-110 flex h-40 sm:h-48"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-black/50 to-black/30 z-10"></div>
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white text-center px-3 py-4">
                <div className="text-3xl md:text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{category.emoji}</div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold leading-tight line-clamp-2">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Main PPE Cards Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 glow-text">Featured PPE Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {ppeCategories.map((category, index) => (
            <Link
              to={category.path}
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 cursor-pointer flex flex-col h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-accent/20">
                <img 
                  src={category.imageUrl} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                {/* Emoji & Icon */}
                <div className="text-4xl md:text-5xl mb-3">{category.emoji}</div>

                {/* Title & Subtitle */}
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {category.title}
                </h3>
                <p className="text-xs md:text-sm font-bold text-accent/90 mb-3 uppercase tracking-wider">
                  {category.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-white/75 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                  {category.description}
                </p>

                {/* CTA Button */}
                <button className="w-full py-3 px-4 rounded-full font-bold text-sm md:text-base bg-gradient-to-r from-accent to-orange-500 text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105 active:scale-95 uppercase tracking-wider">
                  View Details
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Why Choose PPE Section */}
        <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 glow-text">Why BD Enterprises PPE?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: '✓', title: 'Certified', desc: 'ANSI/OSHA approved' },
              { icon: '🛡️', title: 'Durable', desc: 'Premium quality materials' },
              { icon: '📋', title: 'Compliant', desc: 'Full safety standards' },
              { icon: '🚀', title: 'Expert Support', desc: '25+ years experience' }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="text-4xl md:text-5xl mb-3">
                  {idx === 0 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/></svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/></svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.63-3.54-3.63 4.71h15.31L13.96 12.29z" fill="currentColor"/></svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.40251532,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16751269 C3.34915502,0.9104153 2.40251532,1.02620725 1.77946707,1.4974994 C0.994623095,2.13788266 0.837654326,3.08622357 1.15159189,3.93456271 L3.03521743,10.3755556 C3.03521743,10.5326469 3.19218622,10.6899617 3.50612381,10.6899617 L16.6915026,11.4754487 C16.6915026,11.4754487 17.1624089,11.4754487 17.1624089,11.0042073 L17.1624089,12.6315722 C17.1624089,12.6315722 17.1624089,12.4744748 16.6915026,12.4744748 Z" fill="currentColor"/></svg>
                  )}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm md:text-base text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Protect Your Team?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Get expert guidance on selecting the right PPE for your workplace.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPEs;
