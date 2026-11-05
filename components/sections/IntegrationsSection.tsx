import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import { LogoImage } from "@/components/ui/logo-image";
import { routes } from "@/lib/site";

const icon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

const tools = [
  { name: "React", short: "RC", logo: icon("react", "61DAFB"), role: "Frontend" },
  { name: "Next.js", short: "NX", logo: icon("nextdotjs", "000000"), role: "Web framework" },
  { name: "Node.js", short: "ND", logo: icon("nodedotjs", "5FA04E"), role: "Backend" },
  { name: "TypeScript", short: "TS", logo: icon("typescript", "3178C6"), role: "Language" },
  { name: "PostgreSQL", short: "PG", logo: icon("postgresql", "4169E1"), role: "Database" },
  { name: "MongoDB", short: "MG", logo: icon("mongodb", "47A248"), role: "Database" },
  { name: "Google Cloud", short: "GC", logo: icon("googlecloud", "4285F4"), role: "Cloud" },
  { name: "OpenAI", short: "AI", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg", role: "AI" },
  { name: "Stripe", short: "SP", logo: icon("stripe", "635BFF"), role: "Payments" },
  { name: "Figma", short: "FG", logo: icon("figma", "F24E1E"), role: "Design" },
] as const;

const rows = [tools, [...tools].reverse()] as const;

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <span className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-[0_6px_18px_rgba(2,16,36,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_14px_30px_rgba(2,16,36,0.1)]">
      <span className="[&_div]:h-9 [&_div]:w-9 [&_img]:h-7 [&_img]:w-7">
        <LogoImage name={tool.name} short={tool.short} logo={tool.logo} />
      </span>
      <span className="text-left">
        <span className="block text-sm font-bold text-[var(--text-heading)]">{tool.name}</span>
        <span className="block text-xs text-slate-500">{tool.role}</span>
      </span>
    </span>
  );
}

export function IntegrationsSection() {
  return (
    <section id="technology" className="relative scroll-mt-20 overflow-hidden border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:items-end lg:text-left">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              <span className="h-px w-6 bg-[var(--primary)]" />
              Technology
            </p>
            <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight sm:text-3xl">
              Built on <span className="text-gradient-dark">proven technology</span>, connected to the tools you already use
            </h2>
          </div>
          <Link
            href={routes.servicesAutomation}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:border-sky-200 hover:shadow-sm"
          >
            Integration services
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Two marquee rows moving in opposite directions; each row is duplicated for a seamless loop. */}
      <div className="tech-marquee mt-10 space-y-4" aria-label="Technologies we use">
        {rows.map((row, rowIndex) => (
          // The second row repeats the same tools in reverse, so it is decorative for screen readers.
          <div key={rowIndex} className="tech-marquee-row" aria-hidden={rowIndex === 1 || undefined}>
            <ul className={`tech-marquee-track ${rowIndex === 1 ? "tech-marquee-reverse" : ""}`}>
              {row.map((tool) => (
                <li key={tool.name}>
                  <ToolCard tool={tool} />
                </li>
              ))}
              {/* Second copy exists only for the visual loop. */}
              {row.map((tool) => (
                <li key={`${tool.name}-copy`} aria-hidden="true" className="tech-marquee-copy">
                  <ToolCard tool={tool} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
