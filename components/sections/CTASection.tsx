import { QuickContactForm } from "@/components/sections/QuickContactForm";
import { ChatIcon, GlobeIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

const nextSteps = [
  "Tell us about your idea or problem",
  "Get honest advice and a suggested approach",
  "Receive a clear scope, timeline and estimate",
] as const;

export function CTASection() {
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

            <QuickContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
