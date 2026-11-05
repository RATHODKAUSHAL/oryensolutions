"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  ArrowRightIcon,
  BuildingIcon,
  CheckIcon,
  CodeIcon,
  LayersIcon,
  MobileIcon,
  SparklesIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { routes } from "@/lib/site";

const offerings = [
  {
<<<<<<< HEAD
    title: "Web Development and SaaS Engineering",
    subtitle: "Oryen Solutions",
    body: "We build high-performance websites, SaaS platforms, CRM systems, and AI-powered web applications with strong SEO foundations.",
    bullets: ["Next.js Development", "React Engineering", "SEO-Ready Architecture"],
    imageLabel: "AI Automation",
  },
  {
    title: "Structural Engineering Excellence",
    subtitle: "Oryen Solutions",
    body: "We build custom Tekla plugins and BIM automation workflows for structural engineering teams that need faster, more consistent delivery.",
    bullets: ["Tekla Plugin Development", "Drawing Automation", "BIM Workflow Tools"],
    imageLabel: "BIM Automation",
=======
    tab: "Web Apps",
    word: "web platforms",
    icon: CodeIcon,
    summary: "Fast, secure websites, customer portals and web applications that turn visitors into customers.",
    points: ["Next.js & React", "SEO-ready from day one", "Built to scale with traffic"],
    href: routes.servicesWeb,
  },
  {
    tab: "Mobile Apps",
    word: "mobile apps",
    icon: MobileIcon,
    summary: "Android and iOS apps your customers enjoy using, connected to your back office in real time.",
    points: ["Android & iOS", "Intuitive UI/UX", "Real-time sync with your systems"],
    href: routes.servicesWeb,
  },
  {
    tab: "CRM & ERP",
    word: "CRM systems",
    icon: UsersIcon,
    summary: "One place for leads, customers, orders and reports, designed around the way your team sells and operates.",
    points: ["Lead & pipeline tracking", "Automated follow-ups", "Live dashboards"],
    href: routes.servicesWeb,
  },
  {
    tab: "SaaS",
    word: "SaaS products",
    icon: LayersIcon,
    summary: "From first MVP to a market-ready product, with subscriptions, multi-tenancy and analytics built in.",
    points: ["MVP in weeks", "Billing & subscriptions", "Multi-tenant architecture"],
    href: routes.servicesWeb,
  },
  {
    tab: "AI & Automation",
    word: "AI automation",
    icon: SparklesIcon,
    summary: "Connect the tools you already use and let AI and automation take over repetitive manual work.",
    points: ["AI assistants & chatbots", "API integrations", "Workflow automation"],
    href: routes.servicesAutomation,
  },
  {
    tab: "BIM & Tekla",
    word: "BIM tools",
    icon: BuildingIcon,
    summary: "Custom Tekla plugins and Revit tools that automate drawings, BOMs and reports for structural engineering teams.",
    points: ["Tekla Open API plugins", "Drawing automation", "BOM & report customization"],
    href: routes.servicesBim,
>>>>>>> 39a65ba (changes in new)
  },
] as const;

const assurances = ["Founder-led delivery", "Weekly sprint demos", "Post-launch support"] as const;

const ROTATE_MS = 4000;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Skip enter animations until the first tab change so server-rendered content is visible without JS.
  const [interacted, setInteracted] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % offerings.length);
      setInteracted(true);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused, reduceMotion]);

  // Spotlight that follows the cursor; written to CSS variables so it doesn't re-render React.
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  const current = offerings[active];
  const Icon = current.icon;

  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.15)_1px,transparent_1px)] bg-[size:84px_84px]" />
      <div className="mx-auto flex gap-y-20 w-full max-w-7xl flex-col px-4 pt-14 pb-6 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8 lg:pt-20">
        <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="mx-auto mt-6 flex w-full max-w-4xl flex-1 flex-col"
            >
              <div className="mx-auto flex min-h-45 w-full max-w-4xl flex-col justify-start sm:min-h-50 lg:min-h-55">
                <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-[#021024] sm:text-4xl lg:text-7xl">
                  {slide.title}
                </h2>
                <span className="mx-auto mt-2 inline-block border-b-4 border-[#5483B3] pb-1 text-2xl font-semibold leading-tight text-[#052659] sm:text-3xl lg:text-6xl">
                  {slide.imageLabel}
                </span>
              </div>
              <p className="mx-auto mt-10 max-w-2xl text-base leading-7 text-[#052659]/80 sm:text-lg sm:leading-8">{slide.body}</p>

              <div className="mt-15 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {slide.bullets.map((item) => (
                  <span key={item} className="rounded-full border hover:bg-blue-100 cursor-pointer bg-white/80 px-3.5 py-2 text-xs font-medium text-[#052659] sm:px-4 sm:text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
=======
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative isolate overflow-hidden bg-[var(--navy)] text-white [--spot-x:50%] [--spot-y:30%]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dark-grid" />
      <div className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#0077b6]/30 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden transition-opacity duration-300 md:block"
        style={{ background: "radial-gradient(500px circle at var(--spot-x) var(--spot-y), rgba(56,189,248,0.13), transparent 70%)" }}
      />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-24">
        <p
          className="fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-sky-200 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Serving startups & businesses in the US and worldwide
        </p>

        <h1
          className="fade-up [animation-delay:60ms] mx-auto mt-7 max-w-5xl text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl lg:text-[4rem]"
        >
          <span className="sr-only">
            We build web platforms, mobile apps, CRM systems, SaaS products, AI automation and BIM tools that move your business
            forward.
          </span>
          <span aria-hidden="true">
            We build{" "}
            <span className="relative inline-flex h-[1.15em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={current.word}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-gradient whitespace-nowrap"
                >
                  {current.word}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            that move your business forward.
          </span>
        </h1>

        <p
          className="fade-up [animation-delay:120ms] mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
        >
          A founder-led engineering team designing, building and supporting custom software around how your business actually
          works, for startups, growing companies and structural engineering firms.
        </p>

        <div
          className="fade-up [animation-delay:180ms] mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href={routes.contact}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-sm font-bold text-[var(--navy)] shadow-[0_14px_34px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-300 sm:w-auto"
          >
            Book a free consultation
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
          >
            Explore our services
          </Link>
>>>>>>> 39a65ba (changes in new)
        </div>

        <ul className="fade-up mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 [animation-delay:220ms]">
          {assurances.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckIcon className="h-4 w-4 text-emerald-300" />
              {item}
            </li>
          ))}
        </ul>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          className="fade-up mx-auto mt-16 max-w-5xl rounded-3xl [animation-delay:280ms] border border-white/10 bg-white/[0.04] p-2 text-left shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-3"
        >
          <p className="px-3 pb-3 pt-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-left">
            What do you want to build?
          </p>

          <div role="tablist" aria-label="Services" className="grid grid-cols-2 gap-1.5 px-1 pb-1 sm:grid-cols-3 lg:flex">
            {offerings.map((item, i) => {
              const TabIcon = item.icon;
              const selected = i === active;
              return (
                <button
                  key={item.tab}
                  type="button"
                  role="tab"
                  id={`hero-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="hero-panel"
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                    setInteracted(true);
                  }}
                  className={`relative isolate flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-3 py-2.5 text-[13px] font-semibold transition-colors sm:px-4 sm:text-sm lg:flex-1 ${
                    selected ? "text-[var(--navy)]" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId="hero-tab-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 -z-10 rounded-2xl bg-white"
                    />
                  ) : null}
                  <TabIcon className="h-4 w-4" />
                  {item.tab}
                  {selected && !paused && !reduceMotion ? (
                    <motion.span
                      key={`progress-${active}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                      className="absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-sky-400"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            id="hero-panel"
            role="tabpanel"
            aria-labelledby={`hero-tab-${active}`}
            className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#061a38]/80"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.3fr_1fr] md:items-center"
              >
                <div className="flex items-start gap-4">
                  <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300 sm:inline-flex">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-white sm:text-2xl">{current.tab}</h2>
                    <p className="mt-2 text-[15px] leading-7 text-slate-300">{current.summary}</p>
                    <Link
                      href={current.href}
                      className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-sky-200"
                    >
                      Explore {current.tab}
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {current.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={interacted ? { opacity: 0, x: 12 } : false}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.08 + i * 0.07 }}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100"
                    >
                      <CheckIcon className="h-4 w-4 shrink-0 text-emerald-300" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
