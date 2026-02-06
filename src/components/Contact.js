import React, { useState, useEffect, useContext, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import { API_URL } from '../config/api';
import AOS from 'aos';

const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceType: '',
    message: '',
    preferredMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [mainLocation, setMainLocation] = useState(null);

  const parseJsonResponse = useCallback(async (response) => {
    const contentType = response.headers.get('content-type') || '';
    const responseText = await response.text();

    if (!contentType.includes('application/json')) {
      throw new Error(`Expected JSON but received ${contentType || 'unknown content type'}`);
    }

    try {
      return JSON.parse(responseText);
    } catch (error) {
      throw new Error('Invalid JSON response from API');
    }
  }, []);

  const fetchContactData = useCallback(async () => {
    try {
      const [infoRes, socialRes, locRes] = await Promise.all([
        fetch(`${API_URL}/company-info`, {
          headers: { Accept: 'application/json' }
        }),
        fetch(`${API_URL}/social-media`, {
          headers: { Accept: 'application/json' }
        }),
        fetch(`${API_URL}/locations/main`, {
          headers: { Accept: 'application/json' }
        })
      ]);

      if (infoRes.ok) {
        const infoData = await parseJsonResponse(infoRes);
        setCompanyInfo(infoData.data || []);
      }

      if (socialRes.ok) {
        const socialData = await parseJsonResponse(socialRes);
        setSocialMedia(socialData.data || []);
      }

      if (locRes.ok) {
        const locData = await parseJsonResponse(locRes);
        setMainLocation(locData.data);
      }
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  }, [parseJsonResponse]);

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    fetchContactData();
  }, [fetchContactData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await parseJsonResponse(response);

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          serviceType: '',
          message: '',
          preferredMethod: 'email'
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Contact service is currently unavailable. Please try again later or use phone/email below.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPhoneNumber = () => {
    return companyInfo.find(info => info.contact_type === 'phone')?.value || '7499953708';
  };

  const getEmail = () => {
    return companyInfo.find(info => info.contact_type === 'email')?.value || 'omchaudhary2111@gmail.com';
  };

  const getWhatsApp = () => {
    return companyInfo.find(info => info.contact_type === 'whatsapp')?.value || '7499953708';
  };

  const getAddress = () => {
    return companyInfo.find(info => info.contact_type === 'address')?.value || '123 Safety Avenue, Fire District, FD 12345';
  };

  // Automated message templates based on contact method
  const getAutomatedMessage = (method) => {
    switch(method) {
      case 'email':
        return `Hello BD Enterprises,\n\nI am interested in learning more about your fire safety solutions. My company is [Your Company Name] and we are looking for [Service You Are Looking For e.g., fire extinguisher systems].\n\nPlease get back to me at your earliest convenience.\n\nThank you!`;
      case 'phone':
        return `Call: ${getPhoneNumber()} (Mon-Fri, 9AM-6PM EST)`;
      case 'whatsapp':
        return `Hello BD Enterprises, I am interested in your fire safety services. I would like to know more about [Service You Are Looking For e.g., fire extinguisher systems].`;
      default:
        return '';
    }
  };

  const handleContactMethodClick = (method) => {
    if (method === 'email') {
      window.location.href = `mailto:${getEmail()}?subject=Fire Safety Inquiry&body=${encodeURIComponent(getAutomatedMessage('email'))}`;
    } else if (method === 'phone') {
      window.location.href = `tel:${getPhoneNumber().replace(/\D/g, '')}`;
    } else if (method === 'whatsapp') {
      const message = encodeURIComponent(getAutomatedMessage('whatsapp'));
      window.location.href = `https://wa.me/${getWhatsApp().replace(/\D/g, '')}?text=${message}`;
    }
  };

  const services = [
    'Fire Extinguisher Systems',
    'Fire Alarm & Detection',
    'Sprinkler Systems',
    'Emergency Lighting',
    'Fire Safety Training',
    'Compliance Inspection'
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-primary via-primary to-secondary dark:from-slate-900 dark:to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-slideDown">
            Get In Touch With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto animate-slideDown">
            Have questions about our fire safety solutions? We're here to help. Contact us today and let's discuss how we can protect what matters most to you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div data-aos="fadeInLeft">
            <div className={`contact-form-card rounded-2xl p-6 md:p-8 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl`}>
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary dark:text-white">Send us a Message</h2>

              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="form-control w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="form-control w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-control w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      placeholder="7499953708"
                    />
                  </div>
                </div>

                {/* Company and Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="form-control w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="form-control w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="form-control w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                    placeholder="Tell us about your fire safety needs..."
                  ></textarea>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {['email', 'phone', 'whatsapp'].map(method => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredMethod"
                          value={method}
                          checked={formData.preferredMethod === method}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-accent form-control-radio"
                        />
                        <span className="text-gray-700 dark:text-gray-300 capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div data-aos="fadeInRight">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary dark:text-white">
                Contact Options
              </h2>

              <div className="flex flex-wrap -m-2">

                {/* Phone */}
                <div className="w-full sm:w-1/2 p-2">
                  <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group h-full flex flex-col`}
                    onClick={() => handleContactMethodClick('phone')}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-xl">📞</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary dark:text-accent">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Available Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <a href={`tel:${getPhoneNumber().replace(/\D/g, '')}`} onClick={(e) => e.stopPropagation()} className="text-accent hover:text-secondary font-semibold transition-colors text-lg break-all">
                        {getPhoneNumber()}
                      </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 group-hover:text-accent transition-colors">
                      Click to call directly
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="w-full sm:w-1/2 p-2">
                <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group h-full flex flex-col`}
                  onClick={() => handleContactMethodClick('email')}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary dark:text-accent">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <a href={`mailto:${getEmail()}`} onClick={(e) => e.stopPropagation()} className="text-accent hover:text-secondary font-semibold transition-colors break-all text-lg">
                        {getEmail()}
                      </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 group-hover:text-accent transition-colors">
                      Click to open email with automated message
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="w-full sm:w-1/2 p-2">
                <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group h-full flex flex-col`}
                  onClick={() => handleContactMethodClick('whatsapp')}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-xl">💬</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary dark:text-accent">Message on WhatsApp</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Instant messaging available 24/7</p>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <a href={`https://wa.me/${getWhatsApp().replace(/\D/g, '')}?text=${encodeURIComponent(getAutomatedMessage('whatsapp'))}`}
                        target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-accent hover:text-secondary font-semibold transition-colors text-lg break-all">
                        {getWhatsApp()}
                      </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 group-hover:text-accent transition-colors">
                      Click to open WhatsApp with pre-filled message
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="w-full sm:w-1/2 p-2">
                  <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg h-full flex flex-col`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary dark:text-accent">Visit Us</h3>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-600 dark:text-gray-300">
                        {getAddress()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {socialMedia.length > 0 && (
              <div data-aos="fadeInRight" data-aos-delay="200">
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">Follow Us On Social Media</h3>
                <div className="flex gap-4 flex-wrap">
                  {socialMedia.map(social => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl"
                      aria-label={social.platform}
                      title={social.platform}
                    >
                      <span className="text-xl">
                        {social.platform === 'facebook' && '𝕗'}
                        {social.platform === 'twitter' && '𝕏'}
                        {social.platform === 'linkedin' && '⚙'}
                        {social.platform === 'instagram' && '📷'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        {mainLocation && (
          <div data-aos="fadeInUp" className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary dark:text-white">
              Our Location
            </h2>
            <div className={`rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'border border-slate-700' : ''}`} style={{ height: '500px' }}>
              <iframe
                title="BD Enterprises Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(mainLocation.address || 'BD Enterprises')}&zoom=15`}
              ></iframe>
            </div>
            <div className={`rounded-2xl p-6 md:p-8 mt-6 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
              <h3 className="text-xl font-bold mb-3 text-primary dark:text-accent">{mainLocation.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{mainLocation.address}</p>
              {mainLocation.city && (
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {mainLocation.city}, {mainLocation.state} {mainLocation.zip_code}
                </p>
              )}
              <p className="text-gray-700 dark:text-gray-300">Phone: {getPhoneNumber()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
