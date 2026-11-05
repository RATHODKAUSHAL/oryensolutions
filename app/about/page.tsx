import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { DualSectorSection } from "@/components/sections/DualSectorSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { breadcrumbList, buildMetadata, faqSchema, organizationSchema, routes, webPageSchema } from "@/lib/site";

const agilePractices = [
  {
    title: "Daily Alignment",
    text: "Short daily syncs help engineers, designers, and stakeholders remove blockers quickly and keep priorities aligned.",
    image: "/globe.svg",
  },
  {
    title: "Sprint Reviews",
    text: "Weekly demos validate outcomes early so we can refine scope fast and avoid late-stage rework.",
    image: "/window.svg",
  },
  {
    title: "Iteration Planning",
    text: "Each iteration turns feedback into actionable tasks, helping teams improve workflow quality release after release.",
    image: "/next.svg",
  },
] as const;

const impact = [
  "Reduced delivery time by replacing big-bang releases with short sprint cycles",
  "Lower risk through frequent validation and early issue detection",
  "Higher transparency across planning, development, and stakeholder communication",
  "Improved team efficiency through better prioritization and decision velocity",
] as const;

const aboutFaqs = [
  {
    question: "What does OryenSolutions do?",
    answer:
      "OryenSolutions builds custom web platforms, SaaS products, CRM systems, BIM automation tools, and software integrations with an agile engineering approach.",
  },
  {
    question: "Why does OryenSolutions use agile engineering?",
    answer:
      "Agile engineering helps the team validate progress early, reduce rework, and keep delivery aligned with real business priorities throughout the project lifecycle.",
  },
] as const;

export const metadata: Metadata = buildMetadata({
  title: "About OryenSolutions",
  description:
    "Learn about OryenSolutions, an Ahmedabad-based engineering team focused on agile software delivery, BIM automation, and practical digital transformation.",
  path: routes.about,
  keywords: ["about OryenSolutions", "Ahmedabad software team", "agile engineering company"],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <StructuredData
        data={[
          organizationSchema(),
          webPageSchema({
            name: "About OryenSolutions",
            description:
              "Learn about OryenSolutions, an Ahmedabad-based software and automation company focused on agile engineering and practical digital delivery.",
            path: routes.about,
            type: "AboutPage",
          }),
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "About", path: routes.about },
          ]),
          faqSchema([...aboutFaqs]),
        ]}
      />
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center">
            <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
              About Us
            </p>
            <h1 className="mt-5 text-center text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">Building Better Workflows Through Agile Engineering</h1>
            <p className="mt-5 text-center text-lg leading-8 text-slate-600">
              OryenSolutions combines agile software delivery with deep engineering domain understanding. Our approach improves workflow visibility,
              reduces manual effort, and helps clients deliver faster with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How We Use Agile to Reduce Delivery Time</h2>
            <p className="mt-4 text-lg text-slate-600">
              We apply agile methods in practical ways to improve execution speed and reduce workflow friction for every project.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {agilePractices.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-6 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7DA0CA]/35 bg-white">
                  <Image src={item.image} alt={item.title} width={32} height={32} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
            <h3 className="text-2xl font-semibold">What This Means for Client Workflows</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {impact.map((item) => (
                <li key={item} className="rounded-xl border border-[#7DA0CA]/25 bg-white px-4 py-3 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DualSectorSection />
      <ProcessSection />
      <IntegrationsSection />
      <section className="bg-[#f8fcff] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">What Businesses Ask About OryenSolutions</h2>
            <p className="mt-4 text-lg text-slate-600">Short answers make it easier for search engines and AI systems to understand how we work.</p>
          </div>
          <div className="mt-10 space-y-4">
            {aboutFaqs.map((item) => (
              <article key={item.question} className="rounded-2xl border border-[#7DA0CA]/35 bg-white p-6 shadow-[0_10px_24px_rgba(84,131,179,0.08)]">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-slate-600">
            Explore our <Link href={routes.agileMindset} className="font-semibold text-[#052659] underline underline-offset-4">agile mindset</Link> or review our{" "}
            <Link href={routes.servicesWeb} className="font-semibold text-[#052659] underline underline-offset-4">digital delivery services</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
