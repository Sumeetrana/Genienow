"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Star, Sparkles, ChefHat, Home, Baby, PawPrint } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

const serviceCards = [
  { icon: Sparkles, label: "Cleaning", color: "bg-emerald-50 text-emerald-600", delay: 0 },
  { icon: ChefHat, label: "Cooking", color: "bg-orange-50 text-orange-600", delay: 0.1 },
  { icon: Home, label: "House Help", color: "bg-sky-50 text-sky-600", delay: 0.2 },
  { icon: Baby, label: "Babysitting", color: "bg-pink-50 text-pink-600", delay: 0.3 },
  { icon: PawPrint, label: "Pet Sitting", color: "bg-violet-50 text-violet-600", delay: 0.4 },
];

const trustBadges = [
  { icon: Shield, label: "Verified Providers" },
  { icon: Clock, label: "Fast Response" },
  { icon: Star, label: "Professional Service" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top-right gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-green-100/60 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />

      {/* Bottom-left gradient blob */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-sky-50/80 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Now Serving Abu Dhabi via WhatsApp
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.08] mb-6"
          >
            Abu Dhabi Home
            <br />
            Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              You Can Trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed mb-10"
          >
            Connect instantly with verified service providers for cleaning, cooking, babysitting, house help & pet sitting across Abu Dhabi — all through a simple WhatsApp message.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-100 hover:shadow-green-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                  <Icon size={11} className="text-green-600" />
                </div>
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Illustrated product mockup */}
        <div className="relative lg:flex hidden items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 relative z-10"
            >
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-sm">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Genienow</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-slate-400">Online · Typically replies in minutes</span>
                  </div>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="py-4 flex flex-col gap-3">
                <div className="bg-slate-50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-slate-700">
                    Hi! I need someone for weekly house cleaning. 🏠
                  </p>
                </div>
                <div className="bg-green-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] ml-auto">
                  <p className="text-sm text-white">
                    Hello! We&apos;d love to help. Can you share your location and preferred schedule?
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-slate-700">
                    Khalifa City, every Thursday at 10 AM 📍
                  </p>
                </div>
                <div className="bg-green-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] ml-auto">
                  <p className="text-sm text-white">
                    ✅ We have a verified provider available! Shall I confirm?
                  </p>
                </div>
              </div>

              {/* Input area */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-50">
                <div className="flex-1 bg-slate-50 rounded-xl px-4 py-2.5 text-sm text-slate-400">
                  Type a message...
                </div>
                <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 translate-x-0.5">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Floating service cards */}
            {serviceCards.map(({ icon: Icon, label, color, delay }, i) => {
              const positions = [
                "absolute -top-6 -left-12",
                "absolute top-12 -right-14",
                "absolute bottom-20 -left-14",
                "absolute -bottom-4 right-4",
                "absolute top-40 -left-16",
              ];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + delay }}
                  className={`${positions[i]} flex items-center gap-2.5 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 z-20`}
                >
                  <div className={`w-8 h-8 rounded-xl ${color} flex items-center justify-center`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{label}</span>
                </motion.div>
              );
            })}

            {/* Decorative ring */}
            <div className="absolute inset-0 scale-110 rounded-3xl border-2 border-dashed border-slate-100 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-slate-200 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-slate-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
