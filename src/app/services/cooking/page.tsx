import type { Metadata } from "next";
import { ChefHat } from "lucide-react";
import ServicePageLayout from "@/components/sections/service/ServicePageLayout";
import type { ServicePageData } from "@/components/sections/service/ServicePageLayout";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Cooks in Abu Dhabi | Home Cook & Personal Chef Service | Genienow" },
  description:
    "Hire experienced cooks in Abu Dhabi (Abudhabi) for daily meals, meal prep & special occasions. Arabic, Indian, Western cuisines & more. Verified home cooks. Book via WhatsApp.",
  keywords: [
    "cooks in Abu Dhabi",
    "cooks in Abudhabi",
    "home cook Abu Dhabi",
    "personal chef Abu Dhabi",
    "cook for home Abu Dhabi",
    "cooking service Abu Dhabi",
    "home cooking UAE",
    "meal prep Abu Dhabi",
    "private chef Abu Dhabi",
    "daily cook Abu Dhabi",
    "cooks Abudhabi",
    "home cook Abudhabi",
    "cooking service Abudhabi",
  ],
  alternates: {
    canonical: "https://www.getgenienow.com/services/cooking",
  },
  openGraph: {
    title: "Cooks in Abu Dhabi | Home Cook & Personal Chef Service | Genienow",
    description:
      "Hire experienced home cooks in Abu Dhabi for daily meals, meal prep & special occasions. Arabic, Indian, Western cuisines & more.",
    url: "https://www.getgenienow.com/services/cooking",
  },
};

const faqs = [
  {
    question: "Which cuisines can your home cooks prepare in Abu Dhabi?",
    answer:
      "Our home cooks are experienced in a wide range of cuisines popular in Abu Dhabi — Arabic (machboos, mandi, mezze), South Asian (Indian, Pakistani, Sri Lankan), Western, Filipino, and more. Let us know your preference and we'll match accordingly.",
  },
  {
    question: "Does the cook bring ingredients?",
    answer:
      "This is discussed during booking. Typically, ingredients are provided by you or agreed on in advance. Some cooks can assist with grocery purchase — the cost is reimbursed by you. We clarify this before confirming.",
  },
  {
    question: "Which areas of Abu Dhabi do you serve for cooking?",
    answer:
      "We serve all major areas of Abu Dhabi including Khalifa City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha, Mussafah, the Corniche, and surrounding communities.",
  },
  {
    question: "Can I hire a cook for Ramadan iftar and suhoor?",
    answer:
      "Yes. Ramadan cooking is one of our most popular requests during the holy month. We match you with cooks experienced in traditional Ramadan dishes and timing.",
  },
  {
    question: "How many people can one cook prepare food for?",
    answer:
      "Most of our cooks can comfortably prepare food for 2–8 people. For larger households or events, please mention the number when you contact us.",
  },
  {
    question: "Can the cook accommodate dietary restrictions?",
    answer:
      "Yes. We match cooks based on your dietary requirements — halal (standard in Abu Dhabi), vegetarian, vegan, gluten-free, diabetic-friendly, and others. Please specify when you contact us.",
  },
  {
    question: "Can I request a cook for a special occasion or dinner party?",
    answer:
      "Absolutely. We help with one-time occasions — private dinners, family gatherings, and special meals. Tell us the occasion, number of guests, and cuisine, and we'll find the right cook.",
  },
  {
    question: "What if I want to try a cook before committing to a regular schedule?",
    answer:
      "You can start with a single session. Many clients begin with one meal to evaluate whether the cook suits their taste before setting up a recurring arrangement.",
  },
  {
    question: "Do you have cooks available across all of Abu Dhabi (Abudhabi)?",
    answer:
      "Yes. Whether you search for cooks in Abu Dhabi or Abudhabi, we cover all areas including Khalifa City, Al Reem Island, Yas Island, Saadiyat, Al Raha, Mussafah, the Corniche, and Mohammed Bin Zayed City.",
  },
];

const data: ServicePageData = {
  slug: "cooking",
  title: "Home Cooks & Personal Chefs in Abu Dhabi",
  tagline: "Home-cooked meals made easy",
  heroDescription:
    "Fresh, nutritious, home-cooked meals prepared by experienced cooks who understand Abu Dhabi's diverse palate — Arabic, South Asian, Western, and beyond. Your kitchen, your taste, no compromise.",
  accentColor: "bg-orange-400",
  bgColor: "bg-orange-50",
  borderColor: "border-orange-100",
  textColor: "text-orange-700",
  icon: <ChefHat size={26} />,
  whoIsItFor: {
    heading: "Who our cooking service serves in Abu Dhabi",
    items: [
      "Busy working professionals",
      "Expat families missing home food",
      "Senior residents",
      "New parents with limited time",
      "People with dietary restrictions",
      "Households wanting Arabic cuisine",
      "Remote workers skipping takeout",
      "Families hosting guests",
    ],
  },
  benefits: [
    {
      title: "Experienced Home Cooks",
      description:
        "Our cooks bring real kitchen experience — they manage multiple dishes, time meals well, and adapt to your taste and dietary requirements.",
    },
    {
      title: "Diverse Cuisines",
      description:
        "Arabic, Levantine, Indian, Pakistani, Filipino, Continental — we match you with a cook whose expertise matches the cuisine your household loves.",
    },
    {
      title: "Halal as Standard",
      description:
        "All food prepared through Genienow in Abu Dhabi follows halal standards. Dietary requirements are confirmed and respected before the first session.",
    },
    {
      title: "Daily or Weekly Plans",
      description:
        "Whether you need someone to cook lunch every day, prepare a week's worth of meals, or cook for a special occasion, we have an arrangement that fits.",
    },
    {
      title: "Clean Kitchen Guarantee",
      description:
        "Our cooks maintain kitchen cleanliness during and after cooking. The kitchen is left tidy when they leave.",
    },
    {
      title: "Transparent Pricing in AED",
      description:
        "Pricing is shared upfront in AED based on the number of meals, people, and cuisine complexity. No hidden charges.",
    },
  ],
  includes: [
    {
      title: "Daily Cooking",
      items: [
        "Breakfast, lunch, or dinner",
        "Meals for 2–8 people",
        "Arabic & international cuisine",
        "Halal by default",
        "Lunchbox meal prep",
        "Children's meal preparation",
      ],
    },
    {
      title: "Weekly Meal Prep",
      items: [
        "Batch cooking for the week",
        "Freezer-friendly meal prep",
        "Weekly menu planning",
        "Protein & carb batch prep",
        "Salads and cold prep items",
        "Custom dietary meal plans",
      ],
    },
    {
      title: "Special Occasions",
      items: [
        "Ramadan iftar & suhoor",
        "Private dinner parties",
        "Family gatherings",
        "Eid celebration cooking",
        "Diabetic & health-specific meals",
        "Baby and toddler meal prep",
      ],
    },
  ],
  howItWorks: [
    "Message us on WhatsApp and tell us you're looking for a home cook — for daily meals, weekly prep, or a special occasion in Abu Dhabi.",
    "Share your preferences: number of people, meal types, cuisine, dietary restrictions, and your preferred schedule.",
    "We match you with an experienced cook who specialises in your preferred cuisine and is available in your area.",
    "We confirm the arrangement and share the cook's profile before the first visit.",
    "The cook arrives at the agreed time, prepares your meals, and leaves the kitchen clean. Share feedback with us afterwards.",
  ],
  faqs,
  whatsappMessage:
    "Hi Genienow! I'm looking for a home cook in Abu Dhabi. Can you help me find one?",
  relatedServices: ["house-help", "cleaning"],
};

export default function CookingPage() {
  return (
    <>
      <JsonLd
        schema={buildServiceSchema({
          name: "Home Cook & Personal Chef Services in Abu Dhabi",
          description:
            "Hire an experienced home cook or personal chef in Abu Dhabi for daily meals, meal prep & special occasions. Arabic, Indian, Western cuisines & more.",
          serviceType: "Cooking Service",
          url: "/services/cooking",
        })}
      />
      <JsonLd schema={buildFAQSchema(faqs)} />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Services", href: "/services" },
          { name: "Cooking", href: "/services/cooking" },
        ])}
      />
      <ServicePageLayout data={data} />
    </>
  );
}
