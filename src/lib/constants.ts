export const SITE_URL = "https://www.genienow.ae";
export const SITE_NAME = "Genienow";

export const WHATSAPP_NUMBER = "971502984394";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "hello@genienow.ae";
export const PHONE_DISPLAY = "+971 50 298 4394";
export const BUSINESS_HOURS = "Sun–Thu, 8 AM – 8 PM GST";
export const ADDRESS = "Abu Dhabi, United Arab Emirates";

export function whatsappLink(message?: string) {
  const text = message ?? "Hi Genienow! I'd like to know more about your home services in Abu Dhabi.";
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export const SERVICE_AREAS = [
  "Khalifa City",
  "Al Reem Island",
  "Yas Island",
  "Saadiyat Island",
  "Al Raha",
  "Mussafah",
  "Al Maryah Island",
  "Corniche",
  "Al Khalidiyah",
  "Tourist Club Area",
  "Al Mushrif",
  "Mohammed Bin Zayed City",
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "For Individuals", href: "/for-individuals" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "cleaning",
    title: "Cleaning",
    tagline: "Spotless spaces, every time.",
    description:
      "Professional residential and commercial cleaning in Abu Dhabi tailored to your schedule and standards.",
    icon: "Sparkles",
    color: "from-emerald-50 to-teal-50",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    slug: "house-help",
    title: "House Help",
    tagline: "Dependable help around the home.",
    description:
      "Reliable household assistance for daily chores, errands, and general upkeep across Abu Dhabi — on your terms.",
    icon: "Home",
    color: "from-sky-50 to-blue-50",
    accent: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    slug: "cooking",
    title: "Cooking",
    tagline: "Home-cooked meals made easy.",
    description:
      "Experienced home cooks who prepare fresh, wholesome meals that match your taste and dietary preferences.",
    icon: "ChefHat",
    color: "from-orange-50 to-amber-50",
    accent: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    slug: "babysitting",
    title: "Babysitting",
    tagline: "Safe, caring hands for your little ones.",
    description:
      "Trusted babysitters in Abu Dhabi who keep children engaged, safe, and happy — whenever you need a break.",
    icon: "Baby",
    color: "from-pink-50 to-rose-50",
    accent: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    slug: "pet-sitting",
    title: "Pet Sitting",
    tagline: "Love and care for your furry family.",
    description:
      "Attentive pet sitters and dog walkers in Abu Dhabi who treat your pets like their own.",
    icon: "PawPrint",
    color: "from-violet-50 to-purple-50",
    accent: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];
