import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { PageHero } from "@/components/sections/PageHero";
import { ArrowRightIcon } from "@/components/ui/icons";
import { blogPath, blogPosts, formatDate, readingMinutes } from "@/lib/blog";
import { absoluteUrl, breadcrumbList, buildMetadata, routes, webPageSchema } from "@/lib/site";

// Intentionally not linked from the navbar or footer; discovered via sitemap.xml and internal links.

const description =
  "Practical guides on software development costs, AI automation, AI agents, SaaS MVPs, CRMs, API integration and choosing the right tech stack, from the Oryen Solutions team.";

export const metadata: Metadata = buildMetadata({
  title: "Blog: Software, AI Automation & SaaS Guides",
  description,
  path: routes.blog,
  keywords: ["software development blog", "AI automation guides", "SaaS development guide"],
});

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "Blog", path: routes.blog },
          ]),
          webPageSchema({ name: "Oryen Solutions Blog", description, path: routes.blog, type: "CollectionPage" }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: blogPosts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(blogPath(post.slug)),
              name: post.title,
            })),
          },
        ]}
      />
      <Navbar />

      <PageHero
        breadcrumb="Blog"
        eyebrow="Insights & guides"
        title={
          <>
            Practical guides for <span className="text-gradient">building better software</span>
          </>
        }
        description={description}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={blogPath(post.slug)}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_50px_rgba(2,16,36,0.08)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">{post.category}</p>
              <h2 className="mt-3 text-xl font-bold leading-snug text-[var(--navy)] group-hover:text-[var(--primary)]">{post.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-[var(--text-body)]">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>
                  {formatDate(post.publishedAt)} · {readingMinutes(post)} min read
                </span>
                <ArrowRightIcon className="h-4 w-4 text-[var(--primary)] transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
