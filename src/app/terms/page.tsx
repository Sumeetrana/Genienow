import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { SITE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Genienow Abu Dhabi",
  description:
    "Terms of service for Genienow's home services platform in Abu Dhabi, UAE — governing the use of our services by customers and service providers.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By using Genienow's platform, website, or services — including contacting us via WhatsApp — you agree to be bound by these Terms of Service.",
      "If you do not agree with any part of these terms, please do not use our services.",
      "These terms apply to all users of our services, including individuals, families, and businesses in Abu Dhabi and the UAE.",
    ],
  },
  {
    title: "Our Services",
    content: [
      "Genienow operates as a platform that connects customers with independent home service providers for cleaning, house help, cooking, babysitting, and pet sitting in Abu Dhabi and the UAE.",
      "We are a marketplace platform, not the direct employer of service providers. Each provider operates as an independent professional.",
      "We verify service providers before listing them in our network, but we do not guarantee any specific outcome or result of any service.",
      "Service availability depends on your location within Abu Dhabi and the UAE, and the availability of providers in our network.",
    ],
  },
  {
    title: "Booking and Cancellation",
    content: [
      "All bookings are confirmed through WhatsApp communication. A booking is considered confirmed only when we have explicitly confirmed the provider, date, and time with you.",
      "If you need to cancel or reschedule, please notify us as early as possible via WhatsApp. We ask for reasonable notice to avoid inconveniencing providers.",
      "Cancellation policies for specific recurring arrangements may be discussed and agreed upon at the time of booking.",
    ],
  },
  {
    title: "Pricing and Payment",
    content: [
      "Pricing for all services is discussed and agreed upon before the service begins. We provide upfront pricing in AED.",
      "Payment is typically made directly to the service provider upon completion of the service, unless otherwise agreed.",
      "We do not charge booking or platform fees to customers unless explicitly communicated and agreed upon.",
    ],
  },
  {
    title: "Customer Responsibilities",
    content: [
      "You agree to provide a safe, respectful environment for service providers working in your home or establishment.",
      "You agree to provide accurate information about your requirements, location, and any relevant considerations (such as medical needs for childcare or pet care).",
      "You agree not to contact service providers for services outside of Genienow without our prior consent.",
      "You are responsible for ensuring that any specific instructions provided to service providers are legal and reasonable.",
    ],
  },
  {
    title: "Service Provider Standards",
    content: [
      "We require all service providers in our network to maintain professional conduct, punctuality, and respect for customers' homes and privacy.",
      "Service providers undergo identity verification before being listed. However, Genienow does not guarantee the specific qualifications, licences, or certifications of providers beyond the verification we perform.",
      "If a provider falls short of the expected standard, please notify us immediately via WhatsApp so we can address the issue.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Genienow is not liable for any damage, injury, or loss arising from the services provided by independent service providers in our network.",
      "We are not responsible for any dispute between a customer and a service provider, though we will assist in mediation where possible.",
      "Our total liability to you for any claim arising from our platform shall not exceed the amount you paid for the specific service in question.",
    ],
  },
  {
    title: "Prohibited Uses",
    content: [
      "You agree not to use our platform to engage providers for illegal activities or any activities that violate UAE laws and regulations.",
      "You agree not to misrepresent your requirements or provide false information when booking services.",
      "Harassment, discrimination, or disrespectful behaviour towards our team or service providers is strictly prohibited and may result in termination of service.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms are governed by the laws of the United Arab Emirates and the Emirate of Abu Dhabi.",
      "Any disputes arising from these terms or our services shall be subject to the jurisdiction of the courts of Abu Dhabi.",
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      "We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date.",
      "Continued use of our services after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white" aria-labelledby="terms-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumb
              items={[{ name: "Terms of Service", href: "/terms" }]}
              className="mb-6"
            />
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 id="terms-heading" className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              These terms govern your use of Genienow's home services platform in Abu Dhabi and the UAE. Please read them carefully before using our services.
            </p>
            <p className="text-slate-400 text-sm mt-4">
              Last updated: January 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {sections.map(({ title, content }, i) => (
              <AnimatedSection key={title} delay={i * 0.04}>
                <div className="border-b border-slate-100 pb-10 last:border-0">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">{title}</h2>
                  <div className="flex flex-col gap-3">
                    {content.map((paragraph, j) => (
                      <p key={j} className="text-slate-600 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Contact */}
            <AnimatedSection>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Questions About These Terms</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have questions about these terms, please contact us:
                </p>
                <div className="flex flex-col gap-2 text-slate-600">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${EMAIL}`} className="text-green-600 hover:underline">
                      {EMAIL}
                    </a>
                  </p>
                  <p>
                    <strong>Location:</strong> Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
