"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  HeadphonesIcon,
  CalendarDays,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Independent & Verified",
    description:
      "Every provider is a self-employed individual — not a Genienow employee. We personally verify their identity and experience before they join our network.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description:
      "Send us a message and hear back within minutes. We work fast so you don't have to wait for help that you need today.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Professional Support",
    description:
      "Have a concern? Our team is reachable directly on WhatsApp to help with any issue before, during, or after service.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description:
      "Whether you need help today or want to set a recurring schedule, we work around your availability — not the other way around.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Booking",
    description:
      "No apps to download, no accounts to create. Everything happens through a simple WhatsApp conversation — quick and familiar.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ThumbsUp,
    title: "Reliable Service",
    description:
      "We take responsibility for the quality of each booking. If something isn't right, we make it right — no runaround.",
    color: "bg-pink-50 text-pink-600",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Why Genienow
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
            Built around your peace of mind
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We connect you with independent, verified service providers — not a faceless agency. Every provider is a real individual who has been personally checked by our team before their first booking.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map(({ icon: Icon, title, description, color }, i) => (
            <AnimatedSection key={title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-slate-700 transition-colors h-full"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2.5">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
