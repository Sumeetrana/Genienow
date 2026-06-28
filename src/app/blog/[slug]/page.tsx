import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/seo/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blog";
import { SITE_URL, whatsappLink } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const categoryColors: Record<string, string> = {
  Cleaning: "bg-emerald-50 text-emerald-700",
  "House Help": "bg-sky-50 text-sky-700",
  Cooking: "bg-orange-50 text-orange-700",
  Babysitting: "bg-pink-50 text-pink-700",
  "Pet Sitting": "bg-violet-50 text-violet-700",
};

const categoryServiceMap: Record<string, string> = {
  Cleaning: "/services/cleaning",
  "House Help": "/services/house-help",
  Cooking: "/services/cooking",
  Babysitting: "/services/babysitting",
  "Pet Sitting": "/services/pet-sitting",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-slate-800 mt-6 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="flex flex-col gap-2 my-4 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.length > 0) {
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed text-base mb-4">
          {line}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const serviceLink = categoryServiceMap[post.category];

  return (
    <>
      <JsonLd
        schema={buildArticleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
        })}
      />
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white" aria-labelledby="article-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumb
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.category, href: `/blog?category=${post.category.toLowerCase().replace(" ", "-")}` },
              ]}
              className="mb-6"
            />

            <div className="flex items-center gap-4 mb-6">
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                <Tag size={12} />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock size={12} />
                {post.readingTime} min read
              </span>
              <time
                dateTime={post.publishedAt}
                className="text-xs text-slate-400"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>

            <h1 id="article-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-green-500 pl-5">
              {post.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-slate max-w-none">
            {renderBody(post.body)}
          </article>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400 mb-3">Topics covered:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {serviceLink && (
        <section className="py-16 bg-green-600" aria-label="Service call to action">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to book a {post.category.toLowerCase()} service in Abu Dhabi?
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
                Genienow connects you with verified, trusted providers across Abu Dhabi — all through a simple WhatsApp message.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappLink(`Hi Genienow! I read your blog post and I'm interested in ${post.category.toLowerCase()} services in Abu Dhabi.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${post.category} service in Abu Dhabi via WhatsApp`}
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-green-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </a>
                <Link
                  href={serviceLink}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  View {post.category} Services
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 id="related-heading" className="text-2xl font-bold text-slate-900 mb-8">
                Related articles
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((relPost, i) => (
                <AnimatedSection key={relPost.slug} delay={i * 0.07}>
                  <Link href={`/blog/${relPost.slug}`} className="group block h-full">
                    <article className="bg-white rounded-2xl border border-slate-100 p-6 h-full hover:shadow-lg hover:shadow-slate-100 transition-shadow flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[relPost.category] ?? "bg-slate-100 text-slate-600"}`}>
                          <Tag size={12} />
                          {relPost.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Clock size={12} />
                          {relPost.readingTime} min
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-green-700 transition-colors leading-snug flex-1">
                        {relPost.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-sm mt-3">
                        Read <ArrowRight size={14} />
                      </span>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                <ArrowLeft size={16} />
                Back to all articles
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
}
