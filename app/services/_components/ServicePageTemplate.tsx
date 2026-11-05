import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbList, faqSchema, routes, serviceSchema } from "@/lib/site";

type ServicePageTemplateProps = {
  badge: string;
  title: string;
  description: string;
  slug: string;
  heroImage: string;
  highlights: readonly string[];
  capabilities: readonly { title: string; text: string }[];
  outcomes: readonly { title: string; text: string }[];
  idealFor: readonly string[];
  stack: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

const allServices = [
  {
    title: "Web, Mobile & SaaS Development",
    text: "Web apps, mobile apps, CRM, ERP and SaaS products.",
    href: routes.servicesWeb,
    icon: CodeIcon,
  },
  {
    title: "AI, Integration & Automation",
    text: "Connect your systems and automate manual work.",
    href: routes.servicesAutomation,
    icon: PlugIcon,
  },
  {
    title: "BIM Automation & Tekla Development",
    text: "Tekla plugins, drawing automation and Revit tools.",
    href: routes.servicesBim,
    icon: BuildingIcon,
  },
] as const;

export function ServicePageTemplate({
  badge,
  title,
  description,
  slug,
  heroImage,
  highlights,
  capabilities,
  outcomes,
  idealFor,
  stack,
  faqs,
}: ServicePageTemplateProps) {
  const related = allServices.filter((service) => service.href !== slug);

  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: title, path: slug },
          ]),
          serviceSchema({
            name: title,
            description,
            path: slug,
            serviceType: badge,
          }),
          faqSchema(faqs.map((item) => ({ question: item.question, answer: item.answer }))),
        ]}
      />
      <Navbar />

      <PageHero
        breadcrumb={title}
        eyebrow={badge}
        title={title}
        description={description}
        chips={highlights}
        primaryCta={{ label: "Book a free consultation", href: "#contact" }}
        secondaryCta={{ label: "See what we deliver", href: "#capabilities" }}
        aside={
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-sky-400/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
              <Image src={heroImage} alt={title} width={1536} height={1024} priority sizes="(max-width: 1024px) 100vw, 600px" className="h-auto w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#0a2348]/90 p-4 shadow-2xl backdrop-blur sm:left-auto sm:w-72">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-300">Ideal for</p>
              <ul className="mt-2 space-y-1.5">
                {idealFor.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white">
                    <CheckIcon className="h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      />

      <section id="capabilities" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we deliver"
            title="Everything you need, built by one team"
            description="Pick a single piece or let us handle the full journey from idea to launch and beyond."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, i) => (
              <li
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_50px_rgba(2,16,36,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--primary)] to-sky-300 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="text-sm font-extrabold text-sky-300 transition-colors group-hover:text-[var(--primary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[var(--text-body)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[var(--navy)] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 dark-grid" />
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-[#0077b6]/30 blur-[120px]" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow="The results"
              title="What changes for your business"
              description="Software is only worth building if it moves the numbers that matter. Here's what our clients aim for, and what we design around."
            />
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">A great fit if you are</p>
              <ul className="mt-3 space-y-2">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 transition hover:border-sky-400/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection />

      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div className="shrink-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Technology</p>
            <h2 className="mt-2 text-xl font-bold sm:text-2xl">Tools we use for this service</h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-2 lg:justify-end">
            {stack.map((tool) => (
              <li key={tool} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Common questions"
              description="Have a question that isn't covered here? Ask us in the form below."
            />
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Related services</p>
              <ul className="mt-4 space-y-3">
                {related.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-sky-200 hover:shadow-[0_16px_40px_rgba(2,16,36,0.06)]"
                      >
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[var(--primary)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-sm font-bold text-[var(--navy)]">{service.title}</span>
                          <span className="block text-xs text-slate-500">{service.text}</span>
                        </span>
                        <ArrowRightIcon className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[var(--primary)]" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
