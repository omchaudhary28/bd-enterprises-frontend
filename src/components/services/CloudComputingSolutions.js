import React from 'react';
import { Link } from 'react-router-dom';

const CloudComputingSolutions = () => {
  return (
    <div className="container mx-auto p-4 py-16">
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="300">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center" data-aos="fade-down" data-aos-duration="300">Cloud Computing Solutions</h1>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Harness the power and flexibility of the cloud to transform your business. We offer a comprehensive suite of cloud services to help you build, deploy, and manage applications and infrastructure with greater speed and efficiency.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
            <img src="https://picsum.photos/seed/cloudintro/600/400" alt="Cloud Computing Solutions" className="rounded-lg shadow-md w-full transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-vibrant-purple mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="300">Our Cloud Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-solid fa-cloud-arrow-up text-4xl text-vibrant-purple mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Cloud Migration</h3>
                <p className="text-neutral-700">Seamlessly move your existing infrastructure and applications to the cloud.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="100" data-aos-duration="300">
              <i className="fa-solid fa-server text-4xl text-vibrant-purple mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Infrastructure as Code (IaC)</h3>
                <p className="text-neutral-700">Automate infrastructure provisioning and management for consistency and speed.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="200" data-aos-duration="300">
              <i className="fa-solid fa-shield-alt text-4xl text-vibrant-purple mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Cloud Security</h3>
                <p className="text-neutral-700">Implement robust security measures to protect your data and applications in the cloud.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="200" data-aos-duration="300">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Cost Optimization</h3>
                <p className="text-neutral-700">Strategically manage cloud resources to reduce expenditure without compromising performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="bg-vibrant-purple text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CloudComputingSolutions;
