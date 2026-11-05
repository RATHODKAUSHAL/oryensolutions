import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { routes } from "@/lib/site";

const models = [
  {
    name: "Fixed-scope project",
    bestFor: "Best for clearly defined projects",
    text: "Agree the scope, timeline and price up front. Ideal for websites, MVPs and well-defined features.",
    points: ["Fixed price & timeline", "Milestone-based payments", "Detailed scope document"],
    featured: false,
  },
  {
    name: "Dedicated team",
    bestFor: "Best for long-term product development",
    text: "A dedicated group of engineers working as an extension of your team, on your priorities, every sprint.",
    points: ["Full-time developers & designers", "Direct communication with the team", "Scale up or down as needed"],
    featured: true,
  },
  {
    name: "Time & material",
    bestFor: "Best for evolving requirements",
    text: "Pay for the time actually spent. Change priorities any time as you learn from users and the market.",
    points: ["Flexible scope", "Transparent time tracking", "Start quickly, adapt freely"],
    featured: false,
  },
] as const;

export function EngagementSection() {
  return (
    <section id="engagement" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ways to work together"
          title="Flexible engagement models"
          description="Every project is different, so is the right way to run it. Not sure which fits? We'll recommend one during your free consultation."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                model.featured
                  ? "bg-[var(--navy)] text-white shadow-[0_30px_60px_rgba(2,16,36,0.25)] lg:-my-3 lg:py-11"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {model.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-sky-400 px-3 py-1 text-xs font-bold text-[var(--navy)]">
                  Recommended for products
                </span>
              ) : null}
              <p className={`text-xs font-semibold uppercase tracking-wider ${model.featured ? "text-sky-300" : "text-[var(--primary)]"}`}>
                {model.bestFor}
              </p>
              <h3 className={`mt-3 text-2xl font-bold ${model.featured ? "text-white" : ""}`}>{model.name}</h3>
              <p className={`mt-3 text-[15px] leading-7 ${model.featured ? "text-slate-300" : "text-[var(--text-body)]"}`}>{model.text}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {model.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${model.featured ? "text-sky-300" : "text-[var(--primary)]"}`} />
                    <span className={model.featured ? "text-slate-100" : "text-slate-700"}>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={routes.contact}
                className={`group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition ${
                  model.featured
                    ? "bg-sky-400 text-[var(--navy)] hover:bg-sky-300"
                    : "border border-slate-300 text-[var(--navy)] hover:border-[var(--navy)] hover:bg-slate-50"
                }`}
              >
                Discuss this option
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
