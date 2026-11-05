import Link from "next/link";

import { QuickContactForm } from "@/components/sections/QuickContactForm";
import { ArrowRightIcon, ChatIcon, CheckIcon, GlobeIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { routes, siteConfig } from "@/lib/site";

const nextSteps = [
  "Tell us about your idea or problem",
  "Get honest advice and a suggested approach",
  "Receive a clear scope, timeline and estimate",
] as const;

const promises = ["Free, no-obligation consultation", "Clear scope, timeline and estimate", "Reply by email with next steps"] as const;

type CTASectionProps = {
  /** "form" shows the quick enquiry form; "link" sends visitors to the full contact page instead. */
  variant?: "form" | "link";
};

export function CTASection({ variant = "form" }: CTASectionProps) {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--navy)] px-6 py-12 sm:px-12 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute inset-0 dark-grid" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#0077b6]/40 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-sky-400/20 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Have a project in mind? <span className="text-gradient">Let&apos;s talk it through.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Free, no-obligation consultation for startups and businesses in the US, India and worldwide.
              </p>

              <ol className="mt-8 space-y-3.5">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-300">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-200">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-9 grid gap-3 border-t border-white/10 pt-7 text-sm sm:grid-cols-2">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                  <MailIcon className="h-4 w-4 text-sky-300" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                  <PhoneIcon className="h-4 w-4 text-sky-300" />
                  {siteConfig.phone}
                </a>
                <a
                  href="https://wa.me/919265885370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 transition hover:text-white"
                >
                  <ChatIcon className="h-4 w-4 text-sky-300" />
                  Chat on WhatsApp
                </a>
                <p className="flex items-center gap-3 text-slate-300">
                  <GlobeIcon className="h-4 w-4 text-sky-300" />
                  Working across time zones
                </p>
              </div>
            </div>

            {variant === "form" ? (
              <QuickContactForm />
            ) : (
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-[0_30px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-9">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl" />
                <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Start your project</p>
                <h3 className="relative mt-3 text-2xl font-bold text-white sm:text-3xl">Tell us what you want to build</h3>
                <p className="relative mt-3 text-[15px] leading-7 text-slate-300">
                  Share your idea, budget and timeline on our contact page and we&apos;ll take it from there.
                </p>
                <ul className="relative mt-6 space-y-3">
                  {promises.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
                        <CheckIcon className="h-3.5 w-3.5 text-emerald-300" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={routes.contact}
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-sm font-bold text-[var(--navy)] shadow-[0_14px_34px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    Contact us
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="https://wa.me/919265885370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <ChatIcon className="h-4 w-4" />
                    WhatsApp us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
