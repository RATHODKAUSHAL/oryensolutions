"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRightIcon, BuildingIcon, CodeIcon, PlugIcon } from "@/components/ui/icons";

type NavItem = { label: string; href: string; description?: string; icon?: typeof CodeIcon };

const navGroups: { about: readonly NavItem[]; services: readonly NavItem[] } = {
  about: [
    { label: "About Us", href: "/about", description: "Who we are and how we work" },
    { label: "Agile Mindset", href: "/agile-mindset", description: "Our sprint-based delivery approach" },
  ],
  services: [
<<<<<<< HEAD
    { label: "All Services", href: "/services" },
    { label: "BIM Automation & Tekla Custom Development", href: "/services/bim-automation-tekla-custom-development" },
    { label: "Web Development & Digital Solutions", href: "/services/web-development-digital-solutions" },
    { label: "Software Integration & Custom Automation", href: "/services/software-integration-custom-automation" },
=======
    {
      label: "Web, Mobile & SaaS Development",
      href: "/services/web-development-digital-solutions",
      description: "Web apps, mobile apps, CRM, ERP and SaaS products",
      icon: CodeIcon,
    },
    {
      label: "AI, Integration & Automation",
      href: "/services/software-integration-custom-automation",
      description: "Connect your systems and automate manual work",
      icon: PlugIcon,
    },
    {
      label: "BIM Automation & Tekla Development",
      href: "/services/bim-automation-tekla-custom-development",
      description: "Tekla plugins, drawing automation and Revit tools",
      icon: BuildingIcon,
    },
>>>>>>> 39a65ba (changes in new)
  ],
} as const;

const topLinks: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
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

const linkBase = "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors";

function Dropdown({ label, items, wide = false }: { label: string; items: readonly NavItem[]; wide?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = items.some((item) => item.href === pathname);

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
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${linkBase} inline-flex items-center gap-1 ${active ? "text-[var(--primary)]" : "text-slate-700 hover:text-[var(--primary)]"}`}
      >
        {label}
        <ChevronDown open={open} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={`absolute left-1/2 top-full z-20 -translate-x-1/2 pt-3 ${wide ? "w-[26rem]" : "w-72"}`}
          >
            <div className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_24px_60px_rgba(2,16,36,0.16)]">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-start gap-3 rounded-xl px-3 py-3 transition ${isActive ? "bg-sky-50" : "hover:bg-slate-50"}`}
                  >
                    {Icon ? (
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[var(--primary)]">
                        <Icon className="h-5 w-5" />
                      </span>
                    ) : null}
                    <span>
                      <span className="block text-sm font-semibold text-[var(--navy)]">{item.label}</span>
                      {item.description ? <span className="mt-0.5 block text-xs leading-5 text-slate-500">{item.description}</span> : null}
                    </span>
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

function MobileGroup({
  label,
  items,
  open,
  onToggle,
}: {
  label: string;
  items: readonly NavItem[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-[var(--navy)]"
      >
        {label}
        <ChevronDown open={open} />
      </button>
      <div className={`grid transition-all ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="space-y-1 px-2 pb-2">
            {items.map((item) => (
              <Link key={item.label} href={item.href} className="block rounded-xl px-3 py-2.5 transition hover:bg-sky-50">
                <span className="block text-sm font-medium text-slate-800">{item.label}</span>
                {item.description ? <span className="block text-xs text-slate-500">{item.description}</span> : null}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [openGroup, setOpenGroup] = useState<"about" | "services" | null>("services");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "border-slate-200 shadow-[0_8px_30px_rgba(2,16,36,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Oryen Solutions home">
          <Image
            src="/Assets/Oryen_Solutions.png"
            alt="Oryen Solutions logo"
            width={1320}
            height={752}
            sizes="(max-width: 768px) 112px, 128px"
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <Link href="/" className={`${linkBase} ${pathname === "/" ? "text-[var(--primary)]" : "text-slate-700 hover:text-[var(--primary)]"}`}>
            Home
          </Link>
          <Dropdown label="Services" items={navGroups.services} wide />
          <Dropdown label="About" items={navGroups.about} />
          <Link
            href="/careers"
            className={`${linkBase} ${pathname === "/careers" ? "text-[var(--primary)]" : "text-slate-700 hover:text-[var(--primary)]"}`}
          >
            Careers
          </Link>
          <Link
            href="/contact-us"
            className={`${linkBase} ${pathname === "/contact-us" ? "text-[var(--primary)]" : "text-slate-700 hover:text-[var(--primary)]"}`}
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="group hidden h-11 items-center gap-2 rounded-full bg-[var(--navy)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(2,16,36,0.2)] transition hover:bg-[var(--primary)] md:inline-flex"
        >
          Book a free consultation
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <Sheet>
          <SheetTrigger className="rounded-xl border border-slate-200 p-2.5 text-slate-700 md:hidden" aria-label="Open menu">
            <MenuIcon />
          </SheetTrigger>

          <SheetContent className="w-[88vw] border-l border-slate-200 bg-slate-50 p-0 text-slate-900 sm:max-w-sm [&>button]:absolute [&>button]:right-3 [&>button]:top-3 [&>button]:z-20 [&>button]:mb-0 [&>button]:rounded-xl [&>button]:border [&>button]:border-slate-200 [&>button]:bg-white [&>button]:p-2 [&>button]:text-[var(--navy)]">
            <div className="flex h-full flex-col pt-16">
              <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 pb-24">
                {topLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-2xl border px-4 py-3.5 text-sm font-semibold transition ${
                      pathname === item.href ? "border-sky-200 bg-sky-50 text-[var(--primary)]" : "border-slate-200 bg-white text-[var(--navy)] hover:bg-sky-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <MobileGroup
                  label="Services"
                  items={navGroups.services}
                  open={openGroup === "services"}
                  onToggle={() => setOpenGroup((v) => (v === "services" ? null : "services"))}
                />
                <MobileGroup
                  label="About"
                  items={navGroups.about}
                  open={openGroup === "about"}
                  onToggle={() => setOpenGroup((v) => (v === "about" ? null : "about"))}
                />
              </div>

              <div className="mt-auto border-t border-slate-200 bg-white p-4">
                <Link
                  href="/contact-us"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--navy)] text-sm font-semibold text-white"
                >
                  Book a free consultation
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
