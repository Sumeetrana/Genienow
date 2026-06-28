import type { Metadata } from "next";
import { Home } from "lucide-react";
import ServicePageLayout from "@/components/sections/service/ServicePageLayout";
import type { ServicePageData } from "@/components/sections/service/ServicePageLayout";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "House Help in Abu Dhabi | Trusted Home Assistants | Genienow" },
  description:
    "Find reliable house help in Abu Dhabi (Abudhabi) for daily chores, errands & household management. Verified home assistants in Khalifa City, Al Reem Island, Yas Island & more. Book via WhatsApp.",
  keywords: [
    "house help in Abu Dhabi",
    "house help in Abudhabi",
    "househelp Abu Dhabi",
    "home assistant Abu Dhabi",
    "domestic helper Abu Dhabi",
    "housekeeper Abu Dhabi",
    "household help Abu Dhabi",
    "home helper UAE",
    "daily help Abu Dhabi",
    "part-time helper Abu Dhabi",
    "house help Abudhabi",
    "home helper Abudhabi",
  ],
  alternates: {
    canonical: "https://www.genienow.ae/services/house-help",
  },
  openGraph: {
    title: "House Help in Abu Dhabi | Trusted Home Assistants | Genienow",
    description:
      "Find reliable house help in Abu Dhabi for daily chores, errands & household management. Verified home assistants across Khalifa City, Al Reem Island, Yas Island & more.",
    url: "https://www.genienow.ae/services/house-help",
  },
};

const faqs = [
  {
    question: "What does a house helper do?",
    answer:
      "A house helper handles everyday household tasks — from general tidying and laundry to grocery runs, dishwashing, and organising common areas. The scope is agreed upon before the first session based on your specific needs.",
  },
  {
    question: "Which areas in Abu Dhabi do you serve for house help?",
    answer:
      "We serve all major areas including Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha, Mussafah, the Corniche, and surrounding communities. Message us with your location to confirm availability.",
  },
  {
    question: "Can I book a part-time house helper in Abu Dhabi?",
    answer:
      "Yes. We offer flexible arrangements — a few hours a day, certain days of the week, or a full daily schedule. Just tell us how much support you need and we'll match you accordingly.",
  },
  {
    question: "Is the house helper identity-verified?",
    answer:
      "Yes. Every provider in our network is personally identity-verified and evaluated for their experience before being listed. You always know who is coming to your home.",
  },
  {
    question: "What is the difference between house help and cleaning?",
    answer:
      "Cleaning focuses specifically on sanitising and deep-cleaning surfaces, floors, and bathrooms. House help is broader — it covers everyday chores, laundry, tidying, errands, and general home management. Many clients use both.",
  },
  {
    question: "Can I request the same house helper each visit?",
    answer:
      "Yes. Many of our clients build a long-term relationship with the same provider. We'll do our best to ensure continuity so your helper becomes familiar with your home and preferences.",
  },
  {
    question: "Do helpers cook as well?",
    answer:
      "Some household helpers are comfortable with basic kitchen tasks. For dedicated cooking support, we recommend exploring our separate Cooking service.",
  },
  {
    question: "What if the helper does not show up?",
    answer:
      "We take reliability seriously. If a helper cannot make it, we notify you in advance and arrange an alternate wherever possible.",
  },
  {
    question: "Do you offer house help across all areas of Abu Dhabi (Abudhabi)?",
    answer:
      "Yes. Whether you search for house help in Abu Dhabi or Abudhabi, our network covers the entire emirate — Khalifa City, Al Reem Island, Yas Island, Saadiyat, Al Raha, Mussafah, Al Khalidiyah, Mohammed Bin Zayed City, and more.",
  },
];

const data: ServicePageData = {
  slug: "house-help",
  title: "Reliable House Help in Abu Dhabi",
  tagline: "Dependable help around the home",
  heroDescription:
    "Whether you need someone to handle daily chores, run errands, or provide general household support across Khalifa City, Al Reem Island, or Yas Island — our verified house helpers are dependable, trustworthy, and here when you need them.",
  accentColor: "bg-sky-400",
  bgColor: "bg-sky-50",
  borderColor: "border-sky-100",
  textColor: "text-sky-700",
  icon: <Home size={26} />,
  whoIsItFor: {
    heading: "House help for every Abu Dhabi household",
    items: [
      "Busy professionals",
      "Dual-income families",
      "New parents",
      "Senior residents",
      "Expat households",
      "Large villa owners",
      "Working couples",
      "Single parents",
      "People with mobility needs",
      "Students sharing apartments",
      "Short-term residents",
      "Holiday home owners",
    ],
  },
  benefits: [
    {
      title: "Verified & Trustworthy Helpers",
      description:
        "Every house helper is personally identity-verified. We check their background and evaluate their experience before connecting them with any Abu Dhabi household.",
    },
    {
      title: "Flexible Hours",
      description:
        "A few hours in the morning, a half-day arrangement, or a full daily schedule — we match you with a helper whose availability fits your routine.",
    },
    {
      title: "Consistent Support",
      description:
        "We aim to send you the same helper each visit so they can learn your home, your preferences, and your routines — becoming genuinely reliable support.",
    },
    {
      title: "Broad Scope of Tasks",
      description:
        "From laundry and dishwashing to tidying, grocery runs, and organising — house helpers in our network are experienced across a wide range of household tasks.",
    },
    {
      title: "Simple WhatsApp Booking",
      description:
        "Message us on WhatsApp with your location in Abu Dhabi and what you need. We'll match you with the right person and confirm the details.",
    },
    {
      title: "No Minimum Commitment",
      description:
        "Try one session and decide from there. There's no obligation to commit to a recurring schedule before you've experienced the quality first-hand.",
    },
  ],
  includes: [
    {
      title: "Daily Household Tasks",
      items: [
        "General tidying and organising",
        "Laundry, washing & folding",
        "Dishwashing and kitchen tidying",
        "Bin management and hygiene",
        "Light surface wiping",
        "Making beds and changing linen",
      ],
    },
    {
      title: "Errands & Support",
      items: [
        "Grocery shopping runs",
        "Pharmacy and errand trips",
        "Receiving deliveries",
        "Arranging and organising spaces",
        "Wardrobe organisation",
        "Basic home admin support",
      ],
    },
    {
      title: "Extended Household Help",
      items: [
        "Post-travel home reset",
        "Pre-guest preparation",
        "Recovery-period support",
        "Post-event tidying",
        "Seasonal decluttering",
        "Coordinating with other providers",
      ],
    },
  ],
  howItWorks: [
    "Send us a WhatsApp message describing the type of household support you need and your Abu Dhabi address.",
    "Tell us your preferred schedule — hours per day, days per week, and any specific tasks you want handled.",
    "We match you with a verified house helper whose experience and availability fits your requirements.",
    "We confirm the booking and share the helper's details before the first visit so you know exactly who is coming.",
    "The helper arrives and gets started. After the visit, share your feedback so we can ensure consistency going forward.",
  ],
  faqs,
  whatsappMessage:
    "Hi Genienow! I'm looking for reliable house help in Abu Dhabi. Can you assist?",
  relatedServices: ["cleaning", "cooking"],
};

export default function HouseHelpPage() {
  return (
    <>
      <JsonLd
        schema={buildServiceSchema({
          name: "House Help & Home Assistants in Abu Dhabi",
          description:
            "Reliable house help for daily chores, errands & household management in Abu Dhabi. Trusted home assistants across Khalifa City, Al Reem Island & more.",
          serviceType: "Household Help",
          url: "/services/house-help",
        })}
      />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Services", href: "/services" },
          { name: "House Help", href: "/services/house-help" },
        ])}
      />
      <ServicePageLayout data={data} />
    </>
  );
}
