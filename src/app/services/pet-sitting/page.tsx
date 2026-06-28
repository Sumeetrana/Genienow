import type { Metadata } from "next";
import { PawPrint } from "lucide-react";
import ServicePageLayout from "@/components/sections/service/ServicePageLayout";
import type { ServicePageData } from "@/components/sections/service/ServicePageLayout";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Pet Sitters in Abu Dhabi | Dog Walking & Pet Care | Genienow" },
  description:
    "Find reliable pet sitters & dog walkers in Abu Dhabi (Abudhabi). Trusted in-home care for dogs, cats & more across Khalifa City, Al Reem Island, Yas Island & beyond. Book via WhatsApp.",
  keywords: [
    "pet sitters in Abu Dhabi",
    "pet sitters in Abudhabi",
    "petsitters Abu Dhabi",
    "petsitters Abudhabi",
    "pet sitter Abu Dhabi",
    "dog walking Abu Dhabi",
    "pet sitting Abu Dhabi",
    "pet care Abu Dhabi",
    "dog walker Abu Dhabi",
    "cat sitter Abu Dhabi",
    "pet minder UAE",
    "pet care service Abu Dhabi",
    "pet sitting Abudhabi",
    "dog walker Abudhabi",
  ],
  alternates: {
    canonical: "https://www.getgenienow.com/services/pet-sitting",
  },
  openGraph: {
    title: "Pet Sitters in Abu Dhabi | Dog Walking & Pet Care | Genienow",
    description:
      "Find reliable pet sitters & dog walkers in Abu Dhabi. Trusted in-home care for dogs, cats & more across Khalifa City, Al Reem Island, Yas Island & beyond.",
    url: "https://www.getgenienow.com/services/pet-sitting",
  },
};

const faqs = [
  {
    question: "Which areas of Abu Dhabi do you provide pet sitting services?",
    answer:
      "We provide pet sitting and dog walking across Abu Dhabi including Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha, the Corniche, and surrounding communities. Message us with your location to confirm availability.",
  },
  {
    question: "Do you sit cats as well as dogs in Abu Dhabi?",
    answer:
      "Yes. We have sitters experienced with dogs, cats, and small animals. Let us know what type of pet you have and any specific needs when you reach out.",
  },
  {
    question: "Will the pet sitter come to my home?",
    answer:
      "Yes. Our pet sitters visit your pet in your own Abu Dhabi home or compound. This keeps your pet in a familiar, stress-free environment without the disruption of travel.",
  },
  {
    question: "Can I get daily updates while I'm travelling?",
    answer:
      "Absolutely. Our sitters send at least one update per visit — a message or photo — so you always know how your pet is doing, no matter where you are in the world.",
  },
  {
    question: "Can the pet sitter administer medication to my pet?",
    answer:
      "Some sitters are comfortable administering oral medications. Please mention this requirement when you contact us and we'll find a sitter with the appropriate experience.",
  },
  {
    question: "What if my pet is anxious or reactive?",
    answer:
      "Please mention any behavioural traits when you contact us. We will find a sitter with experience handling anxious or reactive animals and can arrange an introductory visit beforehand.",
  },
  {
    question: "How many dog walks per day are included?",
    answer:
      "This depends on your arrangement. Dogs in Abu Dhabi typically need 1–2 walks daily given the climate — early morning and evening. We recommend avoiding midday walks in summer. We'll plan a schedule that works for your dog.",
  },
  {
    question: "Can you provide pet care while I'm on holiday for 1–2 weeks?",
    answer:
      "Yes. Extended pet care during holidays is one of our most common requests. We arrange daily visits or a full in-home sitting arrangement depending on your pet's needs and your preference.",
  },
  {
    question: "Do you have pet sitters across all of Abu Dhabi (Abudhabi)?",
    answer:
      "Yes. Whether you search for pet sitters in Abu Dhabi or Abudhabi, our network covers the entire emirate — Khalifa City, Al Reem Island, Yas Island, Saadiyat, Al Raha, Mussafah, the Corniche, Mohammed Bin Zayed City, and surrounding communities.",
  },
];

const data: ServicePageData = {
  slug: "pet-sitting",
  title: "Pet Sitters & Dog Walkers in Abu Dhabi",
  tagline: "Love and care for your furry family",
  heroDescription:
    "Your pets deserve attentive, loving care even when you're away. Our verified pet sitters and dog walkers across Abu Dhabi — from Khalifa City to Yas Island — treat your animals like their own, keeping them safe, active, and content.",
  accentColor: "bg-violet-400",
  bgColor: "bg-violet-50",
  borderColor: "border-violet-100",
  textColor: "text-violet-700",
  icon: <PawPrint size={26} />,
  whoIsItFor: {
    heading: "Pet owners in Abu Dhabi who trust us",
    items: [
      "Working pet owners",
      "Frequent travellers",
      "Expats without local support",
      "Dog owners needing daily walks",
      "Cat owners needing home visits",
      "Multi-pet households",
      "Pet owners recovering from illness",
      "New pet owners needing guidance",
    ],
  },
  benefits: [
    {
      title: "Animal Lovers, Verified",
      description:
        "We only list pet sitters who genuinely love animals and have real experience caring for them. Your pet's comfort and safety is their priority.",
    },
    {
      title: "In-Home Care in Abu Dhabi",
      description:
        "Pets stay in the comfort of their own Abu Dhabi home. No stressful transport, unfamiliar kennels, or disruptive environment changes.",
    },
    {
      title: "Daily Updates & Photos",
      description:
        "Our pet sitters share updates — a photo or message — so you always know how your pet is doing while you're away.",
    },
    {
      title: "Routine Maintained",
      description:
        "Pets thrive on routine. We ensure feeding times, walk schedules, and play routines are followed exactly as you specify.",
    },
    {
      title: "Climate-Aware Dog Walking",
      description:
        "Abu Dhabi's climate requires careful walk timing. Our dog walkers plan early morning or evening walks to keep your dog comfortable and safe year-round.",
    },
    {
      title: "Flexible Duration",
      description:
        "A single day visit, a weekend, or a two-week holiday — we find a pet sitter who can commit to however long you need.",
    },
  ],
  includes: [
    {
      title: "Dog Walking",
      items: [
        "Morning or evening walks (climate-appropriate)",
        "Off-leash exercise (when safe)",
        "Potty breaks and outdoor time",
        "Post-walk brushing & hydration",
        "Walk update messages to owner",
        "Multiple walks per day option",
      ],
    },
    {
      title: "Home Pet Sitting",
      items: [
        "Feeding as per your schedule",
        "Fresh water replenishment",
        "Playtime and companionship",
        "Litter box cleaning (cats)",
        "Medication administration (if needed)",
        "Basic grooming (brushing)",
      ],
    },
    {
      title: "Holiday Pet Care",
      items: [
        "Multi-day extended care",
        "Holiday care for 1–4 weeks",
        "Emergency pet care",
        "Multiple daily visits",
        "Vet coordination if needed",
        "Daily photo & video updates",
      ],
    },
  ],
  howItWorks: [
    "Message us on WhatsApp with details about your pet — species, breed, age, temperament, and what care you need in Abu Dhabi.",
    "Share your dates, preferred visit times, and any special instructions (feeding schedule, medications, vet contacts).",
    "We match you with an experienced, animal-loving pet sitter available for your dates in your area of Abu Dhabi.",
    "We share the sitter's details and you can connect with them before the first visit to ensure everyone is comfortable.",
    "The sitter starts as scheduled. Expect daily updates and photos. Reach us anytime on WhatsApp if you have questions.",
  ],
  faqs,
  whatsappMessage:
    "Hi Genienow! I need a pet sitter in Abu Dhabi for my pet. Can you help?",
  relatedServices: ["house-help", "cleaning"],
};

export default function PetSittingPage() {
  return (
    <>
      <JsonLd
        schema={buildServiceSchema({
          name: "Pet Sitting & Dog Walking in Abu Dhabi",
          description:
            "Reliable pet sitters & dog walkers in Abu Dhabi. Trusted care for your pets in Khalifa City, Al Reem Island, Yas Island & more.",
          serviceType: "Pet Sitting",
          url: "/services/pet-sitting",
        })}
      />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Services", href: "/services" },
          { name: "Pet Sitting", href: "/services/pet-sitting" },
        ])}
      />
      <ServicePageLayout data={data} />
    </>
  );
}
