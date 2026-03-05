import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceMedia = ({ images, title, mediaId }) => {
  const handleSwiperInit = useCallback((swiperInstance) => {
    setTimeout(() => {
      if (swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.update();
      }
    }, 100);
  }, []);

  if (!images.length) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full max-w-full overflow-hidden rounded-2xl border border-[#E9ECEF]/20 bg-[#1B1B1B] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="aspect-[16/10] w-full">
            <img
              src={images[0]}
              alt={title}
              className="h-full w-full object-cover max-h-[420px] md:max-h-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-2xl border border-[#E9ECEF]/20 bg-[#1B1B1B] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        autoHeight
        observer
        observeParents
        resizeObserver
        loop
        autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        onSwiper={handleSwiperInit}
        className={`service-media-swiper service-media-swiper-${mediaId}`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${mediaId}-${index}`}>
            <div className="relative w-full overflow-hidden rounded-xl">
              <div className="aspect-[16/10] w-full">
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="h-full w-full object-cover max-h-[420px] md:max-h-[520px]"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ListBlock = ({ title, items }) => {
  if (!items || !items.length) {
    return null;
  }

  return (
    <div>
      <h4 className="mb-2 text-sm font-extrabold uppercase tracking-wider text-[#FCBF49]">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#E9ECEF]/88">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F77F00]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceSection = ({ section, index, pageKey }) => {
  const media = (
    <ServiceMedia images={section.images || []} title={section.title} mediaId={`${pageKey}-${section.id}`} />
  );

  const content = (
    <div className="rounded-2xl border border-[#E9ECEF]/20 bg-[#1C1C1C] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)] md:p-7">
      <h3 className="mb-4 text-2xl font-black tracking-tight text-[#F8F9FA] md:text-3xl">{section.title}</h3>
      <div className="space-y-4">
        {(section.paragraphs || []).map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-[#E9ECEF]/88 md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <ListBlock title="Key Points" items={section.highlights} />
        <ListBlock title="Applications" items={section.applications} />
        <ListBlock title="Compliance Focus" items={section.compliance} />
      </div>
    </div>
  );

  const mediaLeft = index % 2 === 0;

  return (
    <section className="py-5 md:py-8">
      <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-8">
        <div className={`${mediaLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'} min-w-0`}>{media}</div>
        <div className={`${mediaLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'} min-w-0`}>{content}</div>
      </div>
    </section>
  );
};

const ServiceDetailLayout = ({
  pageKey,
  badge,
  title,
  subtitle,
  intro,
  sections,
  standards,
  capabilities,
  ctaTitle,
  ctaBody,
  ctaLabel,
}) => (
  <div className="service-page relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F9FA]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(247,127,0,0.16),transparent_36%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_86%,rgba(214,40,40,0.14),transparent_34%)]" />

    <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-16">
      <Link
        to="/services"
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E9ECEF]/30 bg-[#1C1C1C] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E9ECEF] transition-colors hover:border-[#FCBF49] hover:text-[#FCBF49] md:text-sm"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Services
      </Link>

      <section className="rounded-3xl border border-[#E9ECEF]/20 bg-[#1C1C1C] p-6 md:p-10">
        <span className="mb-5 inline-flex rounded-full border border-[#F77F00]/55 bg-[#F77F00]/18 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#FCBF49] md:text-sm">
          {badge}
        </span>
        <h1 className="mb-3 text-3xl font-black tracking-tight text-[#F8F9FA] sm:text-4xl md:text-6xl">{title}</h1>
        <h2 className="mb-5 text-xl font-extrabold tracking-tight text-[#FCBF49] md:text-3xl">{subtitle}</h2>
        <p className="max-w-6xl text-sm leading-relaxed text-[#E9ECEF]/88 md:text-lg">{intro}</p>
      </section>

      <div className="mt-8">
        {sections.map((section, index) => (
          <ServiceSection key={section.id} section={section} index={index} pageKey={pageKey} />
        ))}
      </div>

      <section className="py-5 md:py-8">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-[#E9ECEF]/20 bg-[#1C1C1C] p-5 md:p-7">
            <h3 className="mb-4 text-2xl font-black tracking-tight text-[#F8F9FA] md:text-3xl">Standards and Compliance</h3>
            <ul className="space-y-3">
              {standards.map((standard) => (
                <li key={standard.title} className="rounded-xl border border-[#E9ECEF]/15 bg-[#111111] p-4">
                  <p className="mb-1 text-sm font-extrabold uppercase tracking-wider text-[#FCBF49]">{standard.title}</p>
                  <p className="text-sm leading-relaxed text-[#E9ECEF]/85 md:text-base">{standard.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E9ECEF]/20 bg-[#1C1C1C] p-5 md:p-7">
            <h3 className="mb-4 text-2xl font-black tracking-tight text-[#F8F9FA] md:text-3xl">B. D. Enterprises Delivery Scope</h3>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#E9ECEF]/88 md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F77F00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-8">
        <div className="rounded-2xl border border-[#E9ECEF]/20 bg-gradient-to-r from-[#D62828]/22 to-[#F77F00]/18 p-7 md:p-10">
          <h3 className="mb-3 text-3xl font-black tracking-tight text-[#F8F9FA] md:text-4xl">{ctaTitle}</h3>
          <p className="mb-6 max-w-4xl text-sm leading-relaxed text-[#F8F9FA]/90 md:text-lg">{ctaBody}</p>
          <Link
            to="/contact"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#FCBF49] px-8 py-3 text-sm font-black uppercase tracking-wider text-[#111111] transition-colors hover:bg-[#F77F00] hover:text-white sm:w-auto"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  </div>
);

export default ServiceDetailLayout;
