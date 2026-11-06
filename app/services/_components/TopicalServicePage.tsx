import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import type { LandingPage } from "@/lib/landing-pages";
import {
  breadcrumbList,
  faqSchema,
  routes,
  serviceSchema,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/site";

type TopicalServicePageProps = {
  page: LandingPage;
};

function pagePath(slug: string) {
  return `/services/${slug}`;
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

export function TopicalServicePage({ page }: TopicalServicePageProps) {
  const currentPath = pagePath(page.slug);

  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "Services", path: routes.services },
            { name: page.title, path: currentPath },
          ]),
          webPageSchema({
            name: page.title,
            description: page.metaDescription,
            path: currentPath,
            type: "Service",
          }),
          serviceSchema({
            name: page.title,
            description: page.metaDescription,
            path: currentPath,
            serviceType: page.shortTitle,
            keywords: page.keywords,
          }),
          faqSchema(page.faqs),
          softwareApplicationSchema({
            name: `${page.title} Solutions`,
            description: page.heroSummary,
            path: currentPath,
            category: page.shortTitle,
          }),
        ]}
      />
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
            {page.heroEyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{page.title}</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{page.heroSummary}</p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {page.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-[#7DA0CA]/45 bg-white px-3 py-1.5 text-sm font-semibold text-[#052659]">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="space-y-5">
            {page.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
            <h2 className="text-2xl font-bold">Quick Answers For AI Search</h2>
            <div className="mt-5 space-y-4">
              {page.snippetAnswers.map((item) => (
                <article key={item.question} className="rounded-2xl border border-[#7DA0CA]/25 bg-white p-4">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f8fcff] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">What This Service Includes</h2>
            <p className="mt-4 text-lg text-slate-600">A clear service scope helps buyers, search engines, and AI assistants understand the actual delivery model.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.deliverables.map((item) => (
              <div key={item} className="rounded-2xl border border-[#7DA0CA]/30 bg-white p-5 shadow-[0_8px_20px_rgba(84,131,179,0.08)]">
                <p className="font-semibold text-[#021024]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <ol className="mt-6 space-y-4">
                {page.workflow.map((item, index) => (
                  <li key={item.step} className="rounded-2xl border border-[#7DA0CA]/25 bg-[#f8fcff] p-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e3f1ff] text-sm font-bold text-[#052659]">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold">{item.step}</h3>
                    </div>
                    <p className="mt-3 text-slate-600">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
              <h2 className="text-3xl font-bold">Industry Use Cases</h2>
              <div className="mt-6 space-y-4">
                {page.useCases.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-[#7DA0CA]/25 bg-[#f8fcff] p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.detail}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[#7DA0CA]/25 bg-[#f8fcff] p-4">
                <h3 className="text-lg font-semibold">Industries We Commonly Support</h3>
                <p className="mt-2 text-slate-600">{page.industries.join(", ")}.</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fcff] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Buyers Compare This Service Carefully</h2>
            <p className="mt-4 text-lg text-slate-600">Comparison-focused content helps both people and answer engines evaluate where this service fits best.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.comparison.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[#7DA0CA]/30 bg-white p-6">
                <h3 className="text-xl font-semibold">{item.label}</h3>
                <p className="mt-3 text-slate-600">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#7DA0CA]/35 bg-[#052659] p-8 text-white shadow-[0_20px_50px_rgba(2,16,36,0.16)] sm:p-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Need a Team That Can Actually Implement This?</h2>
            <p className="mt-4 max-w-3xl text-lg text-[#dbeeff]">
              OryenSolutions works with businesses in Ahmedabad, Gujarat, India and international markets to build practical software, automation, and integration systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={routes.contact} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#052659] transition hover:bg-[#eaf4fd]">
                Talk to Our Team
              </Link>
              <Link href={routes.services} className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fcff] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">Direct, snippet-ready answers make this page easier to understand for buyers, search engines, and AI assistants.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.faqs.map((item) => (
              <article key={item.question} className="rounded-2xl border border-[#7DA0CA]/30 bg-white p-6">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-8 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
            <h2 className="text-3xl font-bold">Related Services and Topical Pages</h2>
            <p className="mt-4 text-slate-600">
              Strong internal linking helps search engines map topical authority and helps buyers discover related implementation paths.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={pagePath(slug)}
                  className="rounded-full border border-[#7DA0CA]/40 bg-[#f8fcff] px-4 py-2 text-sm font-semibold text-[#052659] transition hover:bg-[#eaf4fd]"
                >
                  {titleFromSlug(slug)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
