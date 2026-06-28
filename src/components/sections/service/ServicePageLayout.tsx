"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/components/sections/FAQSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { whatsappLink, SERVICES } from "@/lib/constants";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServiceVariant {
  title: string;
  items: string[];
}

export interface ServicePageData {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: React.ReactNode;
  whoIsItFor: {
    heading: string;
    items: string[];
  };
  benefits: ServiceFeature[];
  includes: ServiceVariant[];
  howItWorks: string[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
  relatedServices?: string[]; // slugs
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const {
    slug,
    title,
    tagline,
    heroDescription,
    accentColor,
    bgColor,
    borderColor,
    textColor,
    icon,
    whoIsItFor,
    benefits,
    includes,
    howItWorks,
    faqs,
    whatsappMessage,
    relatedServices = [],
  } = data;

  const relatedServiceData = SERVICES.filter(
    (s) => relatedServices.includes(s.slug) && s.slug !== slug
  ).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={`pt-28 pb-20 ${bgColor} relative overflow-hidden`} aria-labelledby="service-hero-heading">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { name: "Services", href: "/services" },
                { name: title.split(" in ")[0], href: `/services/${slug}` },
              ]}
              className="mb-6"
            />

            <Link
              href="/services"
              className={`inline-flex items-center gap-2 text-sm font-medium ${textColor} opacity-70 hover:opacity-100 transition-opacity mb-8`}
            >
              <ArrowLeft size={16} />
              All Services
            </Link>

            <div className={`w-16 h-16 rounded-2xl bg-white/80 ${textColor} flex items-center justify-center mb-6 shadow-sm ${borderColor} border`}
              aria-hidden="true"
            >
              {icon}
            </div>

            <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/60 ${textColor} mb-5`}>
              {tagline}
            </div>

            <h1
              id="service-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 max-w-3xl"
            >
              {title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              {heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${title} via WhatsApp`}
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-100"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-white" aria-labelledby="who-its-for-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
            <p className={`text-sm font-semibold uppercase tracking-widest ${textColor} mb-4`}>
              Who It&apos;s For
            </p>
            <h2 id="who-its-for-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {whoIsItFor.heading}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {whoIsItFor.items.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.06}>
                <div className={`${bgColor} ${borderColor} border rounded-2xl px-5 py-4 flex items-center gap-3`}>
                  <div className={`w-2 h-2 rounded-full ${accentColor} shrink-0`} aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className={`text-sm font-semibold uppercase tracking-widest ${textColor} mb-4`}>
              Benefits
            </p>
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why choose Genienow for {title.split(" in ")[0].toLowerCase()}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ title: bt, description }, i) => (
              <AnimatedSection key={bt} delay={i * 0.07}>
                <article className="bg-white rounded-2xl border border-slate-100 p-6 h-full hover:shadow-lg hover:shadow-slate-100 transition-shadow">
                  <div className={`w-10 h-10 rounded-xl ${bgColor} ${textColor} flex items-center justify-center mb-4`} aria-hidden="true">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{bt}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white" aria-labelledby="included-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className={`text-sm font-semibold uppercase tracking-widest ${textColor} mb-4`}>
              What&apos;s Included
            </p>
            <h2 id="included-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Services covered
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map(({ title: it, items }, i) => (
              <AnimatedSection key={it} delay={i * 0.08}>
                <div className={`rounded-2xl border ${borderColor} ${bgColor} p-6 h-full`}>
                  <h3 className={`font-bold text-slate-900 text-lg mb-4 ${textColor}`}>{it}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${accentColor}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How booking works */}
      <section className="py-20 bg-slate-950" aria-labelledby="booking-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Booking Process
            </p>
            <h2 id="booking-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How booking works
            </h2>
          </AnimatedSection>

          <ol className="flex flex-col gap-4">
            {howItWorks.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <li className="flex items-start gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 border border-green-600/20 flex items-center justify-center shrink-0" aria-hidden="true">
                    <span className="text-green-400 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed mt-1.5">{step}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>

          <AnimatedSection className="text-center mt-12">
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${title} on WhatsApp`}
              className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-green-900/30"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Now on WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection
        faqs={faqs}
        title={`Questions about our ${title.split(" in ")[0].toLowerCase()} service`}
        subtitle="Answers to the most common questions we get."
      />

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <section className="py-20 bg-white" aria-labelledby="related-services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Also Available
              </p>
              <h2 id="related-services-heading" className="text-3xl font-bold text-slate-900 tracking-tight">
                Other services in Abu Dhabi
              </h2>
            </AnimatedSection>

            <div className={`grid gap-6 ${relatedServiceData.length === 1 ? "max-w-sm mx-auto" : relatedServiceData.length === 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" : "sm:grid-cols-3"}`}>
              {relatedServiceData.map((service, i) => (
                <AnimatedSection key={service.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`group block rounded-2xl border ${service.border} ${service.bg} p-6 hover:shadow-md transition-shadow`}
                  >
                    <p className={`text-sm font-semibold uppercase tracking-widest ${service.accent} mb-2`}>
                      {service.tagline}
                    </p>
                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.accent}`}>
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
