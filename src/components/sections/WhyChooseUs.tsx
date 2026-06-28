"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const qualities = [
  {
    title: "Professional",
    description: "Every provider we work with brings professionalism and reliability to your home or office.",
  },
  {
    title: "Trusted",
    description: "We personally verify each provider — so you know exactly who is coming through your door.",
  },
  {
    title: "Responsive",
    description: "We respond fast. Most requests are addressed within minutes of your first message.",
  },
  {
    title: "Flexible",
    description: "One-time or recurring, mornings or evenings — we fit around your life, not the other way around.",
  },
  {
    title: "Transparent",
    description: "Pricing and expectations are shared upfront. No surprises, no hidden costs.",
  },
  {
    title: "Friendly",
    description: "Our team is approachable and warm. We treat every interaction like it matters — because it does.",
  },
  {
    title: "Reliable",
    description: "When we confirm a booking, we stand by it. We follow up to make sure everything went smoothly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl -z-10" />
              <div className="bg-white rounded-2xl border border-green-100 p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {qualities.slice(0, 6).map(({ title }, i) => (
                    <div
                      key={title}
                      className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 bg-green-600 text-white rounded-xl px-4 py-3.5">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span className="text-sm font-semibold">Reliable, always</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — list */}
          <div>
            <AnimatedSection>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Our Values
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Why families and businesses choose us
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                We built Genienow around one simple belief: people deserve home services that are as trustworthy as a friend&apos;s recommendation.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-5">
              {qualities.map(({ title, description }, i) => (
                <AnimatedSection key={title} delay={i * 0.06} direction="right">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-0.5">{title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
