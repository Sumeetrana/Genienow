import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Home, ChefHat, Baby, PawPrint } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES, whatsappLink } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home Services in Abu Dhabi | Cleaning, Babysitting, Cooking & More",
  description:
    "Explore all Genienow home services in Abu Dhabi — professional cleaning, house help, cooking, babysitting & pet sitting. All booked through WhatsApp with verified providers.",
  keywords: [
    "home services Abu Dhabi",
    "cleaning Abu Dhabi",
    "babysitting Abu Dhabi",
    "house help Abu Dhabi",
    "cooking Abu Dhabi",
    "pet sitting Abu Dhabi",
    "maid service Abu Dhabi",
    "domestic services UAE",
  ],
  alternates: {
    canonical: "https://www.genienow.ae/services",
  },
  openGraph: {
    title: "Home Services in Abu Dhabi | Genienow",
    description:
      "Professional cleaning, house help, cooking, babysitting & pet sitting in Abu Dhabi. Verified providers, WhatsApp booking.",
    url: "https://www.genienow.ae/services",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Home,
  ChefHat,
  Baby,
  PawPrint,
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Services", href: "/services" },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950" aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <Breadcrumb
              items={[{ name: "Services", href: "/services" }]}
              className="mb-6"
            />
            <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
              What We Offer in Abu Dhabi
            </p>
            <h1 id="services-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Every home service Abu Dhabi deserves
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              From a one-time deep clean to daily cooking, from babysitting to full pet care — we connect you with trusted, verified providers across all essential home services in Abu Dhabi and the UAE.
            </p>
            <a
              href={whatsappLink("Hi! I'd like to know about your home services in Abu Dhabi.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat about home services in Abu Dhabi via WhatsApp"
              className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-900/30"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat About Your Needs
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-list-heading" className="sr-only">All Services</h2>
          <div className="flex flex-col gap-10">
            {SERVICES.map(({ slug, title, tagline, description, icon, bg, accent, border }, i) => {
              const Icon = iconMap[icon];
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection key={slug} delay={i * 0.06}>
                  <article className={`grid lg:grid-cols-2 gap-8 items-center rounded-3xl border ${border} overflow-hidden`}>
                    {/* Visual */}
                    <div className={`${bg} p-10 lg:p-16 flex items-center justify-center min-h-[240px] ${isEven ? "lg:order-first" : "lg:order-last"}`}>
                      <div className="text-center">
                        <div className={`w-20 h-20 rounded-2xl bg-white/80 ${accent} flex items-center justify-center mx-auto mb-4 shadow-sm`} aria-hidden="true">
                          <Icon size={36} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">{title}</h2>
                        <p className={`text-sm font-medium ${accent}`}>{tagline}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${isEven ? "lg:order-last" : "lg:order-first"}`}>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">{description}</p>
                      <div className="flex gap-3 flex-wrap">
                        <Link
                          href={`/services/${slug}`}
                          className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                        >
                          Learn More
                          <ArrowRight size={15} />
                        </Link>
                        <a
                          href={whatsappLink(`Hi! I'm interested in ${title} service in Abu Dhabi.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Book ${title} in Abu Dhabi via WhatsApp`}
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Book on WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
