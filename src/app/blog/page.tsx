import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Home Services Tips & Guides for Abu Dhabi | Genienow",
  description:
    "Practical tips, guides and advice on home services in Abu Dhabi — cleaning, babysitting, cooking, house help & pet care for UAE residents.",
  keywords: [
    "home services blog Abu Dhabi",
    "cleaning tips Abu Dhabi",
    "babysitter guide UAE",
    "home cook Abu Dhabi guide",
    "pet care Abu Dhabi",
    "house cleaning tips UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog — Home Services Tips & Guides for Abu Dhabi | Genienow",
    description:
      "Practical tips, guides and advice on home services in Abu Dhabi — cleaning, babysitting, cooking, house help & pet care for UAE residents.",
    url: `${SITE_URL}/blog`,
  },
};

const categoryColors: Record<string, string> = {
  Cleaning: "bg-emerald-50 text-emerald-700",
  "House Help": "bg-sky-50 text-sky-700",
  Cooking: "bg-orange-50 text-orange-700",
  Babysitting: "bg-pink-50 text-pink-700",
  "Pet Sitting": "bg-violet-50 text-violet-700",
};

export default function BlogIndexPage() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Blog", href: "/blog" },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} className="mb-6" />
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Resources & Guides
            </p>
            <h1 id="blog-heading" className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Home Services Guides for Abu Dhabi Residents
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Practical advice on cleaning, childcare, cooking, and pet care — written for households and professionals living in Abu Dhabi and the UAE.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="pb-16 bg-white" aria-label="Featured article">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <article className="grid lg:grid-cols-2 gap-0 rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-100 transition-shadow">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-10 lg:p-16 flex items-center justify-center min-h-[280px]">
                    <div className="text-center">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 ${categoryColors[featured.category] ?? "bg-slate-100 text-slate-600"}`}>
                        <Tag size={12} />
                        {featured.category}
                      </span>
                      <p className="text-green-700 font-bold text-5xl">✦</p>
                      <p className="text-green-600 text-sm font-medium mt-3">Featured Article</p>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[featured.category] ?? "bg-slate-100 text-slate-600"}`}>
                        <Tag size={12} />
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock size={12} />
                        {featured.readingTime} min read
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6">{featured.description}</p>
                    <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm">
                      Read article <ArrowRight size={16} />
                    </span>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="py-16 bg-slate-50" aria-labelledby="all-posts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 id="all-posts-heading" className="text-2xl font-bold text-slate-900 mb-10">
              All Articles
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-2xl border border-slate-100 p-6 h-full hover:shadow-lg hover:shadow-slate-100 transition-shadow flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                        <Tag size={12} />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock size={12} />
                        {post.readingTime} min
                      </span>
                    </div>
                    <h2 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-green-700 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-sm mt-auto">
                      Read more <ArrowRight size={14} />
                    </span>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
