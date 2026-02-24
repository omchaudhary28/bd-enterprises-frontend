import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for navigation

const CustomSoftwareDevelopment = () => {
  return (
    <div className="container mx-auto p-4 py-16">
      <div className="bg-gradient-to-br from-[#1C1C1C] to-[#111111] p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="300">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center" data-aos="fade-down" data-aos-duration="300">Custom Software Development</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 leading-relaxed">
              In today's competitive landscape, off-the-shelf software often falls short of meeting the unique demands of your business. We specialize in creating bespoke software solutions that are tailored to your specific operational needs, helping you to streamline processes, boost productivity, and drive growth.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
            <img src="https://picsum.photos/seed/customsoftwareintro/600/400" alt="Custom Software Development" className="rounded-lg shadow-md w-full transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-vibrant-blue mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-solid fa-lightbulb text-4xl text-vibrant-blue mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Discovery & Planning</h3>
                <p className="text-neutral-700">We start by understanding your vision, challenges, and objectives to lay a solid foundation.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-solid fa-object-ungroup text-4xl text-vibrant-blue mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Design & Prototyping</h3>
                <p className="text-neutral-700">Crafting intuitive user interfaces and experiences, followed by interactive prototypes.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="200" data-aos-duration="300">
              <i className="fa-solid fa-code text-4xl text-vibrant-blue mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Development & Testing</h3>
                <p className="text-neutral-700">Writing clean, efficient code and rigorously testing to ensure quality and performance.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="200" data-aos-duration="300">
              <i className="fa-solid fa-cloud-arrow-up text-4xl text-vibrant-blue mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Deployment & Support</h3>
                <p className="text-neutral-700">Seamless deployment and continuous support to ensure your software runs smoothly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="bg-vibrant-blue text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;

