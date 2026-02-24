import React from 'react';
import { Link } from 'react-router-dom';

const MobileAppDevelopment = () => {
  return (
    <div className="container mx-auto p-4 py-16">
      <div className="bg-gradient-to-br from-[#1C1C1C] to-[#111111] p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="300">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center" data-aos="fade-down" data-aos-duration="300">Mobile Application Development</h1>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Reach your customers on the go with our native and cross-platform mobile applications. We design and develop intuitive and high-performance apps for both iOS and Android, ensuring a consistent and engaging user experience.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
            <img src="https://picsum.photos/seed/mobileappintro/600/400" alt="Mobile Application Development" className="rounded-lg shadow-md w-full transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-vibrant-orange mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Our Mobile Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-brands fa-apple text-4xl text-vibrant-orange mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">iOS Development</h3>
                <p className="text-neutral-700">Crafting elegant and powerful applications for Apple's ecosystem.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-brands fa-android text-4xl text-vibrant-orange mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Android Development</h3>
                <p className="text-neutral-700">Building feature-rich and performant apps for the Android platform.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="200" data-aos-duration="300">
              <i className="fa-solid fa-mobile-screen-button text-4xl text-vibrant-orange mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Cross-Platform Solutions</h3>
                <p className="text-neutral-700">Efficient development for both iOS and Android using React Native or Flutter.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="200" data-aos-duration="300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">UI/UX Design</h3>
                <p className="text-neutral-700">Creating intuitive and beautiful user interfaces for an exceptional app experience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="bg-vibrant-orange text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;

