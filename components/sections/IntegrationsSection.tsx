import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import { LogoImage } from "@/components/ui/logo-image";
import { routes } from "@/lib/site";

const icon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

const tools = [
  { name: "React", short: "RC", logo: icon("react", "61DAFB") },
  { name: "Next.js", short: "NX", logo: icon("nextdotjs", "000000") },
  { name: "Node.js", short: "ND", logo: icon("nodedotjs", "5FA04E") },
  { name: "TypeScript", short: "TS", logo: icon("typescript", "3178C6") },
  { name: "PostgreSQL", short: "PG", logo: icon("postgresql", "4169E1") },
  { name: "MongoDB", short: "MG", logo: icon("mongodb", "47A248") },
  { name: "Google Cloud", short: "GC", logo: icon("googlecloud", "4285F4") },
  { name: "OpenAI", short: "AI", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
  { name: "Stripe", short: "SP", logo: icon("stripe", "635BFF") },
  { name: "Figma", short: "FG", logo: icon("figma", "F24E1E") },
  { name: "Tekla", short: "TK", logo: "" },
  { name: "Revit", short: "RV", logo: "" },
] as const;

export function IntegrationsSection() {
  return (
    <section id="technology" className="scroll-mt-20 border-y border-slate-200 bg-white py-12 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Technology</p>
            <h2 className="mt-2 text-xl font-bold sm:text-2xl">Built on proven technology, connected to the tools you already use</h2>
          </div>
          <Link
            href={routes.servicesAutomation}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--primary)]"
          >
            Integration services
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-12">
          {tools.map((tool) => (
            <li
              key={tool.name}
              title={tool.name}
              className="group flex flex-col items-center gap-2 rounded-2xl px-1 py-3 transition hover:bg-slate-50"
            >
              <span className="grayscale transition group-hover:grayscale-0 [&_img]:h-8 [&_img]:w-8">
                <LogoImage name={tool.name} short={tool.short} logo={tool.logo} />
              </span>
              <span className="text-[11px] font-medium text-slate-500">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
