import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  Coffee,
  Users,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQSection from "@/components/sections/FAQSection";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Cleaning & Business Services in Abu Dhabi | Genienow",
  description:
    "Reliable commercial cleaning, office housekeeping & support staff for businesses in Abu Dhabi — offices, retail, clinics, restaurants & more. Book via WhatsApp.",
  keywords: [
    "office cleaning Abu Dhabi",
    "commercial cleaning Abu Dhabi",
    "business cleaning services UAE",
    "corporate cleaning Abu Dhabi",
    "cleaning company Abu Dhabi",
    "housekeeping services Abu Dhabi business",
  ],
  alternates: {
    canonical: "https://www.genienow.ae/for-businesses",
  },
  openGraph: {
    title: "Commercial Cleaning & Business Services in Abu Dhabi | Genienow",
    description:
      "Reliable commercial cleaning and housekeeping for offices, retail stores, clinics & restaurants in Abu Dhabi. Book via WhatsApp.",
    url: "https://www.genienow.ae/for-businesses",
  },
};

const businessTypes = [
  {
    icon: Building2,
    title: "Offices & Co-working Spaces",
    description:
      "Regular office cleaning, pantry support, and housekeeping to keep your workspace spotless and your team productive.",
    services: ["Daily cleaning", "Pantry upkeep", "Washroom sanitisation", "Desk maintenance"],
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: ShoppingBag,
    title: "Retail Stores",
    description:
      "Keep your retail space presentable for customers. Early morning or after-hours cleaning that fits your business schedule.",
    services: ["Floor cleaning", "Display area upkeep", "Entrance maintenance", "Post-day cleanup"],
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare Spaces",
    description:
      "Sanitisation and cleanliness standards that meet the expectations of a healthcare environment — consistent and thorough.",
    services: ["Patient area cleaning", "Washroom sanitisation", "Reception upkeep", "Surface disinfection"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafes",
    description:
      "Kitchen floor cleaning, common area maintenance, and post-service cleanups to keep your establishment in top shape.",
    services: ["Kitchen floor cleaning", "Dining area maintenance", "Post-service cleanup", "Outdoor area tidying"],
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Coffee,
    title: "Small Businesses",
    description:
      "Not a large enterprise? No problem. We work with small businesses, boutiques, studios, and home offices too.",
    services: ["Flexible scheduling", "One-time or recurring", "Mixed-use space cleaning", "Event cleanup"],
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Users,
    title: "Staff Accommodation",
    description:
      "Shared housing or staff quarters that need regular upkeep. We ensure common areas stay clean and habitable.",
    services: ["Common area cleaning", "Kitchen upkeep", "Bathroom maintenance", "Weekly deep cleaning"],
    color: "bg-rose-50 text-rose-600",
  },
];

const businessBenefits = [
  {
    title: "Flexible Scheduling",
    description:
      "We work around your business hours — early mornings, evenings, weekends, or during closed periods. Your operations always come first.",
  },
  {
    title: "No Long-Term Contracts Required",
    description:
      "Start with a one-time service. Scale to daily or weekly as you see fit. There's no obligation to commit before you've experienced the quality.",
  },
  {
    title: "Consistent Staff Allocation",
    description:
      "We assign the same providers to your business wherever possible — so they know your space, your standards, and your expectations.",
  },
  {
    title: "Dedicated WhatsApp Coordination",
    description:
      "Manage everything through WhatsApp. Raise requests, flag issues, or reschedule visits with a simple message to our team.",
  },
  {
    title: "Verified & Professional",
    description:
      "Every provider sent to a commercial space is identity-verified and briefed on professional conduct and workspace expectations.",
  },
  {
    title: "Transparent Pricing",
    description:
      "We provide clear pricing before any service begins. No invoicing surprises and no hidden service charges.",
  },
];

const businessFAQs = [
  {
    question: "Can you handle daily office cleaning?",
    answer:
      "Yes. Daily office cleaning is one of our most common business engagements. We assign consistent staff and work around your office schedule.",
  },
  {
    question: "Do you clean clinics and healthcare spaces?",
    answer:
      "Yes. We work with clinics, diagnostic centres, and small healthcare spaces. Please mention any specific sanitisation requirements when you contact us.",
  },
  {
    question: "Can services be scheduled before or after office hours?",
    answer:
      "Absolutely. Many of our business clients prefer early morning or evening cleaning to avoid disruption. We accommodate the timing that works for you.",
  },
  {
    question: "Is there a minimum contract or commitment?",
    answer:
      "No minimum commitment. You can start with a one-time service and decide on recurring arrangements based on your satisfaction.",
  },
  {
    question: "Can we request the same cleaner every time?",
    answer:
      "Yes. We make every effort to send the same provider to your establishment for consistency and familiarity with your space.",
  },
  {
    question: "Do you provide services for restaurants and commercial kitchens?",
    answer:
      "Yes. We handle restaurant dining areas, kitchens, and common spaces. Please describe your specific needs when you reach out.",
  },
  {
    question: "How do we pay for business services?",
    answer:
      "Payment terms are discussed and agreed upon before service begins. We support UPI, bank transfer, and cash based on the arrangement.",
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
              For Businesses
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Professional support for{" "}
              <span className="text-green-400">Abu Dhabi businesses</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Reliable, consistent, and professionally managed housekeeping, cleaning, and support staff for offices, retail stores, clinics, restaurants across Abu Dhabi — all coordinated through WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink("Hi! I'm looking for business cleaning or support services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-900/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-300 hover:bg-slate-800 font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Business types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Who We Work With
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Supporting businesses of all kinds
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Whether you run a boutique office or a busy restaurant, we have the experience and flexibility to support your space.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map(({ icon: Icon, title, description, services, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-100 p-6 h-full transition-shadow">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
                  <ul className="flex flex-col gap-2">
                    {services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Genienow for businesses */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Why Businesses Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Reliable support that fits your operations
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map(({ title, description }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-slate-100 p-6 h-full">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 size={18} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CalendarCheck size={26} className="text-green-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Getting started is simple
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Send us one WhatsApp message with your business details — type of establishment, location, and what you need — and we&apos;ll come back with a plan that fits.
            </p>
            <a
              href={whatsappLink("Hi! I want to discuss business cleaning or support services for my establishment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-green-100"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message Us on WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection
        faqs={businessFAQs}
        title="Business service questions"
        subtitle="Common questions from business owners and managers."
      />
    </>
  );
}
