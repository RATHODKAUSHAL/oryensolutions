import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowRightIcon, ChatIcon, CodeIcon, LayersIcon, MobileIcon, SparklesIcon, UsersIcon } from "@/components/ui/icons";
import { routes } from "@/lib/site";

const services = [
  {
    title: "Web Application Development",
    desc: "Fast, secure web platforms and customer portals built to handle real traffic and grow with your business.",
    tags: ["Next.js & React", "Customer portals", "SEO-ready"],
    icon: CodeIcon,
    href: routes.servicesWeb,
    accent: "from-sky-400 to-blue-600",
    glow: "bg-sky-400/20",
    featured: true,
  },
  {
    title: "Mobile App Development",
    desc: "Android and iOS apps your customers enjoy using, connected to your back office in real time.",
    tags: ["Android & iOS", "UI/UX design", "API connected"],
    icon: MobileIcon,
    href: routes.servicesWeb,
    accent: "from-violet-400 to-violet-600",
    glow: "bg-violet-400/20",
  },
  {
    title: "CRM & ERP Systems",
    desc: "Replace spreadsheets with one system for leads, orders, inventory and reporting, shaped around your process.",
    tags: ["Lead management", "Workflows", "Dashboards"],
    icon: UsersIcon,
    href: routes.servicesWeb,
    accent: "from-emerald-400 to-teal-600",
    glow: "bg-emerald-400/20",
  },
  {
    title: "SaaS Product Engineering",
    desc: "From MVP to market-ready product with subscriptions, multi-tenant architecture and analytics built in.",
    tags: ["MVP to scale", "Billing", "Multi-tenant"],
    icon: LayersIcon,
    href: routes.servicesWeb,
    accent: "from-amber-400 to-orange-500",
    glow: "bg-amber-400/20",
  },
  {
    title: "AI, Integration & Automation",
    desc: "Connect the tools you already use and let automation and AI handle the repetitive work your team does by hand.",
    tags: ["API integrations", "AI assistants", "Data sync"],
    icon: SparklesIcon,
    href: routes.servicesAutomation,
    accent: "from-fuchsia-400 to-pink-600",
    glow: "bg-fuchsia-400/20",
  },
] as const;

// Small browser-window mock-up for the featured card: pure CSS, no images.
function BrowserMock() {
  return (
    <div aria-hidden="true" className="relative mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_40px_rgba(2,16,36,0.1)] sm:block">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-slate-200/70" />
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-4 p-4">
        <div className="space-y-2">
          <span className="block h-2.5 w-16 rounded-full bg-sky-200" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="block h-2 rounded-full bg-slate-100" />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["bg-sky-100", "bg-violet-100", "bg-emerald-100"].map((tint) => (
            <div key={tint} className={`rounded-xl ${tint} p-3`}>
              <span className="block h-1.5 w-8 rounded-full bg-slate-400/40" />
              <span className="mt-2.5 block h-3 w-12 rounded-md bg-slate-500/30" />
            </div>
          ))}
          <div className="col-span-3 flex h-16 items-end gap-1.5 rounded-xl bg-slate-50 p-3">
            {[40, 65, 50, 80, 60, 95, 75, 88].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-sky-400 to-violet-400" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_65%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One team for every <span className="text-gradient-dark">layer of your software</span>
            </>
          }
          description="Whether you need a customer-facing app, an internal system or automation behind the scenes, we design, build and support it end to end."
        />

        {/* Bento grid: a wide featured card, four standard cards and a full-width call to action. */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const featured = "featured" in service && service.featured;
            return (
              <TiltCard
                key={service.title}
                className="rounded-3xl"
                containerClassName={featured ? "md:col-span-2" : ""}
                max={featured ? 3 : 6}
              >
                <Link
                  href={service.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_28px_60px_rgba(2,16,36,0.12)] sm:p-8 ${
                    featured ? "bg-gradient-to-br from-sky-50 via-white to-violet-50" : "bg-white"
                  }`}
                >
                  <div className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${service.glow}`} />
                  <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${service.accent}`} />

                  <div className="relative flex items-start justify-between">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_10px_24px_rgba(2,16,36,0.18)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${service.accent}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-bold tabular-nums text-slate-300">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className={featured ? "relative md:grid md:grid-cols-[1fr_1.15fr] md:gap-8" : "relative flex flex-1 flex-col"}>
                    <div className="flex flex-1 flex-col">
                      <h3 className={`mt-6 font-bold ${featured ? "text-2xl" : "text-xl"}`}>{service.title}</h3>
                      <p className="mt-3 flex-1 text-[15px] leading-7 text-[var(--text-body)]">{service.desc}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <li key={tag} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                        Learn more
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                    {featured ? <BrowserMock /> : null}
                  </div>
                </Link>
              </TiltCard>
            );
          })}

          {/* Full-width call to action for visitors who don't see an exact fit. */}
          <Link
            href={routes.contact}
            className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-[var(--navy)] p-7 text-white transition-all duration-300 hover:shadow-[0_28px_60px_rgba(2,16,36,0.3)] sm:p-8 md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="pointer-events-none absolute inset-0 dark-grid opacity-60" />
            <div className="pointer-events-none absolute -left-10 -top-20 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="relative flex items-start gap-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-inset ring-white/15">
                <ChatIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Not sure where to start?</h3>
                <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-300">
                  Tell us the problem you want to solve and we&apos;ll suggest the right approach, scope and timeline in a free consultation.
                </p>
              </div>
            </div>
            <span className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-[var(--navy)] transition group-hover:bg-sky-300">
              Book a free consultation
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
