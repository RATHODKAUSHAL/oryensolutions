import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { landingPages } from "@/lib/landing-pages";
import { breadcrumbList, buildMetadata, routes, serviceSchema, webPageSchema } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Software Development Services",
  description:
    "Explore OryenSolutions services for web development, SaaS development, CRM development, AI automation, API integrations, mobile app development, and enterprise software solutions.",
  path: routes.services,
  keywords: [
    "web development company India",
    "custom software development company",
    "AI automation agency",
    "API integration services",
  ],
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "Services", path: routes.services },
          ]),
          webPageSchema({
            name: "Software Development Services",
            description:
              "Service directory for OryenSolutions covering custom software development, AI automation, integrations, and digital product engineering.",
            path: routes.services,
            type: "CollectionPage",
          }),
          ...landingPages.slice(0, 6).map((page) =>
            serviceSchema({
              name: page.title,
              description: page.metaDescription,
              path: `/services/${page.slug}`,
              serviceType: page.shortTitle,
              keywords: page.keywords,
            }),
          ),
        ]}
      />
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
            Service Directory
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold sm:text-5xl lg:text-6xl">Software Development, Automation, and Integration Services</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            OryenSolutions helps businesses in Ahmedabad, Gujarat, India and global markets build modern digital products, streamline operations, and improve engineering workflows.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {landingPages.map((page) => (
              <article key={page.slug} className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-6 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5483B3]">{page.heroEyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold">{page.title}</h2>
                <p className="mt-3 text-slate-600">{page.metaDescription}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {page.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-[#7DA0CA]/35 bg-[#f8fcff] px-3 py-1 text-xs font-semibold text-[#052659]">
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link href={`/services/${page.slug}`} className="mt-6 inline-flex rounded-full bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#005f92]">
                  Explore This Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
