import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Genienow Abu Dhabi",
  description:
    "Get in touch with Genienow for home services in Abu Dhabi. Fastest response via WhatsApp — cleaners, babysitters, cooks & more across Abu Dhabi, UAE.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Genienow | Home Services Abu Dhabi",
    description:
      "Get in touch with Genienow for home services in Abu Dhabi. Fastest response via WhatsApp.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Contact", href: "/contact" },
        ])}
      />
      <ContactClient />
    </>
  );
}
