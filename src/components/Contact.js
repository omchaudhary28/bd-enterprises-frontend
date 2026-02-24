import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { API_URL } from '../config/api';
import Map from './Map';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  serviceType: '',
  message: '',
  preferredMethod: 'email',
};

const serviceOptions = [
  'Fire Extinguisher Systems',
  'Fire Alarm and Detection',
  'Sprinkler Systems',
  'Emergency Lighting',
  'Fire Safety Training',
  'Compliance Inspection',
  'Oxygen and SCBA Cylinders',
  'Fabrication Services',
  'PPE and Safety Equipment',
];

const Contact = () => {
  const prefersReduced = useReducedMotion();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);

  const safeJson = useCallback(async (response) => {
    try {
      return await response.json();
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCompanyInfo = async () => {
      try {
        const response = await fetch(`${API_URL}/company-info`, {
          method: 'GET',
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const payload = await safeJson(response);
        setCompanyInfo(payload?.data ?? payload ?? null);
      } catch {
        setCompanyInfo(null);
      }
    };

    fetchCompanyInfo();
    return () => controller.abort();
  }, [safeJson]);

  const resolveValue = useCallback(
    (keys, fallback) => {
      if (!companyInfo) {
        return fallback;
      }

      if (Array.isArray(companyInfo)) {
        for (const key of keys) {
          const found = companyInfo.find((item) => {
            const type = String(item?.contact_type ?? item?.type ?? '').toLowerCase();
            return type.includes(key.toLowerCase());
          });
          if (found?.value) {
            return String(found.value).trim();
          }
        }
      }

      if (typeof companyInfo === 'object') {
        for (const key of keys) {
          if (companyInfo[key]) {
            return String(companyInfo[key]).trim();
          }
          const matchedKey = Object.keys(companyInfo).find((objKey) =>
            objKey.toLowerCase().includes(key.toLowerCase())
          );
          if (matchedKey && companyInfo[matchedKey]) {
            return String(companyInfo[matchedKey]).trim();
          }
        }

        if (companyInfo.contact_type && companyInfo.value) {
          const type = String(companyInfo.contact_type).toLowerCase();
          const matchingType = keys.some((key) => type.includes(key.toLowerCase()));
          if (matchingType) {
            return String(companyInfo.value).trim();
          }
        }
      }

      return fallback;
    },
    [companyInfo]
  );

  const phoneNumber = useMemo(() => resolveValue(['phone', 'tel'], '9898046269'), [resolveValue]);
  const emailAddress = useMemo(() => resolveValue(['email'], 'bdenterprises99@yahoo.co.in'), [resolveValue]);
  const whatsappNumber = useMemo(() => resolveValue(['whatsapp'], phoneNumber), [resolveValue, phoneNumber]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await safeJson(response);

      if (response.ok && payload?.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Your message has been received. Our team will contact you shortly.',
        });
        setFormData(initialFormData);
      } else {
        setSubmitStatus({
          type: 'error',
          message: payload?.message || 'Unable to submit the form right now. Please try again shortly.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to connect to contact services right now. Please call or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(247,127,0,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_86%,rgba(214,40,40,0.13),transparent_32%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <motion.section
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.45, ease: 'easeOut' }}
          className="contact-hero mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <span className="mb-4 inline-flex rounded-full border border-[#F77F00]/50 bg-[#F77F00]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FCBF49] md:text-sm">
            Contact B. D. Enterprises
          </span>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-[#F8F9FA] sm:text-5xl md:text-6xl">
            Discuss Your Fire and Safety Requirements
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#E9ECEF]/85 md:text-lg">
            Connect with our team for project consultations, product sourcing, compliance planning, and site execution support.
          </p>
        </motion.section>

        <section className="contact-content grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.35, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="contact-form-card rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-5 md:p-8">
              <h2 className="mb-2 text-2xl font-black text-[#F8F9FA] md:text-3xl">Send an Inquiry</h2>
              <p className="mb-6 text-sm text-[#E9ECEF]/80 md:text-base">Typical response time is within one business day.</p>

              {submitStatus && (
                <div
                  className={`mb-5 rounded-xl border px-4 py-3 text-sm font-semibold ${
                    submitStatus.type === 'success'
                      ? 'border-emerald-300/45 bg-emerald-300/15 text-emerald-100'
                      : 'border-red-300/45 bg-red-300/15 text-red-100'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-control w-full rounded-xl border border-[#E9ECEF]/20 bg-[#111111] px-3.5 py-3 text-sm text-[#F8F9FA] placeholder-[#E9ECEF]/45 outline-none transition-all duration-200 focus:border-[#F77F00]/70"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-control w-full rounded-xl border border-[#E9ECEF]/20 bg-[#111111] px-3.5 py-3 text-sm text-[#F8F9FA] placeholder-[#E9ECEF]/45 outline-none transition-all duration-200 focus:border-[#F77F00]/70"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control w-full rounded-xl border border-[#E9ECEF]/20 bg-[#111111] px-3.5 py-3 text-sm text-[#F8F9FA] placeholder-[#E9ECEF]/45 outline-none transition-all duration-200 focus:border-[#F77F00]/70"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control w-full rounded-xl border border-[#E9ECEF]/20 bg-[#111111] px-3.5 py-3 text-sm text-[#F8F9FA] placeholder-[#E9ECEF]/45 outline-none transition-all duration-200 focus:border-[#F77F00]/70"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="companyName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="form-control w-full rounded-xl border border-[#E9ECEF]/20 bg-[#111111] px-3.5 py-3 text-sm text-[#F8F9FA] placeholder-[#E9ECEF]/45 outline-none transition-all duration-200 focus:border-[#F77F00]/70"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                      Service Interest
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="form-control w-full rounded-xl border border-[#E9ECEF]/20 bg-[#111111] px-3.5 py-3 text-sm text-[#F8F9FA] outline-none transition-all duration-200 focus:border-[#F77F00]/70"
                    >
                      <option value="" className="bg-[#1C1C1C]">Select service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service} className="bg-[#1C1C1C]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control w-full resize-none rounded-xl border border-[#E9ECEF]/20 bg-[#111111] px-3.5 py-3 text-sm text-[#F8F9FA] placeholder-[#E9ECEF]/45 outline-none transition-all duration-200 focus:border-[#F77F00]/70"
                    placeholder="Share your project scope, priorities, and timeline."
                  />
                </div>

                <fieldset>
                  <legend className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#E9ECEF]">
                    Preferred Contact Method
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {['email', 'phone', 'whatsapp'].map((method) => (
                      <label
                        key={method}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#E9ECEF]/20 bg-[#111111] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#E9ECEF]"
                      >
                        <input
                          className="form-control-radio"
                          type="radio"
                          name="preferredMethod"
                          value={method}
                          checked={formData.preferredMethod === method}
                          onChange={handleInputChange}
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-corporate inline-flex w-full min-h-[50px] items-center justify-center rounded-xl px-6 py-3 text-sm font-black uppercase tracking-wider disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : 0.05, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="contact-method-card mb-6 rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-5 md:p-6"
            >
              <h3 className="mb-4 text-2xl font-black text-[#F8F9FA]">Contact Methods</h3>

              <div className="space-y-4">
                <a
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  className="block rounded-xl border border-[#E9ECEF]/15 bg-[#111111] p-4 transition-all duration-300 hover:border-[#F77F00]/55 hover:text-[#FCBF49]"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FCBF49]">Phone</p>
                  <p className="text-lg font-bold text-[#F8F9FA]">{phoneNumber}</p>
                  <p className="text-xs text-[#E9ECEF]/70">Business Hours Support</p>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="block rounded-xl border border-[#E9ECEF]/15 bg-[#111111] p-4 transition-all duration-300 hover:border-[#F77F00]/55 hover:text-[#FCBF49]"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FCBF49]">Email</p>
                  <p className="break-all text-base font-bold text-[#F8F9FA]">{emailAddress}</p>
                  <p className="text-xs text-[#E9ECEF]/70">Project and quotation requests</p>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-[#E9ECEF]/15 bg-[#111111] p-4 transition-all duration-300 hover:border-[#F77F00]/55 hover:text-[#FCBF49]"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FCBF49]">WhatsApp</p>
                  <p className="text-lg font-bold text-[#F8F9FA]">{whatsappNumber}</p>
                  <p className="text-xs text-[#E9ECEF]/70">Quick technical coordination</p>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.35, delay: prefersReduced ? 0 : 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-[#E9ECEF]/15 bg-[#1C1C1C] p-3"
            >
              <Map height={420} className="rounded-xl" />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
