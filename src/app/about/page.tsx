import type { Metadata } from "next";
import { Target, Eye, Heart, Shield, ArrowRight, Users, BadgeCheck, Handshake } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { whatsappLink, SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Genienow | Trusted Home Services in Abu Dhabi",
  description:
    "Learn about Genienow — our mission to make trusted home services accessible across Abu Dhabi and the UAE, and our commitment to verification, transparency & quality.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Genienow | Trusted Home Services in Abu Dhabi",
    description:
      "Learn about Genienow — our mission to make trusted home services accessible across Abu Dhabi and the UAE.",
    url: `${SITE_URL}/about`,
  },
};

const values = [
  {
    icon: Shield,
    title: "Trust is non-negotiable",
    description:
      "We verify every provider before they join our network. Trust isn't a selling point — it's our minimum standard.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Heart,
    title: "People over processes",
    description:
      "We believe in treating both our customers and our service providers with genuine care, respect, and fairness.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Target,
    title: "Simplicity is a feature",
    description:
      "We removed every step that shouldn't exist. WhatsApp, a conversation, a confirmed booking. That's it.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Eye,
    title: "Transparency always",
    description:
      "Pricing is clear, providers are identified, and we communicate honestly — even when something doesn't go as planned.",
    color: "bg-violet-50 text-violet-600",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "About", href: "/about" },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Breadcrumb items={[{ name: "About", href: "/about" }]} className="mb-6" />
              <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h1 id="about-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                Building trust in home services across Abu Dhabi
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-slate-500 leading-relaxed mb-4">
                Genienow is a marketplace that connects customers in Abu Dhabi directly with trusted, independent service providers — for homes, businesses, and everything in between.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                We are not an agency. We don&apos;t employ the providers. We verify them, match them to the right customers, and stand behind every booking we confirm.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-slate-50" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 id="story-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-5">
                Why We Started Genienow
              </h2>
              <div className="flex flex-col gap-5 text-slate-600 leading-relaxed">
                <p>
                  Abu Dhabi is home to thousands of skilled, experienced individuals — cleaners, cooks, babysitters, house helpers, and pet sitters — who work independently and take real pride in their craft. On the other side are families, professionals, and businesses who need exactly these services but have no easy, trustworthy way to find them.
                </p>
                <p>
                  The informal market is large but fragmented. Word of mouth works within tight communities but doesn&apos;t scale. Existing platforms feel either too transactional or add unnecessary friction. What people really want is simple: a trusted recommendation, a reliable person, and a straightforward way to book.
                </p>
                <p>
                  Genienow is that layer. We are a marketplace — not a staffing agency. Every provider in our network is an independent professional who has been personally verified by our team before their first booking. We check identities, evaluate experience, and ensure each provider meets our standard of quality and professionalism.
                </p>
                <p>
                  Our role is to do the trust-building work so you don&apos;t have to — and to make the whole experience as simple as sending a WhatsApp message. We&apos;re building steadily, listening to customers, supporting providers, and improving with every booking.
                </p>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-5">
              {/* Mission */}
              <AnimatedSection delay={0.1} direction="left">
                <div className="bg-white rounded-2xl border border-slate-100 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                      <Target size={18} className="text-green-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Our Mission</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    To make trusted home services accessible and reliable for every household and business in Abu Dhabi and the UAE — through a platform built on verification, transparency, and genuine human care.
                  </p>
                </div>
              </AnimatedSection>

              {/* Vision */}
              <AnimatedSection delay={0.2} direction="left">
                <div className="bg-white rounded-2xl border border-slate-100 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                      <Eye size={18} className="text-sky-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Our Vision</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    A future where finding a reliable cleaner, cook, or babysitter in Abu Dhabi is as easy as sending a message — and where independent service providers have a trustworthy platform to build their work and reputation.
                  </p>
                </div>
              </AnimatedSection>

              {/* Commitment */}
              <AnimatedSection delay={0.3} direction="left">
                <div className="bg-white rounded-2xl border border-slate-100 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center">
                      <Heart size={18} className="text-rose-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Our Commitment</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    We are committed to earning your trust with every booking — not just through verification, but through honest communication, quality follow-through, and a willingness to make things right when they don&apos;t go as planned.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white" aria-labelledby="how-we-work-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 id="how-we-work-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-5">
              A marketplace, not an agency
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Genienow connects you directly with independent, self-employed service providers. We are not their employer — we are the trusted bridge between you and them.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatedSection delay={0}>
              <div className="relative bg-slate-50 rounded-2xl p-7 h-full border border-slate-100">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5">
                  <Users size={22} className="text-green-600" aria-hidden="true" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">1</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">You tell us what you need</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Send us a WhatsApp message describing the service — cleaning, cooking, babysitting, house help, or pet sitting — your location in Abu Dhabi, and your preferred timing.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative bg-slate-50 rounded-2xl p-7 h-full border border-slate-100">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-5">
                  <BadgeCheck size={22} className="text-sky-600" aria-hidden="true" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">2</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">We match you with a verified provider</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We identify the right independent provider from our verified network — someone whose experience, location, and availability matches your requirements. We share their details before confirming.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative bg-slate-50 rounded-2xl p-7 h-full border border-slate-100">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-5">
                  <Handshake size={22} className="text-violet-600" aria-hidden="true" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">3</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">The provider delivers, we follow up</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The independent provider delivers the service directly to you. We stay in the loop, follow up after every booking, and resolve anything that doesn&apos;t meet your expectation.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Marketplace model callout */}
          <AnimatedSection delay={0.3}>
            <div className="bg-slate-900 rounded-2xl p-8 max-w-3xl mx-auto text-center">
              <p className="text-slate-300 text-base leading-relaxed">
                <span className="text-white font-semibold">Every provider is an independent professional.</span>{" "}
                They are self-employed individuals who choose to work through the Genienow network. We verify their identity and experience, set quality standards, and support them in building a reliable, reputable practice. You get the benefit of a vetted individual — without the complexity of finding one yourself.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              What We Stand For
            </p>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our values guide every decision
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-slate-50 rounded-2xl p-6 h-full hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 border border-transparent hover:border-slate-100">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`} aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-50" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Where We Operate
            </p>
            <h2 id="areas-heading" className="text-3xl font-bold text-slate-900 tracking-tight">
              Serving Abu Dhabi and the UAE
            </h2>
            <p className="text-slate-500 mt-4 text-lg leading-relaxed">
              We connect customers across Abu Dhabi with trusted service providers — from established communities to new developments.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              "Khalifa City", "Al Reem Island", "Yas Island", "Saadiyat Island",
              "Al Raha", "Mussafah", "Al Maryah Island", "Corniche",
              "Al Khalidiyah", "Al Mushrif", "Tourist Club Area", "Mohammed Bin Zayed City",
            ].map((area) => (
              <div key={area} className="bg-white border border-slate-100 rounded-xl px-4 py-3 text-center">
                <p className="text-sm font-medium text-slate-700">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              We&apos;re building something worth trusting in Abu Dhabi
            </h2>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              If our mission resonates with you — whether as a customer, a service provider, or someone who wants to see this grow — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink("Hi Genienow! I'd like to learn more and connect with your team.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Say hello to Genienow on WhatsApp"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-green-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Say Hello on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
