"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Home,
  ChefHat,
  Baby,
  PawPrint,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { whatsappLink, SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Home,
  ChefHat,
  Baby,
  PawPrint,
};

const serviceDetails: Record<string, { what: string[]; audience: string; whatsappMsg: string }> = {
  cleaning: {
    what: ["House & villa cleaning", "Office & co-working spaces", "Retail shops & restaurants", "Move-in/out & deep cleaning"],
    audience: "Homes & Businesses",
    whatsappMsg: "Hi! I'm interested in your Cleaning service.",
  },
  "house-help": {
    what: ["Daily household tasks", "Laundry & ironing", "Grocery errands", "Reception & office support"],
    audience: "Homes & Businesses",
    whatsappMsg: "Hi! I'm interested in your House Help service.",
  },
  cooking: {
    what: ["Daily home cooking", "Weekly meal prep", "Arabic, Asian & Western cuisine", "Customised menus & dietary needs"],
    audience: "Homes & Families",
    whatsappMsg: "Hi! I'm interested in your Cooking service.",
  },
  babysitting: {
    what: ["Occasional babysitting", "Evening childcare", "Weekend support", "Emergency availability"],
    audience: "Families",
    whatsappMsg: "Hi! I'm interested in your Babysitting service.",
  },
  "pet-sitting": {
    what: ["Dog walking", "Pet feeding & care", "Home visits", "Holiday pet care"],
    audience: "Pet Owners",
    whatsappMsg: "Hi! I'm interested in your Pet Sitting service.",
  },
};

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Every service your home & business needs
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From daily cooking and childcare for families to regular office cleaning and business support — our verified providers serve homes, shops, and businesses across Abu Dhabi.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ slug, title, tagline, description, icon, bg, accent, border }, i) => {
            const Icon = iconMap[icon];
            const details = serviceDetails[slug];
            return (
              <AnimatedSection key={slug} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`group rounded-2xl border ${border} bg-white shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 overflow-hidden h-full flex flex-col`}
                >
                  {/* Card header */}
                  <div className={`${bg} px-6 pt-6 pb-5`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-white/80 ${accent} flex items-center justify-center shadow-sm`}>
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white/70 border border-slate-200/60 px-2 py-1 rounded-full">
                        {details.audience}
                      </span>
                    </div>
                    <h3 className="text-slate-900 font-bold text-xl mb-1">{title}</h3>
                    <p className={`text-sm font-medium ${accent}`}>{tagline}</p>
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-5 flex flex-col flex-1">
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
                    <ul className="flex flex-col gap-2 mb-6 flex-1">
                      {details.what.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
                      <Link
                        href={`/services/${slug}`}
                        className="flex-1 text-center text-sm font-medium text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-colors"
                      >
                        Learn More
                      </Link>
                      <a
                        href={whatsappLink(details.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 text-center text-sm font-semibold ${accent} ${bg} hover:opacity-90 border ${border} px-4 py-2.5 rounded-xl transition-opacity flex items-center justify-center gap-1.5`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}

          {/* View all card */}
          <AnimatedSection delay={0.4}>
            <Link href="/services" className="group">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-2xl border-2 border-dashed border-slate-200 hover:border-green-200 bg-slate-50 hover:bg-green-50/50 flex flex-col items-center justify-center text-center p-8 h-full min-h-[200px] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:border-green-200 flex items-center justify-center mb-4 shadow-sm transition-colors">
                  <ArrowRight size={20} className="text-slate-400 group-hover:text-green-600 transition-colors" />
                </div>
                <p className="font-semibold text-slate-700 group-hover:text-green-700 transition-colors">
                  View All Services
                </p>
                <p className="text-sm text-slate-400 mt-1">Explore the full list</p>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
