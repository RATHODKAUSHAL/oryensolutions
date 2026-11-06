import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { CTASection } from "@/components/sections/CTASection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { blogPath, blogPostMap, blogPosts, formatDate, readingMinutes, sectionId, type BlogSection } from "@/lib/blog";
import { blogPostingSchema, breadcrumbList, buildMetadata, faqSchema, routes } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostMap[slug];
  if (!post) return {};

  const metadata = buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: blogPath(post.slug),
    keywords: post.keywords,
    type: "article",
  });

  return {
    ...metadata,
    // The root layout appends "| OryenSolutions" via its title template.
    title: post.metaTitle,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.keywords,
    },
  };
}

function Section({ section }: { section: BlogSection }) {
  return (
    <section id={sectionId(section.heading)} className="scroll-mt-24">
      <h2 className="text-2xl font-bold leading-snug text-[var(--navy)] sm:text-3xl">{section.heading}</h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="mt-5 text-[17px] leading-8 text-[var(--text-body)]">
          {paragraph}
        </p>
      ))}

      {section.bullets ? (
        <ul className="mt-5 space-y-3">
          {section.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-[17px] leading-7 text-[var(--text-body)]">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--primary)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.steps ? (
        <ol className="mt-6 space-y-4">
          {section.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--navy)]">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-7 text-[var(--text-body)]">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : null}

      {section.table ? (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
            <thead className="bg-[var(--navy)] text-white">
              <tr>
                {section.table.headers.map((header, i) => (
                  <th key={`${header}-${i}`} scope="col" className="px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-slate-200 even:bg-slate-50">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="px-4 py-3 font-semibold text-[var(--navy)]">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className="px-4 py-3 text-[var(--text-body)]">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostMap[slug];
  if (!post) notFound();

  const path = blogPath(post.slug);
  const minutes = readingMinutes(post);
  const related = post.relatedPosts.map((s) => blogPostMap[s]).filter(Boolean);

  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "Blog", path: routes.blog },
            { name: post.title, path },
          ]),
          blogPostingSchema({
            headline: post.title,
            description: post.metaDescription,
            path,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            keywords: post.keywords,
            section: post.category,
          }),
          faqSchema(post.faqs),
        ]}
      />
      <Navbar />

      <header className="relative isolate overflow-hidden bg-[var(--navy)] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 dark-grid" />
        <div className="pointer-events-none absolute -top-40 left-1/3 -z-10 h-[460px] w-[760px] rounded-full bg-[#0077b6]/30 blur-[130px]" />
        <div className="mx-auto w-full max-w-4xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
            <Link href={routes.home} className="transition hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={routes.blog} className="transition hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-200">{post.category}</span>
          </nav>
          <p className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
            <span className="h-px w-6 bg-sky-300" />
            {post.category}
          </p>
          <h1 className="mt-4 text-balance text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{post.excerpt}</p>
          <p className="mt-6 text-sm text-slate-400">
            By Oryen Solutions · <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time> · {minutes} min read
          </p>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_260px] lg:px-8">
        <article className="min-w-0">
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">Key takeaway</p>
            <p className="mt-3 text-[17px] font-medium leading-8 text-[var(--navy)]">{post.keyTakeaway}</p>
          </div>

          <div className="mt-12 space-y-14">
            {post.sections.map((section) => (
              <Section key={section.heading} section={section} />
            ))}
          </div>

          <section id="faq" className="mt-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--navy)] sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-6">
              <FaqAccordion items={post.faqs} />
            </div>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="Table of contents" className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">On this page</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {post.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${sectionId(section.heading)}`} className="text-[var(--text-body)] transition hover:text-[var(--primary)]">
                    {section.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="text-[var(--text-body)] transition hover:text-[var(--primary)]">
                  FAQs
                </a>
              </li>
            </ul>
          </nav>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Related services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {post.relatedServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="group inline-flex items-center gap-1.5 font-semibold text-[var(--navy)] hover:text-[var(--primary)]">
                    {service.label}
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {related.length ? (
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--navy)] sm:text-3xl">Keep reading</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={blogPath(item.slug)}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_40px_rgba(2,16,36,0.08)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">{item.category}</p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-[var(--navy)] group-hover:text-[var(--primary)]">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--text-body)]">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection />
      <Footer />
    </main>
  );
}
