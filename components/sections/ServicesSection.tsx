import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function BimIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <rect x="6" y="10" width="36" height="30" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 22H32M16 30H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 10V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <rect x="6" y="9" width="36" height="30" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 18H42" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="13" cy="13.5" r="1.5" fill="currentColor" />
      <circle cx="18" cy="13.5" r="1.5" fill="currentColor" />
      <path d="M18 29L22 25L18 21M28 21L24 25L28 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="34" cy="14" r="5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="34" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18.5 16.5H29.5M17 18.5L21.5 29.5M31 29.5L35 18.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const services = [
  {
    title: "BIM Automation & Tekla",
    desc: "Custom Tekla automation and BIM workflows for structural engineering teams.",
    bullets: ["Tekla Plugin Development", "Automated Drawing Tools", "BOM & Report Customization"],
    icon: BimIcon,
    iconWrap: "bg-[#e8f1fb] text-[#2f5f90]",
    cardTone: "from-[#f5f9ff] to-[#eef5fd]",
    chipTone: "bg-[#eaf3fb] text-[#2f5f90]",
    href: "/services/bim-automation-tekla-custom-development",
  },
  {
    title: "Web Development & Digital Solutions",
    desc: "Scalable digital products built for performance and growth.",
    bullets: ["Full-Stack Web Development", "SaaS Product Development", "CRM Development"],
    icon: WebIcon,
    iconWrap: "bg-[#e6f8f7] text-[#0f766e]",
    cardTone: "from-[#f3fdfc] to-[#ebfbf9]",
    chipTone: "bg-[#e9f8f6] text-[#0f766e]",
    href: "/services/web-development-digital-solutions",
  },
  {
    title: "Software Integration & Custom Automation",
    desc: "Connect systems and remove manual bottlenecks with custom integrations.",
    bullets: ["API-Based Tool Development", "Process Automation", "Data Synchronization"],
    icon: IntegrationIcon,
    iconWrap: "bg-[#ecfdf3] text-[#15803d]",
    cardTone: "from-[#f6fef9] to-[#effcf4]",
    chipTone: "bg-[#ecfdf3] text-[#15803d]",
    href: "/services/software-integration-custom-automation",
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`group rounded-3xl border border-[#7DA0CA]/35 bg-gradient-to-br ${service.cardTone} shadow-[0_10px_28px_rgba(84,131,179,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22c55e]/45 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_16px_36px_rgba(34,197,94,0.16)]`}
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
