import type { ReactNode } from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import { routes } from "@/lib/site";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumb: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  chips?: readonly string[];
  aside?: ReactNode;
};

// Dark hero shared by inner pages so they match the homepage.
export function PageHero({ eyebrow, title, description, breadcrumb, primaryCta, secondaryCta, chips, aside }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--navy)] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 dark-grid" />
      <div className="pointer-events-none absolute -top-40 left-1/3 -z-10 h-[460px] w-[760px] rounded-full bg-[#0077b6]/30 blur-[130px]" />

      <div
        className={`mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 ${
          aside ? "lg:grid-cols-[1.05fr_1fr] lg:items-center" : ""
        }`}
      >
        <div className="fade-up">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
            <Link href={routes.home} className="transition hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-200">{breadcrumb}</span>
          </nav>

          <p className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
            <span className="h-px w-6 bg-sky-300" />
            {eyebrow}
          </p>
          <h1 className={`mt-4 text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl ${aside ? "" : "max-w-4xl lg:text-6xl"}`}>
            {title}
          </h1>
          <p className={`mt-6 text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 ${aside ? "max-w-xl" : "max-w-2xl"}`}>
            {description}
          </p>

          {chips?.length ? (
            <ul className="mt-7 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li key={chip} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200">
                  {chip}
                </li>
              ))}
            </ul>
          ) : null}

          {primaryCta || secondaryCta ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-sm font-bold text-[var(--navy)] shadow-[0_14px_34px_rgba(56,189,248,0.3)] transition hover:-translate-y-0.5 hover:bg-sky-300"
                >
                  {primaryCta.label}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        {aside ? <div className="fade-up [animation-delay:150ms]">{aside}</div> : null}
      </div>
    </section>
  );
}
