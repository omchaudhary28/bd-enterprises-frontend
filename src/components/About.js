import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import AOS from 'aos';
import Map from './Map';
import AchievementTrail from './AchievementTrail';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  '/images/Hero%20Images/DEC-ENG-media_215.jpg',
  '/images/fire%20extinguisher/CO2-Fire-suppression-system.jpg',
  '/images/sprinkler%20system/Fire_sprinkler_roof_mount_side_view.jpg',
  '/images/ppes/Head-Protection.webp',
  '/images/Fire%20Alarm%20Systems/618cdfa3202b1d251c484e97_How%20Do%20Fire%20Alarms%20Work%20in%20Commercial%20Buildings.jpg',
  '/images/fire%20safety%20training/Fire%20Extinguisher%20Training%20Demo%20Open%20Burn.jpg',
  '/images/ppes/ppes%20oxygen%20cylender/cylinder_final_red.webp',
  '/images/complainces%20and%20audits/Industrial-buildings-2.jpg',
  '/images/emergency%20lights/3mDZADxjMAulmzrzYOOn9xHZSn4QVEwl41FESCKhECk7GlvfznL8xpQrBjj6YZvX-eHOBJA_QWPNVw_wkv0lI_IHJipVPdklUgWHd6NXeQw.jpg',
];

const growthData = [
  { year: '2019', clients: 3200, label: 'Clients Served' },
  { year: '2020', clients: 3800, label: 'Clients Served' },
  { year: '2021', clients: 4100, label: 'Clients Served' },
  { year: '2022', clients: 4300, label: 'Clients Served' },
  { year: '2023', clients: 4500, label: 'Clients Served' },
  { year: '2024', clients: 4800, label: 'Clients Served' },
  { year: '2025', clients: 5000, label: 'Clients Served' },
];

const AnimatedBar = ({ value, maxValue, label, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const percentage = Math.min((value / maxValue) * 100, 100);
  return (
    <motion.div ref={ref} className="flex flex-col items-center gap-2 flex-1 min-w-0">
      <div className="w-full h-32 md:h-40 bg-white/5 rounded-lg overflow-hidden flex items-end">
        <motion.div
          className="w-full bg-gradient-to-t from-accent to-[#F77F00] rounded-t"
          initial={{ height: 0 }}
          animate={isInView ? { height: `${percentage}%` } : { height: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
      <span className="text-xs font-bold text-white/90">{value.toLocaleString()}</span>
      <span className="text-xs text-white/70">{label}</span>
    </motion.div>
  );
};

const About = () => {
  const maxClients = Math.max(...growthData.map((d) => d.clients));

  useEffect(() => {
    if (AOS && typeof AOS.refresh === 'function') AOS.refresh();
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#1C1C1C] to-[#111111] min-h-screen about-page-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(108,160,184,0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent opacity-12 dark:opacity-8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#D62828] opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-white/90">About B. D. Enterprises</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 glow-text">Industrial Safety Products & Fire Protection Systems</h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Founded in 2006, B. D. Enterprises is a professional supplier and integrator of industrial safety products and fire protection systems. We operate under a robust quality management system certified to ISO 9001:2015 and deliver practical, compliant solutions across industries.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24" data-aos="fade-up">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Our Expertise</h3>
            <p className="text-white/80 text-sm">Design, supply, installation and maintenance of PPE, fire hydrant and sprinkler systems, fire alarm and smoke detection systems, and bespoke fabrication work for industrial applications.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Quality & Compliance</h3>
            <p className="text-white/80 text-sm">We adhere to national and international safety standards and maintain documentation, regular inspections, and training to ensure ongoing compliance and performance.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Authorized Brands</h3>
            <p className="text-white/80 text-sm">Authorized distributor for: Midas, Jama, Techtion, Kanex, Valpro, Ninja, Spectrum, Honeywell, and Aag.</p>
          </div>
        </div>

        {/* Achievement Trail */}
        <AchievementTrail />

        {/* Animated Business Growth Graph */}
        <section className="mb-16 md:mb-24" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 glow-text">Our Growth Journey</h2>
          <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">Steady growth in clients served year over year</p>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-10">
            <div className="flex flex-wrap justify-between gap-4 md:gap-6 items-end">
              {growthData.map((d, i) => (
                <AnimatedBar key={d.year} value={d.clients} maxValue={maxClients} label={d.year} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16 md:mb-24" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 glow-text">Gallery</h2>
          <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">A glimpse of our work and products</p>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{ prevEl: '.gallery-prev', nextEl: '.gallery-next' }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="!pb-12 rounded-2xl overflow-hidden"
            >
              {galleryImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative rounded-2xl overflow-hidden h-56 md:h-72 bg-white/5 border border-white/20">
                    <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button type="button" className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 text-white transition-colors" aria-label="Previous slide">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button type="button" className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent/20 text-white transition-colors" aria-label="Next slide">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </section>

        {/* Our Services */}
        <div className="mb-16 md:mb-24" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
            <li className="flex items-start gap-2"><span className="text-accent">•</span> Industrial Safety Products (PPE) — helmets, gloves, footwear, respiratory and hearing protection</li>
            <li className="flex items-start gap-2"><span className="text-accent">•</span> Fire Protection Systems — design and installation of hydrant, sprinkler and suppression systems</li>
            <li className="flex items-start gap-2"><span className="text-accent">•</span> Fire Hydrant Systems — supply, installation and maintenance</li>
            <li className="flex items-start gap-2"><span className="text-accent">•</span> Fire Alarm & Smoke Detection Systems — addressable and conventional systems with monitoring</li>
            <li className="flex items-start gap-2"><span className="text-accent">•</span> Fabrication Work — custom shop fabrication and on-site installation services</li>
            <li className="flex items-start gap-2"><span className="text-accent">•</span> Inspection, testing and preventive maintenance programs</li>
            <li className="flex items-start gap-2"><span className="text-accent">•</span> Fire safety training and compliance audits</li>
          </ul>
        </div>

        {/* Contact Info & Map - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24" data-aos="fade-up">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 glow-text">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <a href="tel:9898046269" className="text-accent hover:underline">9898046269</a>
                  <p className="text-sm text-white/70">Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold text-white">Email</p>
                  <a href="mailto:bdenterprises99@yahoo.co.in" className="text-accent hover:underline break-all">bdenterprises99@yahoo.co.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p className="text-white/80">B. D. Enterprises — Fire Safety & Industrial PPE</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full hover:shadow-lg transition-all">
              Get In Touch
            </Link>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 glow-text">Find Our Location</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Map height={320} />
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8" data-aos="fade-up">
          <h3 className="text-xl font-bold text-white mb-3">Our Commitment</h3>
          <p className="text-white/80">B. D. Enterprises combines technical expertise, certified processes and trusted partnerships to deliver durable safety solutions that protect people, property and business continuity. We focus on measurable outcomes, timely delivery and clear documentation for every project.</p>
        </div>
      </div>
    </div>
  );
};

export default About;


