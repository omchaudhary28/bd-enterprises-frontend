import React, { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../config/api';
import AOS from 'aos';
import Map from './Map';

const Contact = () => {
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
  const [companyInfo, setCompanyInfo] = useState(null);

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
      const infoRes = await fetch(`${API_URL}/company-info`, {
        headers: { Accept: 'application/json' }
      });

      if (infoRes.ok) {
        const infoData = await parseJsonResponse(infoRes);
        // API may return { data: [...] } or an object directly — normalize both
        setCompanyInfo(infoData.data ?? infoData ?? null);
      }
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  }, [parseJsonResponse]);

  useEffect(() => {
    // Fetch contact data and refresh AOS animations instead of re-initializing
    fetchContactData();
    // When this component mounts/updates, refresh AOS to pick up dynamic elements
    if (AOS && typeof AOS.refresh === 'function') {
      AOS.refresh();
    }
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

  const findInCompanyInfo = (type) => {
    if (!companyInfo) return null;
    // If API returns an array of { contact_type, value }
    if (Array.isArray(companyInfo)) {
      const item = companyInfo.find(i => i && (i.contact_type === type || (i.type && i.type === type)));
      return item?.value ?? item?.val ?? null;
    }

    // If API returns an object with named keys or a single record
    if (typeof companyInfo === 'object') {
      // direct fields like { phone: '...', email: '...' }
      if (companyInfo[type]) return companyInfo[type];

      // or nested fields
      const phoneKey = Object.keys(companyInfo || []).find(k => k.toLowerCase().includes(type));
      if (phoneKey) return companyInfo[phoneKey];

      // or single record format { contact_type: 'phone', value: '...' }
      if (companyInfo.contact_type && companyInfo.contact_type === type) return companyInfo.value || null;
    }

    return null;
  };

  const getPhoneNumber = () => {
    const phone = findInCompanyInfo('phone') || findInCompanyInfo('tel');
    return (typeof phone === 'string' && phone.trim()) ? phone : '9898046269';
  };

  const getEmail = () => {
    const email = findInCompanyInfo('email');
    return (typeof email === 'string' && email.trim()) ? email : 'bdenterprises99@yahoo.co.in';
  };

  const getWhatsApp = () => {
    const whatsapp = findInCompanyInfo('whatsapp');
    return (typeof whatsapp === 'string' && whatsapp.trim()) ? whatsapp : getPhoneNumber();
  };

  // Automated message templates based on contact method
  const getAutomatedMessage = (method) => {
    switch(method) {
      case 'email':
        return `Hello B. D. Enterprises,\n\nI am interested in learning more about your fire safety solutions. My company is [Your Company Name] and we are looking for [Service You Are Looking For e.g., fire extinguisher systems].\n\nPlease get back to me at your earliest convenience.\n\nThank you!`;
      case 'phone':
        return `Call: ${getPhoneNumber()} (Mon-Fri, 9AM-6PM IST)`;
      case 'whatsapp':
        return `Hello B. D. Enterprises, I am interested in your fire safety services. I would like to know more about [Service You Are Looking For e.g., fire extinguisher systems].`;
      default:
        return '';
    }
  };

  // Navigation is now handled by proper <a> tags only - no div click handlers

  const services = [
    'Fire Extinguisher Systems',
    'Fire Alarm & Detection',
    'Sprinkler Systems',
    'Emergency Lighting',
    'Fire Safety Training',
    'Compliance Inspection',
    'Oxygen & SCBA Cylinders',
    'Fabrication Services',
    'PPE & Safety Equipment'
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-8 dark:opacity-3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center" data-aos="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">Get In Touch With Us</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white glow-text">
              Let's Protect Your Facility
            </h1>
            
            <p className="text-lg md:text-2xl font-bold text-blue-200 dark:text-blue-300 max-w-3xl mx-auto mb-4">
              Expert Fire Safety Solutions Within Reach
            </p>
            
            <p className="text-base md:text-lg text-white/80 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about our fire safety solutions? We're here to help. Contact us today and let's discuss how we can protect what matters most to you.
            </p>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <Map height={400} />
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form - LEFT COLUMN */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 glow-text">Send us a Message</h2>
                <p className="text-white/80 mb-6">We'll get back to you within 24 hours</p>

                {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-white/90 mb-2 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-white/90 mb-2 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-white/90 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-white/90 mb-2 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="9898046269"
                    />
                  </div>
                </div>

                {/* Company and Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-white/90 mb-2 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-white/90 mb-2 uppercase tracking-wider">
                      Service Interest
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-slate-800">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service} className="bg-slate-800">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs md:text-sm font-bold text-white/90 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your fire safety needs..."
                  ></textarea>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs md:text-sm font-bold text-white/90 mb-3 uppercase tracking-wider">
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
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-white/90 capitalize text-sm">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 mt-6 bg-gradient-to-r from-accent to-orange-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

            {/* Contact Info & Methods - RIGHT COLUMN */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6 glow-text">Contact Methods</h2>

              {/* Key Contacts */}
              <div className="mb-6 p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                <h3 className="font-bold text-lg text-white mb-3">Key Contacts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-white/70 uppercase font-semibold">Owner</p>
                    <p className="text-sm font-bold text-accent"><a href={`tel:${getPhoneNumber().replace(/\D/g, '')}`}>{'Pankaj Sharma'} • {getPhoneNumber()}</a></p>
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase font-semibold">Business Contact</p>
                    <p className="text-sm font-bold text-accent"><a href="tel:9173287960">9173287960</a></p>
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase font-semibold">Project Engineer</p>
                    <p className="text-sm font-bold text-accent"><a href="tel:9687387960">Satyajeet Chaudhary • 9687387960</a></p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group mb-6 p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 hover:border-accent/60 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-white">Call Us</h3>
                  <p className="text-white/80 text-sm">Mon-Fri, 9AM-6PM IST</p>
                </div>
                <a href={`tel:${getPhoneNumber().replace(/\D/g, '')}`} className="text-accent hover:text-orange-300 font-bold transition-colors text-lg break-all block">
                  {getPhoneNumber()}
                </a>
              </div>

              {/* Email */}
              <div className="group mb-6 p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 hover:border-accent/60 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-white">Email Us</h3>
                  <p className="text-white/80 text-sm">Response within 24 hours</p>
                </div>
                <a href={`mailto:${getEmail()}`} className="text-accent hover:text-orange-300 font-bold transition-colors break-all text-lg block">
                  {getEmail()}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="group p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 hover:border-accent/60 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-white">WhatsApp</h3>
                  <p className="text-white/80 text-sm">Available 24/7</p>
                </div>
                <a href={`https://wa.me/${getWhatsApp().replace(/\D/g, '')}?text=${encodeURIComponent(getAutomatedMessage('whatsapp'))}`}
                  target="_blank" rel="noopener noreferrer" className="text-accent hover:text-orange-300 font-bold transition-colors text-lg break-all block">
                  {getWhatsApp()}
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/></svg>
                  <span className="text-white/80 text-sm">Expert consultation from industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/></svg>
                  <span className="text-white/80 text-sm">Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/></svg>
                  <span className="text-white/80 text-sm">25+ years of fire safety experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/></svg>
                  <span className="text-white/80 text-sm">NFPA certified and compliant solutions</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        <section className="py-12 md:py-16 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Find Our Location</h2>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <Map height={450} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
