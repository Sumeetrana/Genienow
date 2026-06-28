"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { whatsappLink } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Contact Us on WhatsApp",
    description:
      "Send us a quick message on WhatsApp. No forms, no apps — just a conversation. Tell us what you need and when.",
  },
  {
    number: "02",
    title: "Share Your Requirement",
    description:
      "Describe the service you need, your preferred timing, location, and any specific requests. We keep it simple.",
  },
  {
    number: "03",
    title: "We Match You",
    description:
      "Our team identifies a suitable, verified provider from our network based on your needs and location.",
  },
  {
    number: "04",
    title: "Booking Confirmed",
    description:
      "We share the provider's details and confirm the appointment. You'll know exactly who's coming and when.",
  },
  {
    number: "05",
    title: "Service Completed",
    description:
      "Your provider arrives and delivers the service. Have feedback? Share it with us and we take care of the rest.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28">
            <AnimatedSection>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Simple from start to finish
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                We&apos;ve removed every step that shouldn&apos;t exist. Getting help at home should feel effortless — and with Genienow, it is.
              </p>
              <a
                href={whatsappLink("Hi! I'd like to get started with Genienow.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-100"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Started Free
              </a>
            </AnimatedSection>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col gap-4">
            {steps.map(({ number, title, description }, i) => (
              <AnimatedSection key={number} delay={i * 0.1} direction="left">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex gap-5 bg-white rounded-2xl border border-slate-100 hover:border-green-100 hover:shadow-lg hover:shadow-green-50 p-6 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                    <span className="text-green-700 font-bold text-sm">{number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base mb-1.5">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
