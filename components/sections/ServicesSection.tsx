import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { ArrowRightIcon, BuildingIcon, CodeIcon, LayersIcon, MobileIcon, SparklesIcon, UsersIcon } from "@/components/ui/icons";
import { routes } from "@/lib/site";

const services = [
  {
    title: "Web Application Development",
    desc: "Fast, secure web platforms and customer portals built to handle real traffic and grow with your business.",
    tags: ["Next.js & React", "Customer portals", "SEO-ready"],
    icon: CodeIcon,
    href: routes.servicesWeb,
  },
  {
    title: "Mobile App Development",
    desc: "Android and iOS apps your customers enjoy using, connected to your back office in real time.",
    tags: ["Android & iOS", "UI/UX design", "API connected"],
    icon: MobileIcon,
    href: routes.servicesWeb,
  },
  {
    title: "CRM & ERP Systems",
    desc: "Replace spreadsheets with one system for leads, orders, inventory and reporting, shaped around your process.",
    tags: ["Lead management", "Workflows", "Dashboards"],
    icon: UsersIcon,
    href: routes.servicesWeb,
  },
  {
    title: "SaaS Product Engineering",
    desc: "From MVP to market-ready product with subscriptions, multi-tenant architecture and analytics built in.",
    tags: ["MVP to scale", "Billing", "Multi-tenant"],
    icon: LayersIcon,
    href: routes.servicesWeb,
  },
  {
    title: "AI, Integration & Automation",
    desc: "Connect the tools you already use and let automation and AI handle the repetitive work your team does by hand.",
    tags: ["API integrations", "AI assistants", "Data sync"],
    icon: SparklesIcon,
    href: routes.servicesAutomation,
  },
  {
    title: "BIM Automation & Tekla",
    desc: "Custom Tekla plugins and Revit tools that automate drawings, BOMs and reports for structural engineering teams.",
    tags: ["Tekla Open API", "Drawing automation", "Revit"],
    icon: BuildingIcon,
    href: routes.servicesBim,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-[#eaf4fd] px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            What We Build
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#021024]">Three service lines, shaped around real delivery bottlenecks.</h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--text-body)]">
            OryenSolutions sits at the overlap of software delivery and structural engineering workflows, so the work is practical, specialized, and tied to how teams actually operate.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
=======
        <SectionHeading
          eyebrow="What we do"
          title="One team for every layer of your software"
          description="Whether you need a customer-facing app, an internal system or automation behind the scenes, we design, build and support it end to end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> 39a65ba (changes in new)
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_50px_rgba(2,16,36,0.08)]"
              >
<<<<<<< HEAD
                <CardHeader>
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconWrap} shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                    <Icon />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-slate-600">{service.desc}</p>
                  <ul className="mt-5 space-y-2.5 text-sm font-medium">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className={`rounded-full px-3 py-1.5 ${service.chipTone}`}>
                        - {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#052659] shadow-sm transition hover:bg-[#eaf4fd]">
                    See this service in detail -&gt;
                  </Link>
                </CardContent>
              </Card>
=======
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--primary)] to-sky-300 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-[var(--text-body)]">{service.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
>>>>>>> 39a65ba (changes in new)
            );
          })}
        </div>
      </div>
    </section>
  );
}
