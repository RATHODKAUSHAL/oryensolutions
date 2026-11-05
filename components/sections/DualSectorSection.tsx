import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { ArrowRightIcon, BuildingIcon, CheckIcon, CodeIcon } from "@/components/ui/icons";
import { routes } from "@/lib/site";

const practices = [
  {
    id: "it",
<<<<<<< HEAD
    label: "IT & Digital Products",
    heading: "Custom software for the teams that have outgrown off-the-shelf tools.",
    description:
      "From client-facing platforms to internal systems, we build software that matches the way your business already works instead of forcing your process into a generic product.",
    items: [
      "Full-Stack Web Development",
      "Custom CRM And SaaS Product Development",
      "Mobile App Development (Android & iOS)",
      "UI/UX Design & Development",
      "API Integration & Data Visualization",
      "Website Maintenance & SEO Optimization",
=======
    label: "IT & Digital Solutions",
    heading: "Web, mobile & SaaS for modern businesses",
    description:
      "From custom CRMs and SaaS products to mobile apps and full-stack web platforms, we build the digital infrastructure businesses need to grow.",
    items: [
      "Full-stack web development",
      "Custom CRM & SaaS product development",
      "Mobile apps (Android & iOS)",
      "UI/UX design & development",
      "API integration & data visualization",
      "Website maintenance & SEO",
>>>>>>> 39a65ba (changes in new)
    ],
    icon: CodeIcon,
    href: routes.servicesWeb,
    dark: false,
  },
  {
    id: "bim",
<<<<<<< HEAD
    label: "BIM Automation",
    heading: "Engineering automation that removes repetitive drafting and coordination work.",
    description:
      "We build custom Tekla plugins, macros, and workflow tools that reduce manual effort across drawings, reports, model coordination, and production data handoffs.",
    items: [
      "Tekla Plugin & Macro Development",
      "Automated Drawing Creation Tools",
      "BOM & Report Customization",
      "Tekla-Excel Data Integration",
      "Rebar & Revit Automation Solutions",
      "Custom Tekla API Tool Development",
=======
    label: "BIM & Revit Automation",
    heading: "Structural engineering automation on the Tekla API",
    description:
      "Custom Tekla plugins, macros and automation tools that remove manual work, from automated shop drawings to BOM customization and rebar automation.",
    items: [
      "Tekla plugin & macro development",
      "Automated drawing creation",
      "BOM & report customization",
      "Tekla–Excel data integration",
      "Rebar & Revit automation",
      "Custom Tekla API tools",
>>>>>>> 39a65ba (changes in new)
    ],
    icon: BuildingIcon,
    href: routes.servicesBim,
    dark: true,
  },
] as const;

export function DualSectorSection() {
  return (
    <section id="dual-sector" className="bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <div className="relative text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Why The Mix Matters</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#021024] sm:text-5xl">A rare combination: product engineering and BIM automation under one roof.</h2>
        </div>
=======
        <SectionHeading
          eyebrow="Our practices"
          title="Two areas of expertise. One partner."
          description="A software studio and a specialist engineering-automation team under one roof."
        />
>>>>>>> 39a65ba (changes in new)

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {practices.map((practice) => {
            const Icon = practice.icon;
            const dark = practice.dark;
            return (
              <div
                key={practice.id}
                className={`flex flex-col rounded-3xl p-8 sm:p-10 ${dark ? "bg-[var(--navy)] text-white" : "border border-slate-200 bg-slate-50"}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      dark ? "bg-sky-400/15 text-sky-300" : "bg-white text-[var(--primary)] shadow-sm"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className={`text-sm font-semibold ${dark ? "text-sky-300" : "text-[var(--primary)]"}`}>{practice.label}</p>
                </div>
                <h3 className={`mt-6 text-2xl font-bold sm:text-3xl ${dark ? "text-white" : ""}`}>{practice.heading}</h3>
                <p className={`mt-4 text-[15px] leading-7 ${dark ? "text-slate-300" : "text-[var(--text-body)]"}`}>{practice.description}</p>
                <ul className="mt-7 grid flex-1 content-start gap-3 sm:grid-cols-2">
                  {practice.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-sky-300" : "text-[var(--primary)]"}`} />
                      <span className={dark ? "text-slate-100" : "text-slate-700"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={practice.href}
                  className={`group mt-8 inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-sky-300" : "text-[var(--primary)]"}`}
                >
                  Explore {practice.label}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
