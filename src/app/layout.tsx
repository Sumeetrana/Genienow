import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildOrganizationSchema,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
} from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Trusted Home Services in Abu Dhabi`,
    template: `%s | ${SITE_NAME} Abu Dhabi`,
  },
  description:
    "Genienow connects Abu Dhabi residents and businesses with verified home service providers — cleaning, cooking, babysitting, house help & pet sitting. Book instantly via WhatsApp.",
  keywords: [
    "home services Abu Dhabi",
    "cleaning services Abu Dhabi",
    "maid service Abu Dhabi",
    "babysitter Abu Dhabi",
    "house cleaning Abu Dhabi",
    "office cleaning Abu Dhabi",
    "pet sitting Abu Dhabi",
    "dog walking Abu Dhabi",
    "home cook Abu Dhabi",
    "house help Abu Dhabi",
    "cleaning company Abu Dhabi",
    "Genienow",
    "GenieNow",
    "Genie Now",
    "Genienow UAE",
    "Genienow Abu Dhabi",
    "genie now home services",
  ],
  applicationName: "Genienow",
  authors: [{ name: "Genienow", url: SITE_URL }],
  creator: "Genienow",
  publisher: "Genienow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Trusted Home Services in Abu Dhabi`,
    description:
      "Connect with verified service providers for cleaning, cooking, babysitting, house help & pet sitting in Abu Dhabi — right through WhatsApp.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Genienow — Trusted Home Services in Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@genienow",
    creator: "@genienow",
    title: `${SITE_NAME} — Trusted Home Services in Abu Dhabi`,
    description:
      "Home services in Abu Dhabi built on trust. Chat with us on WhatsApp.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // Uncomment and fill in when you have verification codes
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  //   other: {
  //     "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
  //   },
  // },
  other: {
    // Google Tag Manager — add GTM-XXXXXXX when ready
    // "google-tag-manager": "GTM-XXXXXXX",
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi",
    "geo.position": "24.4539;54.3773",
    ICBM: "24.4539, 54.3773",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE" className={`${geist.variable} scroll-smooth`}>
      <head>
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <JsonLd schema={buildOrganizationSchema()} />
        <JsonLd schema={buildLocalBusinessSchema()} />
        <JsonLd schema={buildWebSiteSchema()} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
