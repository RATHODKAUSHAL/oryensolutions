import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Agile Mindset", href: "/agile-mindset" },
  { label: "Our Process", href: "/#process" },
] as const;

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development-digital-solutions" },
  { label: "React Development", href: "/services/react-development-company" },
  { label: "Next.js Development", href: "/services/nextjs-development-company" },
  { label: "CRM Development", href: "/services/crm-development-services" },
  { label: "SaaS Development", href: "/services/saas-product-development" },
] as const;

const bimLinks = [
  { label: "BIM Automation", href: "/services/bim-automation-services" },
  { label: "Tekla Plugin Development", href: "/services/tekla-plugin-development" },
  { label: "API Integration", href: "/services/api-integration-services" },
  { label: "Workflow Automation", href: "/services/business-workflow-automation" },
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

function Column({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#052659]">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-sm text-slate-600 transition hover:text-[#052659]">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#7DA0CA]/35 bg-[#f8fcff] py-14 text-[#021024]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-6 shadow-[0_10px_28px_rgba(84,131,179,0.1)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/Assets/Oryen_Solutions.png" alt="Oryen Solutions logo" width={220} height={125} className="h-14 w-auto object-contain" />
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-right">
              Your vision, our technology - perfectly crafted. We build web, CRM, SaaS, and BIM automation solutions that improve workflow speed.
            </p>
          </div>

          <Separator className="my-8 bg-[#7DA0CA]/25" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Column title="About" items={aboutLinks} />
            <Column title="Services" items={serviceLinks} />
            <Column title="BIM" items={bimLinks} />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#052659]">Contact</p>
              <div className="mt-4 space-y-2.5 text-sm text-slate-600">
                <p>info@oryensolutions.com</p>
                <p>+91 92658 85370</p>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7DA0CA]/60 bg-white text-[#052659] transition hover:border-[#5483B3] hover:bg-[#e9f5ff]"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">(c) 2026 OryenSolutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
