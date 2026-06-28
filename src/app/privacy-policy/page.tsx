import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { SITE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Genienow Abu Dhabi",
  description:
    "Genienow's privacy policy — how we collect, use, and protect your personal information when you use our home services platform in Abu Dhabi, UAE.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you contact us through WhatsApp or our website, we may collect your name, phone number, email address, and service location (your area within Abu Dhabi or the UAE).",
      "We collect information you provide when describing your service requirements, including the type of service, preferred schedule, and any relevant details about your home or establishment.",
      "We may collect feedback and ratings you provide about service providers after a booking.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To match you with appropriate, verified service providers in Abu Dhabi based on your requirements.",
      "To confirm and coordinate bookings, communicate service details, and follow up after services are completed.",
      "To improve the quality of our services and the providers in our network.",
      "To respond to enquiries and provide customer support.",
      "We do not use your personal information for unsolicited marketing without your consent.",
    ],
  },
  {
    title: "How We Share Your Information",
    content: [
      "We share relevant details (such as your address, schedule, and service requirements) with the service provider assigned to your booking. This is necessary to complete the service.",
      "We do not sell, rent, or trade your personal information to third parties for their marketing purposes.",
      "We may share information if required to do so by law or in response to legal requests from authorities in the UAE.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your information for as long as necessary to provide our services and fulfil any legal obligations.",
      "You may request deletion of your personal data by contacting us at the email address below. We will honour such requests in accordance with applicable UAE data protection laws.",
    ],
  },
  {
    title: "WhatsApp Communications",
    content: [
      "Our primary communication channel is WhatsApp. When you initiate contact, you consent to receiving messages related to your service booking and enquiry through this channel.",
      "WhatsApp conversations are subject to WhatsApp's own privacy policy and terms of service.",
    ],
  },
  {
    title: "Security",
    content: [
      "We take reasonable precautions to protect your personal information from unauthorised access, disclosure, or misuse.",
      "However, no method of transmission over the internet or electronic storage is entirely secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or request deletion of your personal information.",
      "You may opt out of communications at any time by informing us via WhatsApp or email.",
      "To exercise any of these rights, please contact us at the details below.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time. We will notify you of significant changes by updating the date at the bottom of this page.",
      "Continued use of our services after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white" aria-labelledby="privacy-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumb
              items={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
              className="mb-6"
            />
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 id="privacy-heading" className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              This policy explains how Genienow collects, uses, and protects your personal information when you use our home services platform in Abu Dhabi and the UAE.
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
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have questions about this privacy policy or how we handle your personal data, please contact us:
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
