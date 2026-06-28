import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { buildFAQSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Trusted Home & Business Services in Abu Dhabi | Genienow",
  description:
    "Book verified cleaners, cooks, babysitters & house helpers in Abu Dhabi for homes, offices, shops & restaurants — all via WhatsApp. Serving Khalifa City, Al Reem Island, Yas Island, Saadiyat & across Abu Dhabi.",
  keywords: [
    "home services Abu Dhabi",
    "business services Abu Dhabi",
    "cleaning services Abu Dhabi",
    "office cleaning Abu Dhabi",
    "babysitter Abu Dhabi",
    "house cleaning Abu Dhabi",
    "maid service Abu Dhabi",
    "home cook Abu Dhabi",
    "house help Abu Dhabi",
    "pet sitting Abu Dhabi",
    "commercial cleaning Abu Dhabi",
    "Genienow",
    "Genienow UAE",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Trusted Home Services in Abu Dhabi | Genienow",
    description:
      "Connect with verified service providers for cleaning, cooking, babysitting, house help & pet sitting in Abu Dhabi — right through WhatsApp.",
    url: SITE_URL,
  },
};

const homepageFaqs = [
  {
    question: "How do I book a home service in Abu Dhabi?",
    answer:
      "All bookings are handled through WhatsApp. Send us a message, describe what you need, and our team will find a verified provider and confirm your booking — usually within the hour.",
  },
  {
    question: "Which areas of Abu Dhabi do you serve?",
    answer:
      "We serve all major areas of Abu Dhabi including Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha, Mussafah, Al Maryah Island, the Corniche, Al Khalidiyah, and surrounding communities. Message us with your location to confirm availability.",
  },
  {
    question: "Are your service providers verified?",
    answer:
      "Yes. Every provider in our network goes through a personal identity and background verification before being listed. We check their identity and ensure they have relevant experience before sending them to any home.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payment details are discussed and agreed upon before the service begins. We support cash and bank transfer. Everything is communicated clearly upfront so there are no surprises.",
  },
  {
    question: "Can I schedule a service in advance?",
    answer:
      "Absolutely. You can book a service for the same day or plan ahead — weekly, monthly, or on specific dates. Just let us know your preferred schedule when you reach out.",
  },
  {
    question: "Can businesses use Genienow?",
    answer:
      "Yes. We work with offices, small businesses, clinics, retail stores, and restaurants in Abu Dhabi for regular cleaning, housekeeping, and support staff. Reach out on WhatsApp and we'll discuss your business needs.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction matters. If something didn't go as expected, let us know directly on WhatsApp. We'll address the concern and, where appropriate, arrange for a re-service or find a better-suited provider.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account needed. Everything happens through WhatsApp — just send us a message and we take care of the rest. No app downloads, no sign-ups.",
  },
  {
    question: "What services does Genienow offer in Abu Dhabi?",
    answer:
      "We offer Cleaning (residential and commercial), House Help, Cooking, Babysitting, and Pet Sitting across Abu Dhabi and the UAE.",
  },
  {
    question: "Can I request the same provider each time?",
    answer:
      "Yes. If you've had a positive experience with a specific provider, you can request them for future visits. We will do our best to accommodate recurring bookings with the same person.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={buildFAQSchema(homepageFaqs)} />
      <HeroSection />
      <TrustSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <FAQSection faqs={homepageFaqs} />
    </>
  );
}
