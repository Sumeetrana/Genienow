"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { whatsappLink } from "@/lib/constants";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "All bookings are handled through WhatsApp. Simply send us a message, describe what you need, and our team will find a suitable provider and confirm your booking — usually within the hour.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payment details are discussed and agreed upon before the service begins. We support cash, UPI, and bank transfer depending on the service and provider. Everything is communicated clearly upfront.",
  },
  {
    question: "Can I schedule a service in advance?",
    answer:
      "Absolutely. You can book a service for the same day or plan ahead — weekly, monthly, or on specific dates. Just let us know your preferred schedule when you reach out.",
  },
  {
    question: "Can I request urgent or same-day service?",
    answer:
      "Yes. We do our best to accommodate urgent requests. Availability depends on your location and timing, but we always try to find a solution quickly — just message us.",
  },
  {
    question: "Are service providers background-verified?",
    answer:
      "Yes. Every provider in our network goes through a personal verification process before being listed. We check their identity and ensure they have relevant experience before sending them to any home.",
  },
  {
    question: "Can businesses use Genienow?",
    answer:
      "Yes. We work with offices, small businesses, clinics, retail stores, and restaurants for regular cleaning, housekeeping, and support staff. Reach out on WhatsApp and we&apos;ll discuss your business needs.",
  },
  {
    question: "What if I am not satisfied with the service?",
    answer:
      "Your satisfaction matters. If something didn&apos;t go as expected, let us know directly on WhatsApp. We'll address the concern and, where appropriate, arrange for a re-service or find a better-suited provider.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account needed. Everything happens through WhatsApp — just send us a message and we take care of the rest. No app downloads, no sign-ups.",
  },
  {
    question: "Which areas do you currently serve?",
    answer:
      "We are growing our coverage steadily. Please message us on WhatsApp with your location and we&apos;ll confirm whether we have providers available in your area.",
  },
  {
    question: "Can I request the same provider each time?",
    answer:
      "Yes. If you&apos;ve had a positive experience with a specific provider, you can request them for future visits. We will do our best to accommodate recurring bookings with the same person.",
  },
  {
    question: "What services does Genienow offer?",
    answer:
      "We currently offer Cleaning, House Help, Cooking, Babysitting, and Pet Sitting. Both residential and commercial cleaning are available. More services may be added as we grow.",
  },
  {
    question: "Is there a minimum booking duration?",
    answer:
      "Minimum durations vary by service type. For example, cleaning typically requires a minimum of 2-3 hours. We will clarify this when you contact us based on your specific request.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-base leading-snug">
          {question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
          {open ? (
            <Minus size={14} className="text-slate-600" />
          ) : (
            <Plus size={14} className="text-slate-600" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQSectionProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs: customFaqs,
  title = "Frequently asked questions",
  subtitle = "Everything you need to know before reaching out.",
}: FAQSectionProps) {
  const displayFaqs = customFaqs ?? faqs;

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-500 text-lg">{subtitle}</p>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {displayFaqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <FAQItem {...faq} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href={whatsappLink("Hi! I have a question about Genienow.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask Us on WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
