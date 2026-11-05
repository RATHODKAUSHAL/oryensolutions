import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { ArrowRightIcon, CheckIcon, RocketIcon } from "@/components/ui/icons";
import { routes } from "@/lib/site";

const roadmap = [
  {
    stage: "Validate",
    title: "Discovery workshop",
    text: "We pressure-test the idea, define your core users and cut the scope down to what the first version really needs.",
  },
  {
    stage: "Prototype",
    title: "Clickable prototype",
    text: "A realistic, tappable design you can put in front of early users and investors before writing code.",
  },
  {
    stage: "Build",
    title: "MVP in agile sprints",
    text: "We build the core features with a working demo every week, so you can start selling and gathering feedback early.",
  },
  {
    stage: "Launch & scale",
    title: "Go live and iterate",
    text: "Deployment, app store release, analytics and a backlog of improvements based on what real users do.",
  },
] as const;

const essentials = [
  "Investor-ready demo",
  "Scalable cloud architecture",
  "Payments & subscriptions",
  "User analytics from day one",
  "App store & web launch",
  "Ongoing product support",
] as const;

export function StartupSection() {
  return (
    <section id="startups" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="For startups"
            title={
              <>
                Launching a startup? Go from <span className="text-[var(--primary)]">idea to MVP</span>, fast.
              </>
            }
            description="You need a product in users' hands quickly, without cutting corners you'll regret later. We help founders build a focused first version that's ready to grow."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {essentials.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <CheckIcon className="h-3 w-3 text-emerald-600" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href={routes.contact}
            className="group mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--primary)]"
          >
            Plan my MVP
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--navy)] p-6 sm:p-9">
          <div className="pointer-events-none absolute inset-0 dark-grid" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#0077b6]/40 blur-[90px]" />

          <div className="relative flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Startup launch roadmap</p>
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300 to-[#0077b6] text-white"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45), 0 4px 0 #03406b" }}
            >
              <RocketIcon className="h-5 w-5" />
            </span>
          </div>

          <div className="relative mt-7">
            <div className="pointer-events-none absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-sky-400 via-sky-400/40 to-transparent" />
            <ol className="relative space-y-5">
            {roadmap.map((step, i) => (
              <li key={step.stage} className="relative flex gap-4">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-400 text-xs font-bold text-[var(--navy)] ring-4 ring-[var(--navy)]">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-400/40 hover:bg-white/[0.07]">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-300">{step.stage}</p>
                  <h3 className="mt-1 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">{step.text}</p>
                </div>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
