import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import ServicePageLayout from "@/components/sections/service/ServicePageLayout";
import type { ServicePageData } from "@/components/sections/service/ServicePageLayout";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Cleaners in Abu Dhabi | House, Villa & Office Cleaning | Genienow" },
  description:
    "Find verified cleaners in Abu Dhabi for house, villa & office cleaning. Serving Khalifa City, Al Reem Island, Yas Island, Saadiyat & more across Abu Dhabi (Abudhabi). Book via WhatsApp.",
  keywords: [
    "cleaners in Abu Dhabi",
    "cleaners in Abudhabi",
    "cleaning services Abu Dhabi",
    "house cleaning Abu Dhabi",
    "office cleaning Abu Dhabi",
    "maid service Abu Dhabi",
    "deep cleaning Abu Dhabi",
    "cleaning company Abu Dhabi",
    "cleaner Abu Dhabi",
    "domestic cleaning Abu Dhabi",
    "villa cleaning Abu Dhabi",
    "apartment cleaning Abu Dhabi",
    "cleaning services Abudhabi",
    "house cleaners Abudhabi",
  ],
  alternates: {
    canonical: "https://www.genienow.ae/services/cleaning",
  },
  openGraph: {
    title: "Cleaners in Abu Dhabi | House, Villa & Office Cleaning | Genienow",
    description:
      "Find verified cleaners in Abu Dhabi for house, villa & office cleaning. Serving Khalifa City, Al Reem Island, Yas Island, Saadiyat & more.",
    url: "https://www.genienow.ae/services/cleaning",
  },
};

const faqs = [
  {
    question: "Which areas of Abu Dhabi do you provide cleaning services in?",
    answer:
      "We provide cleaning services across Abu Dhabi including Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha, Mussafah, the Corniche, Al Khalidiyah, Al Mushrif, and Mohammed Bin Zayed City. Message us with your location to confirm availability.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "This depends on the arrangement. Some providers bring their own supplies; others use yours. We will clarify this when we confirm your booking so there are no surprises on the day.",
  },
  {
    question: "How long does a typical cleaning session take in Abu Dhabi?",
    answer:
      "Duration depends on the size of your space and the type of cleaning. A 1-bedroom apartment typically takes 2–3 hours; a 3-bedroom villa can take 5–6 hours. We'll give you an estimate when you contact us.",
  },
  {
    question: "Can I book a regular weekly cleaner in Abu Dhabi?",
    answer:
      "Yes. Many of our Abu Dhabi clients have recurring schedules — weekly, bi-weekly, or daily for offices. Just tell us your preferred frequency and we'll set it up.",
  },
  {
    question: "Do you offer villa cleaning in Abu Dhabi?",
    answer:
      "Yes. We clean villas, townhouses, and compounds across Abu Dhabi, including areas like Khalifa City, Saadiyat Island, and Al Raha Beach. Please describe your villa size when you get in touch.",
  },
  {
    question: "Do you offer office and commercial cleaning in Abu Dhabi?",
    answer:
      "Yes. We work with offices, co-working spaces, retail stores, clinics, and restaurants across Abu Dhabi. Contact us with details about your establishment and we'll put together a plan.",
  },
  {
    question: "Is the cleaner background-verified?",
    answer:
      "Yes. Every cleaner in our network goes through a personal identity and background verification before being listed. We check their documents and evaluate their experience before connecting them with any home.",
  },
  {
    question: "Can I request the same cleaner for future visits?",
    answer:
      "Absolutely. If you've had a positive experience with a cleaner, you can request them for future visits and we'll do our best to accommodate, helping you build a consistent relationship.",
  },
  {
    question: "Do you provide cleaners across all of Abu Dhabi (Abudhabi)?",
    answer:
      "Yes — whether you write it as Abu Dhabi or Abudhabi, we cover the full emirate. Our cleaning network spans Khalifa City, Al Reem Island, Yas Island, Saadiyat, Mussafah, Al Raha, the Corniche, Mohammed Bin Zayed City, and beyond.",
  },
];

const data: ServicePageData = {
  slug: "cleaning",
  title: "Professional Cleaners in Abu Dhabi",
  tagline: "Spotless spaces, every time",
  heroDescription:
    "From apartments on Al Reem Island to villas in Khalifa City, our verified cleaners deliver a thorough, professional clean — tailored to your schedule and your standards. No shortcuts, no surprises.",
  accentColor: "bg-emerald-400",
  bgColor: "bg-emerald-50",
  borderColor: "border-emerald-100",
  textColor: "text-emerald-700",
  icon: <Sparkles size={26} />,
  whoIsItFor: {
    heading: "Cleaning that works for everyone in Abu Dhabi",
    items: [
      "Busy professionals",
      "Expat families",
      "Working couples",
      "Senior residents",
      "Landlords & tenants",
      "Office managers",
      "Retail store owners",
      "Restaurant owners",
      "Clinic administrators",
      "Small business owners",
      "Co-working spaces",
      "Staff accommodations",
    ],
  },
  benefits: [
    {
      title: "Verified & Experienced Cleaners",
      description:
        "Every cleaner is personally verified. We ensure they have the right experience and approach before connecting them with your home or workspace in Abu Dhabi.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "One-off deep clean, weekly maintenance, or daily office cleaning — we build a schedule that fits your life or business operations in Abu Dhabi.",
    },
    {
      title: "Residential & Commercial",
      description:
        "We handle apartments, villas, offices, retail stores, restaurants, clinics, and more across Abu Dhabi. Same trusted process, scaled to your space.",
    },
    {
      title: "Consistent Quality",
      description:
        "We follow up after each service. If something was missed or didn't meet your expectation, we sort it out — no questions asked.",
    },
    {
      title: "Simple WhatsApp Booking",
      description:
        "Just send us a WhatsApp message. Tell us your Abu Dhabi address, preferred time, and any special requirements. We take it from there.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Pricing is discussed upfront in AED based on your space size and requirements. You always know what you're paying before the cleaner arrives.",
    },
  ],
  includes: [
    {
      title: "Apartments & Villas",
      items: [
        "Living room deep cleaning",
        "Kitchen & appliance cleaning",
        "Bathroom & toilet sanitisation",
        "Bedroom dusting & mopping",
        "Balcony & window cleaning",
        "Move-in / move-out cleaning",
      ],
    },
    {
      title: "Offices & Co-working Spaces",
      items: [
        "Desk & workspace cleaning",
        "Common area maintenance",
        "Washroom sanitisation",
        "Pantry & break room cleaning",
        "Floor mopping & vacuuming",
        "Daily or weekly scheduling",
      ],
    },
    {
      title: "Commercial Spaces",
      items: [
        "Retail store cleaning",
        "Restaurant kitchen & floor cleaning",
        "Clinic & healthcare space sanitisation",
        "Post-event cleaning",
        "Staff accommodation upkeep",
        "Customised frequency schedules",
      ],
    },
  ],
  howItWorks: [
    "Send us a WhatsApp message describing your Abu Dhabi property — apartment, villa, office, or commercial space — and the type of cleaning you need.",
    "Tell us your preferred date, time, and any specific requirements (deep clean, post-renovation, regular maintenance, or move-in/out clean).",
    "We match you with a verified cleaner who has experience with your type of space and area in Abu Dhabi.",
    "We confirm the booking and share the cleaner's details before the appointment so you know exactly who is coming.",
    "The cleaner arrives at the agreed time and completes the job. You share feedback with us afterwards.",
  ],
  faqs,
  whatsappMessage:
    "Hi Genienow! I'm interested in your cleaning service in Abu Dhabi. Can you help me?",
  relatedServices: ["house-help", "cooking"],
};

export default function CleaningPage() {
  return (
    <>
      <JsonLd
        schema={buildServiceSchema({
          name: "Professional Cleaning Services in Abu Dhabi",
          description:
            "Expert house cleaning, office cleaning & maid services in Abu Dhabi. Verified cleaners serving Khalifa City, Al Reem Island, Yas Island & more.",
          serviceType: "Cleaning Service",
          url: "/services/cleaning",
        })}
      />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Services", href: "/services" },
          { name: "Cleaning", href: "/services/cleaning" },
        ])}
      />
      <ServicePageLayout data={data} />
    </>
  );
}
