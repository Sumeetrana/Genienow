"use client";

import { useState } from "react";
import { Mail, Clock, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { EMAIL, BUSINESS_HOURS, PHONE_DISPLAY, ADDRESS, whatsappLink } from "@/lib/constants";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi Genienow! My name is ${form.name}.\n\n${form.message}\n\nContact: ${form.email}${form.phone ? ` / ${form.phone}` : ""}`;
    window.open(whatsappLink(msg), "_blank");
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} className="mb-6" />
            <p className="text-green-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              We&apos;d love to hear from you
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Whether you have a service request in Abu Dhabi, a business enquiry, or just a question — the fastest way to reach us is always WhatsApp. We respond within minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Primary WhatsApp CTA */}
      <section className="py-16 bg-green-600" aria-label="WhatsApp contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Fastest response: WhatsApp
              </h2>
              <p className="text-green-100">
                Send us a message and we&apos;ll reply within minutes during business hours.
              </p>
            </div>
            <a
              href={whatsappLink("Hi Genienow! I have a question about home services in Abu Dhabi.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp to contact Genienow"
              className="shrink-0 inline-flex items-center gap-2.5 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Open WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-white" aria-labelledby="contact-info-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <AnimatedSection>
                <h2 id="contact-info-heading" className="text-2xl font-bold text-slate-900 mb-8">Contact information</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5">
                    <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <MessageSquare size={20} className="text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-0.5">WhatsApp</p>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline text-sm font-medium"
                      >
                        {PHONE_DISPLAY}
                      </a>
                      <p className="text-slate-400 text-xs mt-1">Fastest response — replies within minutes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5">
                    <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-sky-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-0.5">Email</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-sky-600 hover:underline text-sm font-medium"
                      >
                        {EMAIL}
                      </a>
                      <p className="text-slate-400 text-xs mt-1">We respond within 24 hours on business days</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5">
                    <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-amber-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-0.5">Business Hours</p>
                      <p className="text-slate-600 text-sm">{BUSINESS_HOURS}</p>
                      <p className="text-slate-400 text-xs mt-1">WhatsApp messages received outside hours are answered the next morning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5">
                    <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-violet-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-0.5">Service Area</p>
                      <p className="text-slate-600 text-sm">{ADDRESS}</p>
                      <p className="text-slate-400 text-xs mt-1">Serving Khalifa City, Al Reem Island, Yas Island, Saadiyat & more</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <AnimatedSection delay={0.1} direction="left">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
                <p className="text-slate-500 text-sm mb-7">
                  Fill this out and we&apos;ll open a pre-filled WhatsApp conversation for you.
                </p>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">WhatsApp opened!</h3>
                    <p className="text-slate-500 text-sm">
                      Your message has been pre-filled in WhatsApp. Just hit send and we&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your name <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone (optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 50 000 0000"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Message <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what you need — service type, location in Abu Dhabi, preferred timing, or any questions..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm mt-2"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </button>
                    <p className="text-xs text-slate-400 text-center">
                      This opens WhatsApp with your message pre-filled. You control what gets sent.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
