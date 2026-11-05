import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { articleSchema, breadcrumbList, buildMetadata, faqSchema, routes } from "@/lib/site";

const principles = [
  {
    title: "Small, focused sprints",
    text: "Big goals are split into short sprints, and each one delivers something you can see and use.",
    icon: LayersIcon,
  },
  {
    title: "Fast feedback loops",
    text: "You review working software early and often, so we fix course before small issues become expensive.",
    icon: ClockIcon,
  },
  {
    title: "Transparent progress",
    text: "Clear priorities, shared boards and weekly demos. Everyone knows what's done and what's next.",
    icon: EyeIcon,
  },
  {
    title: "Continuous improvement",
    text: "Every sprint ends with a retrospective, so communication, quality and speed keep getting better.",
    icon: SparklesIcon,
  },
] as const;

const comparison = [
  { topic: "When you see progress", traditional: "At the end of the project", agile: "A working demo every week" },
  { topic: "Changing requirements", traditional: "Costly change requests", agile: "Re-prioritise every sprint" },
  { topic: "When problems surface", traditional: "Late, close to launch", agile: "Early, while cheap to fix" },
  { topic: "Time to first value", traditional: "Months", agile: "Weeks" },
  { topic: "Budget visibility", traditional: "Unclear until the end", agile: "Tracked sprint by sprint" },
] as const;

const agileFaqs = [
  {
    question: "How does agile reduce software delivery time?",
    answer:
      "Agile breaks work into small increments, validates each one early and resolves issues before they grow into costly late-stage rework, so the most valuable features reach users sooner.",
  },
  {
    question: "How involved do I need to be?",
    answer:
      "About an hour a week is typical: a short planning check-in and a demo review. You can be as hands-on as you like, and we'll keep you updated either way.",
  },
  {
    question: "Can I change requirements during the project?",
    answer:
      "Yes. That's one of agile's biggest advantages. Priorities are reviewed every sprint, so new ideas and feedback can be added without derailing the project.",
  },
  {
    question: "Why does Oryen Solutions use agile for BIM and web projects?",
    answer:
      "Agile works for both because it improves visibility, shortens feedback loops and helps teams deliver the most important outcomes first, whether that's a web app or a Tekla automation tool.",
  },
] as const;

export const metadata: Metadata = buildMetadata({
  title: "Our Agile Delivery Approach",
  description:
    "See how Oryen Solutions uses agile sprints, weekly demos and continuous improvement to reduce project risk and deliver web, SaaS, CRM and BIM automation projects faster.",
  path: routes.agileMindset,
  keywords: ["agile software delivery", "agile development company", "weekly sprint demos"],
});

export default function AgileMindsetPage() {
  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "Agile Mindset", path: routes.agileMindset },
          ]),
          webPageSchema({
            name: "Agile Delivery Approach",
            description: "How OryenSolutions uses agile delivery to accelerate software and BIM automation projects.",
            path: routes.agileMindset,
          }),
          articleSchema({
            headline: "How Oryen Solutions Delivers Faster With Agile",
            description: "An overview of the agile planning, sprint execution and continuous improvement methods used by Oryen Solutions.",
            path: routes.agileMindset,
            image: "/Assets/Oryen_Solutions.png",
          }),
          faqSchema([...agileFaqs]),
        ]}
      />
      <Navbar />

      <PageHero
        breadcrumb="Agile mindset"
        eyebrow="How we work"
        title={
          <>
            Agile delivery: <span className="text-gradient">see progress every week</span>, not just at the end
          </>
        }
        description="Agile isn't just a process for us. It's how we keep you in control, catch problems early and get working software into your hands faster."
        chips={["Faster iteration", "Less rework", "Full visibility"]}
        primaryCta={{ label: "Start a project", href: "#contact" }}
        secondaryCta={{ label: "See the sprint cycle", href: "#sprint-cycle" }}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our principles"
            title="Four principles behind every project"
            description="Practical habits that keep projects on track, on budget and aligned with what your business needs."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_50px_rgba(2,16,36,0.08)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--text-body)]">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="sprint-cycle" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The sprint cycle"
            title="What happens in every sprint"
            description="Click a step to see what we do and what you receive. The cycle repeats until launch, then continues as we improve your product."
          />
          <div className="mt-14">
            <SprintCycle />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why it matters" title="Agile vs. the traditional approach" />
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-slate-50 text-xs font-bold uppercase tracking-wider sm:grid-cols-[1.1fr_1fr_1fr]">
              <div className="px-4 py-4 text-slate-500 sm:px-6"> </div>
              <div className="px-4 py-4 text-slate-500 sm:px-6">Traditional</div>
              <div className="bg-[var(--navy)] px-4 py-4 text-sky-300 sm:px-6">Oryen agile</div>
            </div>
            {comparison.map((row) => (
              <div key={row.topic} className="grid grid-cols-[1fr_1fr_1fr] border-t border-slate-200 text-sm sm:grid-cols-[1.1fr_1fr_1fr]">
                <div className="px-4 py-4 font-semibold text-[var(--navy)] sm:px-6">{row.topic}</div>
                <div className="px-4 py-4 text-slate-500 sm:px-6">{row.traditional}</div>
                <div className="flex items-start gap-2 bg-[var(--navy)] px-4 py-4 font-semibold text-white sm:px-6">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {row.agile}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" eyebrow="FAQ" title="Questions about agile delivery" />
          </div>
          <FaqAccordion items={agileFaqs} />
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
