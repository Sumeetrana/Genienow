import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, ExternalLink, MapPin } from "lucide-react";
import { SERVICES, EMAIL, BUSINESS_HOURS, ADDRESS, whatsappLink } from "@/lib/constants";

const footerServices = SERVICES.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "For Individuals", href: "/for-individuals" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerLegal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* WhatsApp CTA Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-green-100 text-sm font-medium uppercase tracking-widest mb-3">
            Get Started Today
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to find your perfect service provider in Abu Dhabi?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Just send us a message on WhatsApp and we&apos;ll match you with a trusted, verified provider in Abu Dhabi — usually within the hour.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start on WhatsApp with Genienow"
            className="inline-flex items-center gap-2.5 bg-white text-green-700 font-bold px-8 py-3.5 rounded-xl hover:bg-green-50 transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Start on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Genienow — Home">
              <Image
                src="/logo.png"
                alt="Genienow"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-bold text-lg text-white">
                Genie<span className="text-green-400">now</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Connecting Abu Dhabi residents and businesses with trusted independent service providers. Simple, reliable, and always just a message away.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-green-500" aria-hidden="true" />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={15} className="text-green-500" aria-hidden="true" />
                {BUSINESS_HOURS}
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={15} className="text-green-500" aria-hidden="true" />
                {ADDRESS}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Genienow on WhatsApp"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-green-500" aria-hidden="true" />
                Email Us
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="flex flex-col gap-2">
                {footerLegal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Genienow. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Serving Abu Dhabi with care 🇦🇪
          </p>
        </div>
      </div>
    </footer>
  );
}
