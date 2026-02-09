import React, { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../config/api';
import AOS from 'aos';

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
        return `Hello BD Enterprises,\n\nI am interested in learning more about your fire safety solutions. My company is [Your Company Name] and we are looking for [Service You Are Looking For e.g., fire extinguisher systems].\n\nPlease get back to me at your earliest convenience.\n\nThank you!`;
      case 'phone':
        return `Call: ${getPhoneNumber()} (Mon-Fri, 9AM-6PM EST)`;
      case 'whatsapp':
        return `Hello BD Enterprises, I am interested in your fire safety services. I would like to know more about [Service You Are Looking For e.g., fire extinguisher systems].`;
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
    'Compliance Inspection'
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

        {/* Google Maps Embed (uses REACT_APP_GOOGLE_MAP_IFRAME env var) */}
        <section className="mb-12 md:mb-16" data-aos="fade-up">
          <div className="max-w-4xl mx-auto px-4">
                {process.env.REACT_APP_GOOGLE_MAP_IFRAME ? (
                  <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: (function () {
                        try {
                          // Ensure iframe has lazy loading and consistent sizing/rounded corners
                          const raw = process.env.REACT_APP_GOOGLE_MAP_IFRAME;
                          return raw.replace(/<iframe(.*?)>/i, (match, attrs) => {
                            // add loading, style height, and responsive width if not present
                            let s = attrs;
                            if (!/loading=/i.test(s)) s += ' loading="lazy"';
                            if (!/style=/i.test(s)) s += ' style="width:100%;height:350px;border:0;border-radius:12px;"';
                            else s = s.replace(/style=(['"])(.*?)\1/i, (m, q, inner) => `style=${q}${inner};width:100%;height:350px;border:0;border-radius:12px;${q}`);
                            return `<iframe${s}>`;
                          });
                        } catch (err) {
                          return process.env.REACT_APP_GOOGLE_MAP_IFRAME;
                        }
                      })() }}
                    />
                  </div>
                ) : (
                  <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white/5 p-6 text-center">
                    <p className="text-sm text-white/70">Map embed not configured. To enable, set <code className="bg-slate-800 px-1 rounded">REACT_APP_GOOGLE_MAP_IFRAME</code> in your .env with the iframe HTML provided by Google Maps.</p>
                  </div>
                )}
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

              {/* Phone */}
              <div className="group mb-6 p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 hover:border-accent/60 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.95 21C17.7 21 15.3 20.35 13.2 19.15 11.1 18 9.3 16.5 7.8 14.7 6.3 13.2 4.8 11.1 3.65 9 2.35 6.9 1.8 4.5 1.8 2.05 1.8 1.3 2.3.8 3.05.8h3.5c.75 0 1.35.5 1.5 1.25l.62 3.1c.08.5.02.99-.3 1.4l-2.1 2.1c1.2 2.2 2.95 4.15 5.15 5.35l2.1-2.1c.4-.3.9-.4 1.4-.3l3.1.62c.8.15 1.25.75 1.25 1.5v3.5c0 .75-.5 1.25-1.25 1.25z" fill="currentColor"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white">Call Us</h3>
                    <p className="text-white/80 text-sm">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                <a href={`tel:${getPhoneNumber().replace(/\D/g, '')}`} className="text-accent hover:text-orange-300 font-bold transition-colors text-lg break-all block">
                  {getPhoneNumber()}
                </a>
              </div>

              {/* Email */}
              <div className="group mb-6 p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 hover:border-accent/60 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white">Email Us</h3>
                    <p className="text-white/80 text-sm">Response within 24 hours</p>
                  </div>
                </div>
                <a href={`mailto:${getEmail()}`} className="text-accent hover:text-orange-300 font-bold transition-colors break-all text-lg block">
                  {getEmail()}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="group p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 hover:border-accent/60 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.6 6.4c-1.5-1.5-3.5-2.3-5.6-2.3-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1.1 4L2 22l4.3-1.1c1.2.6 2.5 1 3.9 1 4.4 0 8-3.6 8-8 0-2.1-.8-4.1-2.3-5.6zM12 20c-1.2 0-2.4-.3-3.5-.9l-.2-.1-2.6.7.7-2.6-.1-.2c-.6-1.1-.9-2.3-.9-3.5 0-3.7 3-6.7 6.7-6.7 1.8 0 3.5.7 4.7 2s2 3 2 4.7c0 3.7-3 6.7-6.7 6.7zm4-4.5l-2.3-.5c-.3-.1-.5-.2-.8.1l-.5.6c-.2.3-.4.3-.7.2-1.3-.6-2.8-1.8-3.5-3-.1-.2-.1-.5.1-.7l.4-.5c.2-.2.2-.5.1-.8l-.5-2.3c-.1-.3-.4-.5-.7-.5h-.9c-.3 0-.6.1-.8.3-.6.6-1 1.5-.9 2.5.1 1.5.6 2.9 1.6 4.1 1 1.1 2.5 1.7 4 1.8 1 .1 1.9-.2 2.5-.9.2-.3.3-.6.3-.8 0-.3-.2-.5-.4-.6z" fill="currentColor"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white">WhatsApp</h3>
                    <p className="text-white/80 text-sm">Available 24/7</p>
                  </div>
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
      </div>
    </div>
  );
};

export default Contact;
