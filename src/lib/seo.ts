import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SERVICE_AREAS } from "./constants";

// ─── Metadata helpers ────────────────────────────────────────────────────────

interface PageMetaInput {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  path,
  ogImage = "/og-default.jpg",
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "Abu Dhabi",
      "UAE",
      "home services Abu Dhabi",
      "Genienow",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
      images: [{ url: `${SITE_URL}${ogImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
}

// ─── JSON-LD schema builders ─────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Genienow",
    alternateName: ["GenieNow", "Genie Now", "Genie Now Abu Dhabi"],
    legalName: "Genienow",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
      caption: "Genienow",
    },
    image: {
      "@id": `${SITE_URL}/#logo`,
    },
    description:
      "Genienow is Abu Dhabi's trusted home services marketplace, connecting residents and businesses with verified independent service providers for cleaning, cooking, babysitting, house help, and pet sitting.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971509876543",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Abu Dhabi",
      sameAs: "https://www.wikidata.org/wiki/Q5765",
    },
    sameAs: [],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Genienow",
    alternateName: ["GenieNow", "Genie Now"],
    description:
      "Home services marketplace in Abu Dhabi, UAE — cleaning, cooking, babysitting, house help & pet sitting via WhatsApp.",
    url: SITE_URL,
    telephone: "+971509876543",
    email: "hello@genienow.ae",
    priceRange: "$$",
    image: `${SITE_URL}/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.4539",
      longitude: "54.3773",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: `${area}, Abu Dhabi`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Cleaning Abu Dhabi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Help Abu Dhabi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Cooking Abu Dhabi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Babysitting Abu Dhabi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pet Sitting Abu Dhabi" } },
      ],
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Genienow",
    alternateName: ["GenieNow", "Genie Now"],
    url: SITE_URL,
    description:
      "Abu Dhabi's trusted home services marketplace — cleaning, cooking, babysitting, house help & pet sitting.",
    inLanguage: "en-AE",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  serviceType,
  url,
  areaServed = "Abu Dhabi",
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${url}`,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AED",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}/og-default.jpg`,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };
}
