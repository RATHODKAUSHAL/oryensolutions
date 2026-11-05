"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavItem = { label: string; href: string };

const navGroups: { about: readonly NavItem[]; services: readonly NavItem[] } = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Agile Mindset", href: "/agile-mindset" },
  ],
  services: [
    { label: "All Services", href: "/services" },
    { label: "BIM Automation & Tekla Custom Development", href: "/services/bim-automation-tekla-custom-development" },
    { label: "Web Development & Digital Solutions", href: "/services/web-development-digital-solutions" },
    { label: "Software Integration & Custom Automation", href: "/services/software-integration-custom-automation" },
  ],
} as const;

const topLinks: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Dropdown({ label, items }: { label: string; items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:text-[var(--primary)]"
      >
        {label}
        <ChevronDown />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute left-0 top-full z-20 min-w-72 pt-2"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
              {items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      active
                        ? "bg-[#e8f3ff] font-semibold text-[#052659]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[var(--primary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [openGroup, setOpenGroup] = useState<"about" | "services" | null>("about");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#7DA0CA]/30 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            src="/Assets/Oryen_Solutions.png"
            alt="Oryen Solutions logo"
            width={1320}
            height={752}
            sizes="(max-width: 768px) 160px, 220px"
            className="w-auto object-contain max-sm:h-16 md:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              pathname === "/" ? "bg-[#e6f2ff] text-[#052659]" : "text-slate-700 hover:text-[var(--primary)]"
            }`}
          >
            Home
          </Link>
          <Dropdown label="About" items={navGroups.about} />
          <Dropdown label="Services" items={navGroups.services} />
          <Link href="/careers" className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:text-[var(--primary)]">
            Careers
          </Link>
          <Link href="/contact-us" className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:text-[var(--primary)]">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact-us" aria-label="Contact Oryen Solutions">
            <Button className="h-11 rounded-2xl bg-[#0077b6] px-6 text-white shadow-[0_8px_18px_rgba(2,16,36,0.2)] hover:bg-[#005f92]">
              Talk To Us
            </Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger className="rounded-xl border border-[#7DA0CA]/70 p-2 text-slate-700 md:hidden" aria-label="Open menu">
            <MenuIcon />
          </SheetTrigger>

          <SheetContent className="w-[88vw] border-l border-[#7DA0CA]/40 bg-[#f6fbff] p-0 text-slate-900 shadow-[0_20px_50px_rgba(2,16,36,0.2)] sm:max-w-sm [&>button]:absolute [&>button]:right-3 [&>button]:top-3 [&>button]:z-20 [&>button]:mb-0 [&>button]:rounded-xl [&>button]:border [&>button]:border-[#7DA0CA]/50 [&>button]:bg-white [&>button]:p-2 [&>button]:text-[#052659]">
            <div className="flex h-full flex-col pt-16">
              <div className="border-y border-[#7DA0CA]/30 bg-white px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5483B3]">Navigation</p>
                <p className="mt-1 text-lg font-bold text-[#021024]">Oryen Solutions</p>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 pb-24">
                {topLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                      pathname === item.href
                        ? "border-[#5483B3]/70 bg-[#e8f3ff] text-[#052659] shadow-[0_6px_16px_rgba(84,131,179,0.12)]"
                        : "border-[#7DA0CA]/30 bg-white text-[#021024] hover:border-[#5483B3]/70 hover:bg-[#f0f8ff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="rounded-2xl border border-[#7DA0CA]/30 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenGroup((v) => (v === "about" ? null : "about"))}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-[#052659]"
                  >
                    About
                    <span>{openGroup === "about" ? "-" : "+"}</span>
                  </button>
                  <div className={`grid transition-all ${openGroup === "about" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="space-y-2 px-4 pb-4">
                        {navGroups.about.map((item) => (
                          <Link key={item.label} href={item.href} className="block rounded-lg bg-[#f3f9ff] px-3 py-2 text-sm text-slate-700 transition hover:bg-[#e8f3ff]">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#7DA0CA]/30 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenGroup((v) => (v === "services" ? null : "services"))}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-[#052659]"
                  >
                    Services
                    <span>{openGroup === "services" ? "-" : "+"}</span>
                  </button>
                  <div className={`grid transition-all ${openGroup === "services" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="space-y-2 px-4 pb-4">
                        {navGroups.services.map((item) => (
                          <Link key={item.label} href={item.href} className="block rounded-lg bg-[#f3f9ff] px-3 py-2 text-sm text-slate-700 transition hover:bg-[#e8f3ff]">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto border-t border-[#7DA0CA]/35 bg-white/95 p-4">
                <Link href="/contact-us" aria-label="Contact Oryen Solutions">
                  <Button className="h-11 w-full rounded-xl bg-[#0077b6] text-white shadow-[0_8px_18px_rgba(2,16,36,0.2)] hover:bg-[#005f92]">
                    Talk To Us
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
