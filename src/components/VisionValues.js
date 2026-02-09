import React from 'react';

const VisionValues = () => {
  const visionItems = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'Protect lives and property through innovative, reliable fire safety solutions and expert guidance.',
      details: 'We empower organizations to operate safely and confidently.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '✨',
      title: 'Our Vision',
      description: 'To be the most trusted fire safety partner, setting industry standards for excellence and innovation.',
      details: 'Leading the future of fire protection.',
      color: 'from-accent to-orange-500'
    },
    {
      icon: '🏆',
      title: 'Our Commitment',
      description: '25+ years of expertise delivering certified solutions with unmatched customer service and support.',
      details: 'Excellence in every interaction.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '⚡',
      title: 'Our Innovation',
      description: 'Continuously advancing fire safety technology with cutting-edge systems and smart monitoring solutions.',
      details: 'Driving progress in safety.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const values = [
    { title: 'Reliability', desc: 'Always there when you need us. 24/7 support. Rapid response.' },
    { title: 'Excellence', desc: 'Certified professionals. Quality equipment. Best practices.' },
    { title: 'Innovation', desc: 'Smart systems. Modern technology. Future-ready solutions.' },
    { title: 'Partnership', desc: 'Your success is our success. Collaborative approach. Long-term support.' },
    { title: 'Compliance', desc: 'NFPA standards. Code compliance. Full certification.' },
    { title: 'Integrity', desc: 'Transparent practices. Honest assessments. Ethical solutions.' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black py-16 md:py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500 opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute inset-0 opacity-5 bg-gradient-to-t from-white to-transparent" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-white/90">Who We Are</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Built on Trust & Excellence
          </h2>
          
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
            Our foundation of values guides every decision and every interaction
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {visionItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-2xl blur group-hover:blur-lg transition-all duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 round-2xl p-8 md:p-10 h-full hover:border-white/30 transition-all duration-300">
                <div className={`text-5xl md:text-6xl mb-4 transition-transform duration-300 group-hover:scale-125`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-base md:text-lg text-white/75 mb-3 leading-relaxed">
                  {item.description}
                </p>
                
                <div className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.details}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Grid */}
        <div className="mb-16 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16" data-aos="fade-down">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold text-white">✓</span>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionValues;
