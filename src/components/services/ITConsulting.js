import React from 'react';
import { Link } from 'react-router-dom';

const ITConsulting = () => {
  return (
    <div className="container mx-auto p-4 py-16">
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="300">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center" data-aos="fade-down" data-aos-duration="300">IT Consulting</h1>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Navigate the complexities of the digital landscape with our expert IT consulting services. We provide strategic guidance and technical expertise to help you make informed decisions, optimize your IT infrastructure, and align your technology with your business objectives.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
            <img src="https://picsum.photos/seed/itconsultingintro/600/400" alt="IT Consulting" className="rounded-lg shadow-md w-full transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-vibrant-red mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">How We Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-solid fa-lightbulb text-4xl text-vibrant-red mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Strategic Planning</h3>
                <p className="text-neutral-700">Develop a clear IT roadmap that supports your long-term business goals.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-solid fa-shield-alt text-4xl text-vibrant-red mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Security Assessment</h3>
                <p className="text-neutral-700">Identify vulnerabilities and implement robust security measures to protect your assets.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="200" data-aos-duration="300">
              <i className="fa-solid fa-cloud-arrow-up text-4xl text-vibrant-red mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Cloud Adoption</h3>
                <p className="text-neutral-700">Guidance on migrating to and optimizing your operations in the cloud.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="200" data-aos-duration="300">
              <i className="fa-solid fa-code-branch text-4xl text-vibrant-red mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Digital Transformation</h3>
                <p className="text-neutral-700">Leverage new technologies to innovate processes and enhance customer experiences.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
          <Link to="/contact" className="inline-block bg-vibrant-red text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ITConsulting;
