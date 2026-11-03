import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articleDetails } from "@/data/articleContent";
import { articles } from "@/data/articles";
import { ArrowRight, Clock, Calendar, ChevronRight, HelpCircle, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleDetails[slug];

  if (!article) {
    return {
      title: "Article Not Found | GAUREX",
    };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords],
    alternates: {
      canonical: `https://gaurex.vercel.app/blog/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: `https://gaurex.vercel.app/blog/${article.slug}`,
      type: "article",
      publishedTime: "2026-11-02T00:00:00.000Z",
      authors: ["Gauresh Khairnar"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articleDetails[slug];

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://gaurex.vercel.app/blog/${article.slug}#article`,
        "headline": article.title,
        "description": article.metaDescription,
        "author": {
          "@type": "Person",
          "name": "Gauresh Khairnar",
          "jobTitle": "Founder & Principal Systems Architect",
          "url": "https://gaurex.vercel.app/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GAUREX",
          "url": "https://gaurex.vercel.app",
          "logo": "https://gaurex.vercel.app/logo.jpg"
        },
        "datePublished": "2026-11-02",
        "dateModified": "2026-11-02",
        "mainEntityOfPage": `https://gaurex.vercel.app/blog/${article.slug}`
      },
      {
        "@type": "FAQPage",
        "@id": `https://gaurex.vercel.app/blog/${article.slug}#faq`,
        "mainEntity": article.faq.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://gaurex.vercel.app/blog/${article.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://gaurex.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Insights & Articles",
            "item": "https://gaurex.vercel.app/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://gaurex.vercel.app/blog/${article.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-black pt-36 pb-24">
        <article className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Articles</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-black font-medium truncate max-w-xs">{article.category}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12 pb-10 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              <span className="font-bold uppercase tracking-wider text-[10px] text-black bg-gray-100 px-2.5 py-1 rounded">
                {article.category}
              </span>
              <span className="text-gray-400">&bull;</span>
              <span className="flex items-center gap-1 font-mono text-gray-500">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                {article.date}
              </span>
              <span className="text-gray-400">&bull;</span>
              <span className="flex items-center gap-1 font-mono text-gray-500">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
              {article.h1}
            </h1>

            <div className="flex items-center gap-3 pt-2 text-xs text-gray-600">
              <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">
                GX
              </div>
              <div>
                <span className="font-semibold text-black block">{article.author}</span>
                <span className="text-[11px] text-gray-400">GAUREX Systems Engineering</span>
              </div>
            </div>
          </header>

          {/* Intro Paragraph */}
          <div className="text-lg md:text-xl text-gray-800 font-normal leading-relaxed mb-12 p-6 bg-[#FAFAFA] border-l-4 border-black rounded-r-2xl">
            {article.intro}
          </div>

          {/* Core Content Sections */}
          <div className="space-y-12 text-sm md:text-base text-gray-700 leading-relaxed">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-black tracking-tight pt-4 border-t border-gray-100">
                  {sec.heading}
                </h2>
                
                <p className="leading-relaxed text-gray-700">
                  {sec.content}
                </p>

                {sec.bullets && (
                  <ul className="space-y-2 pt-1 pl-4 list-disc list-outside text-sm text-gray-600">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-snug">{b}</li>
                    ))}
                  </ul>
                )}

                {sec.callout && (
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs md:text-sm text-black italic font-medium">
                    &ldquo;{sec.callout}&rdquo;
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* FAQs Section */}
          {article.faq && article.faq.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                <HelpCircle className="w-4 h-4 text-black" />
                <span>Frequently Answered Questions</span>
              </div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Technical Guidance on {article.primaryKeyword}
              </h2>
              <div className="space-y-4">
                {article.faq.map((f, fIdx) => (
                  <div key={fIdx} className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-xl">
                    <h3 className="font-bold text-black text-base mb-2">
                      {f.question}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internal Linking Bridge to Relevant Service */}
          <div className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                Engineering Implementation
              </span>
              <h3 className="text-lg font-bold text-black mb-1">
                Need This Implemented in Your Business?
              </h3>
              <p className="text-xs text-gray-600">
                Explore our full technical scope and client outcomes.
              </p>
            </div>
            <Link
              href={article.relatedService.href}
              className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 shrink-0 group"
            >
              <span>{article.relatedService.name}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Article Footer & Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all articles</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:underline"
            >
              <span>Discuss a project with Gauresh Khairnar &rarr;</span>
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
}
