import React from 'react';
import { Link } from 'react-router-dom';

const WebAppDevelopment = () => {
  return (
    <div className="container mx-auto p-4 py-16">
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center" data-aos="fade-down" data-aos-duration="800">Web Application Development</h1>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="text-lg text-neutral-700 leading-relaxed">
              We build powerful, modern, and responsive web applications that provide a seamless experience across all devices. Our team leverages the latest front-end and back-end technologies to create applications that are not only visually stunning but also highly functional and secure.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900">
            <img src="https://picsum.photos/seed/webappintro/600/400" alt="Web Application Development" className="rounded-lg shadow-md w-full transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-vibrant-green mb-5 text-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
              <i className="fa-solid fa-code-branch text-4xl text-vibrant-green mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Frontend Frameworks</h3>
                <p className="text-neutral-700">Expertise in React, Angular, and Vue.js for dynamic user interfaces.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Backend Technologies</h3>
                <p className="text-neutral-700">Robust server-side development with Node.js, Python (Django/Flask), and Java (Spring).</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
              <i className="fa-solid fa-database text-4xl text-vibrant-green mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Database Solutions</h3>
                <p className="text-neutral-700">Proficiency in SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Cassandra) databases.</p>
              </div>
            </div>
            <div className="flex items-start" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Cloud & DevOps</h3>
                <p className="text-neutral-700">Leveraging AWS, Azure, GCP for scalable deployments and CI/CD pipelines.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact" className="bg-vibrant-green text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
            Start Your Web Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;
