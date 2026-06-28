import type { Metadata } from "next";
import { Baby } from "lucide-react";
import ServicePageLayout from "@/components/sections/service/ServicePageLayout";
import type { ServicePageData } from "@/components/sections/service/ServicePageLayout";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Babysitters in Abu Dhabi | Trusted Childcare | Genienow" },
  description:
    "Find a verified babysitter in Abu Dhabi (Abudhabi) for evening, weekend & emergency childcare. Safe, caring sitters in Khalifa City, Al Reem Island, Yas Island & more. Book via WhatsApp.",
  keywords: [
    "babysitters in Abu Dhabi",
    "babysitters in Abudhabi",
    "babysitter Abu Dhabi",
    "babysitting services Abu Dhabi",
    "childcare Abu Dhabi",
    "babysitter near me Abu Dhabi",
    "trusted babysitter UAE",
    "nanny Abu Dhabi",
    "child minder Abu Dhabi",
    "emergency babysitter Abu Dhabi",
    "babysitters Abudhabi",
    "baby sitters Abu Dhabi",
    "baby sitters Abudhabi",
  ],
  alternates: {
    canonical: "https://www.getgenienow.com/services/babysitting",
  },
  openGraph: {
    title: "Babysitters in Abu Dhabi | Trusted Childcare | Genienow",
    description:
      "Find a verified babysitter in Abu Dhabi for evening, weekend & emergency childcare. Serving Khalifa City, Al Reem Island, Yas Island & more.",
    url: "https://www.getgenienow.com/services/babysitting",
  },
};

const faqs = [
  {
    question: "Which areas in Abu Dhabi do you provide babysitting services?",
    answer:
      "We provide babysitting across Abu Dhabi including Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha, Mussafah, the Corniche, and Al Khalidiyah. Message us with your location to confirm availability.",
  },
  {
    question: "Are your babysitters experienced with infants?",
    answer:
      "Yes. We have babysitters with specific experience caring for infants and very young children. Please mention your child's age when you contact us so we can match appropriately.",
  },
  {
    question: "How do I know the babysitter is trustworthy?",
    answer:
      "Every babysitter goes through a personal identity verification process. We check their documents and evaluate their childcare experience and references before listing them in our network.",
  },
  {
    question: "Can I meet the babysitter before the first visit?",
    answer:
      "Yes. We can arrange an introductory call or in-person meeting with the babysitter before the first session so you and your child can get comfortable first.",
  },
  {
    question: "What if my child has specific medical or dietary needs?",
    answer:
      "Please share this information when you contact us. We will find a babysitter who has experience or is comfortable with your child's specific needs, and brief them before the first visit.",
  },
  {
    question: "Is emergency or same-day babysitting available in Abu Dhabi?",
    answer:
      "We do our best to accommodate urgent requests. Availability depends on timing and location, but we always try to find a solution quickly — just send us a WhatsApp message.",
  },
  {
    question: "Is overnight babysitting available?",
    answer:
      "We can discuss this case by case. Please reach out with your specific requirement and dates and we will do our best to assist.",
  },
  {
    question: "What happens if the babysitter needs to cancel?",
    answer:
      "We take cancellations seriously. If a babysitter cancels, we will notify you as early as possible and do our best to find an alternative.",
  },
  {
    question: "Do you have babysitters across all of Abu Dhabi (Abudhabi)?",
    answer:
      "Yes. Whether you search for babysitters in Abu Dhabi or Abudhabi, our childcare network covers the entire emirate — Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha, Mussafah, the Corniche, Al Khalidiyah, and more.",
  },
];

const data: ServicePageData = {
  slug: "babysitting",
  title: "Trusted Babysitters in Abu Dhabi",
  tagline: "Safe, caring hands for your little ones",
  heroDescription:
    "Finding trustworthy childcare in Abu Dhabi shouldn't be stressful. Our carefully verified babysitters across Khalifa City, Al Reem Island, and Yas Island are warm, responsible, and genuinely child-focused — giving you real peace of mind when you step away.",
  accentColor: "bg-pink-400",
  bgColor: "bg-pink-50",
  borderColor: "border-pink-100",
  textColor: "text-pink-700",
  icon: <Baby size={26} />,
  whoIsItFor: {
    heading: "Parents in Abu Dhabi who rely on us",
    items: [
      "Working parents",
      "Expat families without local support",
      "Parents with evening commitments",
      "Parents attending events or travel",
      "Single parents needing breaks",
      "Parents of infants & toddlers",
      "Parents of older children",
      "Families needing emergency cover",
    ],
  },
  benefits: [
    {
      title: "Thoroughly Verified Babysitters",
      description:
        "We verify every babysitter's identity, check their experience with children, and only list those who demonstrate genuine care and responsibility.",
    },
    {
      title: "Child-Centred Approach",
      description:
        "Our babysitters come with patience, engagement skills, and a natural affinity for children. They know how to keep kids happy, safe, and occupied.",
    },
    {
      title: "Flexible Timing",
      description:
        "Evening hours, full days, weekends, or just for a few hours — we match you with someone who fits your timing and schedule needs in Abu Dhabi.",
    },
    {
      title: "Emergency Availability",
      description:
        "Sometimes childcare needs arise unexpectedly. Message us and we'll do our best to find an available babysitter in Abu Dhabi at short notice.",
    },
    {
      title: "Age-Appropriate Care",
      description:
        "Infants, toddlers, school-age children — we match your child's age with a babysitter who has specific experience at that developmental stage.",
    },
    {
      title: "Transparent Communication",
      description:
        "We share the babysitter's profile with you before the visit. You always know who is coming to care for your child in Abu Dhabi.",
    },
  ],
  includes: [
    {
      title: "Occasional Babysitting",
      items: [
        "One-time evening care",
        "School holiday coverage",
        "Appointment or errand cover",
        "Date night childcare",
        "Event babysitting",
        "Single-day coverage",
      ],
    },
    {
      title: "Regular Childcare",
      items: [
        "Fixed weekday babysitting",
        "Weekly scheduled care",
        "After-school supervision",
        "Weekend recurring babysitting",
        "Morning or afternoon coverage",
        "Part-time nanny arrangements",
      ],
    },
    {
      title: "Emergency & Urgent Care",
      items: [
        "Same-day babysitter requests",
        "Unexpected travel coverage",
        "Illness-related emergency care",
        "Late-night care for emergencies",
        "Backup when regular care falls through",
        "Short-notice weekend coverage",
      ],
    },
  ],
  howItWorks: [
    "Message us on WhatsApp with your childcare requirement — including your child's age, preferred timing, and any specific needs in Abu Dhabi.",
    "Share your location in Abu Dhabi and how long you need the babysitter for. Let us know about any special considerations (dietary, medical, etc.).",
    "We identify a verified babysitter with experience relevant to your child's age and your requirements.",
    "We share the babysitter's profile and confirm the booking. You can ask questions before agreeing.",
    "The babysitter arrives at the agreed time. You can reach us on WhatsApp for anything during the session.",
  ],
  faqs,
  whatsappMessage:
    "Hi Genienow! I'm looking for a trusted babysitter in Abu Dhabi. Can you help me?",
  relatedServices: ["house-help", "cooking"],
};

export default function BabysittingPage() {
  return (
    <>
      <JsonLd
        schema={buildServiceSchema({
          name: "Trusted Babysitting Services in Abu Dhabi",
          description:
            "Find a verified babysitter in Abu Dhabi for evening, weekend & emergency childcare. Safe, caring & child-focused sitters.",
          serviceType: "Babysitting",
          url: "/services/babysitting",
        })}
      />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Services", href: "/services" },
          { name: "Babysitting", href: "/services/babysitting" },
        ])}
      />
      <ServicePageLayout data={data} />
    </>
  );
}
