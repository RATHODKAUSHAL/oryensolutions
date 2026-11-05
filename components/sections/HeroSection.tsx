"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
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
  },
] as const;

const services = [
  "Web Development",
  "BIM Automation",
  "Revit Development",
  "Mobile Application",
  "CRM",
  "SaaS Development",
] as const;
const marqueeServices = [...services, ...services, ...services] as const;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
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
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#7DA0CA]/35 bg-white/75 py-3 backdrop-blur-sm sm:py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-16" />
          <div className="services-marquee-track flex w-max gap-3 sm:gap-4">
            {marqueeServices.map((service, i) => (
              <span
                key={`${service}-${i}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#7DA0CA]/85 bg-gradient-to-b from-[#C1E8FF] to-[#dff1fd] px-4 py-2 text-xs font-semibold text-[#052659] shadow-[0_3px_10px_rgba(2,16,36,0.08)] sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#052659]" />
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
