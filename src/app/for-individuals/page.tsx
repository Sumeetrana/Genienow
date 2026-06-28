import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Baby,
  Heart,
  Users,
  PawPrint,
  GraduationCap,
  Laptop,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQSection from "@/components/sections/FAQSection";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Services for Individuals & Families in Abu Dhabi | Genienow",
  description:
    "Genienow helps Abu Dhabi residents and families with trusted home services — cleaning, cooking, babysitting, house help & pet sitting. Verified providers, WhatsApp booking.",
  keywords: [
    "home services for individuals Abu Dhabi",
    "family home services UAE",
    "residential services Abu Dhabi",
    "personal home help Abu Dhabi",
  ],
  alternates: {
    canonical: "https://www.genienow.ae/for-individuals",
  },
  openGraph: {
    title: "Home Services for Individuals & Families in Abu Dhabi | Genienow",
    description:
      "Genienow helps Abu Dhabi residents with trusted cleaning, cooking, babysitting, house help & pet sitting. Book via WhatsApp.",
    url: "https://www.genienow.ae/for-individuals",
  },
};

const personas = [
  {
    icon: Briefcase,
    title: "Busy Professionals",
    description:
      "Long work hours leave little time for home upkeep. We take care of cleaning, cooking, and daily tasks so you can come home to a space that's already sorted.",
    color: "bg-sky-50 text-sky-600",
    services: ["Cleaning", "Cooking", "House Help"],
  },
  {
    icon: Baby,
    title: "Parents & Families",
    description:
      "Raising a family is a full-time job. We provide reliable babysitting, cooking, and housekeeping support so your family runs smoothly even on the busiest days.",
    color: "bg-pink-50 text-pink-600",
    services: ["Babysitting", "Cooking", "Cleaning"],
  },
  {
    icon: Heart,
    title: "Senior Citizens",
    description:
      "Independence at home matters. We connect seniors with trustworthy helpers for daily chores, cooking, and companionship — giving both them and their families peace of mind.",
    color: "bg-rose-50 text-rose-600",
    services: ["House Help", "Cooking", "Cleaning"],
  },
  {
    icon: Users,
    title: "Dual-Income Households",
    description:
      "When both partners work, time is the rarest commodity. Our services cover the home front — cooking, cleaning, and childcare — so weekends are actually yours.",
    color: "bg-emerald-50 text-emerald-600",
    services: ["Cleaning", "Cooking", "Babysitting"],
  },
  {
    icon: PawPrint,
    title: "Pet Owners",
    description:
      "Pets need attention, walks, and care even when you can't be around. Our pet sitters treat your animals like their own, so you never have to worry when you're away.",
    color: "bg-violet-50 text-violet-600",
    services: ["Pet Sitting", "Dog Walking"],
  },
  {
    icon: GraduationCap,
    title: "Students & Young Adults",
    description:
      "Living alone or in shared accommodation and need occasional help? We offer flexible, short-duration support for cleaning and home organisation.",
    color: "bg-amber-50 text-amber-600",
    services: ["Cleaning", "House Help"],
  },
  {
    icon: Laptop,
    title: "Remote Workers",
    description:
      "Working from home means your home needs to be both a comfortable office and a living space. We help keep it clean, organised, and nourishing with regular support.",
    color: "bg-blue-50 text-blue-600",
    services: ["Cleaning", "Cooking", "House Help"],
  },
];

const benefits = [
  "No apps or accounts needed — everything via WhatsApp",
  "All providers are personally verified before listing",
  "Flexible scheduling that fits your routine",
  "Transparent pricing discussed upfront",
  "Direct communication with our team at all times",
  "Reliable follow-up to ensure service quality",
];

const individualFAQs = [
  {
    question: "Do I need to sign up or create an account?",
    answer:
      "No. Everything works through WhatsApp. Just send us a message, describe what you need, and we handle the rest. No accounts, no apps, no complexity.",
  },
  {
    question: "Can I request multiple services at once?",
    answer:
      "Yes. Many of our clients use a combination — such as a cleaner and a cook — and we coordinate both for you. Just tell us all your requirements.",
  },
  {
    question: "How quickly can I get someone?",
    answer:
      "Many requests are matched within the same day, especially for common services like cleaning or house help. Timing depends on your location and availability.",
  },
  {
    question: "Can I try one session before committing to a regular schedule?",
    answer:
      "Absolutely. Start with a single visit, see how it goes, and decide from there. There's no pressure to commit to anything upfront.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "Just message us on WhatsApp as early as possible. We will do our best to reschedule or find a replacement for your preferred time.",
  },
  {
    question: "Are services available on weekends and public holidays?",
    answer:
      "Many of our providers are available on weekends. Public holiday availability varies. Please message us with your specific dates and we will check for you.",
  },
];

export default function ForIndividualsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              For Individuals
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Abu Dhabi home services built{" "}
              <span className="text-green-600">around your life</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              Whether you&apos;re a working professional in Al Reem Island, a family in Khalifa City, a student, or a senior resident — Genienow gives you access to reliable, verified service providers across Abu Dhabi exactly when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink("Hi! I'm an individual looking for home services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-100"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Started on WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Personas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Who We Serve
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Designed for how real people live
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Genienow fits into your life — not the other way around. Here&apos;s how we help different kinds of households.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map(({ icon: Icon, title, description, color, services }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 p-6 h-full transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
                The Genienow Difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Simple, trusted, and made for real households
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                We know home services can feel unpredictable. We&apos;ve built Genienow to be the reliable alternative — where trust is the foundation and simplicity is the design.
              </p>
              <a
                href={whatsappLink("Hi Genienow! I'd like to find a service for my home.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Your First Service
              </a>
            </AnimatedSection>

            <div className="flex flex-col gap-4">
              {benefits.map((benefit, i) => (
                <AnimatedSection key={benefit} delay={i * 0.06} direction="left">
                  <div className="flex items-start gap-4 bg-white rounded-2xl border border-slate-100 px-5 py-4">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm font-medium">{benefit}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={individualFAQs}
        title="Common questions from individuals"
        subtitle="Quick answers to help you get started."
      />
    </>
  );
}
