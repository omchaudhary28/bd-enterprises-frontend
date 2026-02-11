import React from 'react';

const About = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-white/90">About B. D. Enterprises</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">Industrial Safety Products & Fire Protection Systems</h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Founded in 2007, B. D. Enterprises is a professional supplier and integrator of industrial safety products and fire protection systems. We operate under a robust quality management system certified to ISO 9001:2015 and deliver practical, compliant solutions across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Our Expertise</h3>
            <p className="text-white/80">Design, supply, installation and maintenance of PPE, fire hydrant and sprinkler systems, fire alarm and smoke detection systems, and bespoke fabrication work for industrial applications.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Quality & Compliance</h3>
            <p className="text-white/80">We adhere to national and international safety standards and maintain documentation, regular inspections, and training to ensure ongoing compliance and performance.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Authorized Brands</h3>
            <p className="text-white/80">Authorized distributor for: Midas, Jama, Techtion, Kanex, Valpro, Ninja, Spectrum, Honeywell, and Aag.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>Industrial Safety Products (PPE) — helmets, gloves, footwear, respiratory and hearing protection</li>
            <li>Fire Protection Systems — design and installation of hydrant, sprinkler and suppression systems</li>
            <li>Fire Hydrant Systems — supply, installation and maintenance</li>
            <li>Fire Alarm & Smoke Detection Systems — addressable and conventional systems with monitoring options</li>
            <li>Fabrication Work — custom shop fabrication and on-site installation services</li>
            <li>Inspection, testing and preventive maintenance programs</li>
            <li>Fire safety training and compliance audits</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-3">Our Commitment</h3>
          <p className="text-white/80">B. D. Enterprises combines technical expertise, certified processes and trusted partnerships to deliver durable safety solutions that protect people, property and business continuity. We focus on measurable outcomes, timely delivery and clear documentation for every project.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
