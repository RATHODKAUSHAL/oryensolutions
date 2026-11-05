import Link from "next/link";

import { FooterGlobe } from "@/components/layout/FooterGlobe";
import { FooterWordmark } from "@/components/layout/FooterWordmark";
import { routes, siteConfig } from "@/lib/site";

const navLinks = [
  { label: "Home", href: routes.home },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: routes.about },
  { label: "Agile", href: routes.agileMindset },
  { label: "Careers", href: routes.careers },
  { label: "Contact", href: routes.contact },
] as const;

const serviceLinks = [
  { label: "Web, Mobile & SaaS", href: routes.servicesWeb },
  { label: "AI & Automation", href: routes.servicesAutomation },
] as const;

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/oryensolutions/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.1-2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/oryen-solutions/about/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.79-2.06C21.2 8.65 22 10.95 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V21h-4V9Z" />
      </svg>
    ),
  },
] as const;

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[var(--navy)] text-slate-300">
      <div className="pointer-events-none absolute inset-0 -z-10 dark-grid opacity-60" />
      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[30rem] w-[40rem] rounded-full bg-[#0077b6]/25 blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-sky-300">
              <span aria-hidden="true">✦</span> Get in touch
            </p>
            <p className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Ready to build something new, or simply want to{" "}
              <span className="relative inline-block whitespace-nowrap font-[family-name:var(--font-script)] text-[1.15em] font-semibold text-sky-300">
                explore ideas
                <svg viewBox="0 0 200 12" preserveAspectRatio="none" className="absolute -bottom-1.5 left-0 h-3 w-full" aria-hidden="true">
                  <path d="M2 8 C 50 2, 100 12, 198 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              ?
            </p>

            <p className="mt-10 text-xs text-slate-500">Reach us at:</p>
            <div className="mt-3 space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex w-fit items-center gap-2 text-lg font-semibold text-white transition hover:text-sky-300 sm:text-xl"
              >
                {siteConfig.email}
                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight />
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="group flex w-fit items-center gap-2 text-lg font-semibold text-white transition hover:text-sky-300 sm:text-xl"
              >
                {siteConfig.phone}
                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <FooterGlobe />
            <p className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Ahmedabad, India · Serving the US & worldwide
            </p>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-sky-400/50 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-sky-300 hover:text-sky-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <FooterWordmark />
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Oryen Solutions. All rights reserved.</p>
          <p>Designed &amp; built in Ahmedabad, India.</p>
        </div>
      </div>
    </footer>
  );
}
