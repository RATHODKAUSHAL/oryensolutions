import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { CTASection } from "@/components/sections/CTASection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ArrowRightIcon, EyeIcon, SparklesIcon, TargetIcon, UsersIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { breadcrumbList, buildMetadata, faqSchema, organizationSchema, routes, webPageSchema } from "@/lib/site";

const values = [
  {
    title: "Ownership",
    text: "We treat every project like our own product and take responsibility for the result, not just the code.",
    icon: TargetIcon,
    tone: "from-sky-300 to-[#0077b6]",
    edge: "#03406b",
  },
  {
    title: "Transparency",
    text: "Honest estimates, weekly demos and open communication. You always know where things stand.",
    icon: EyeIcon,
    tone: "from-indigo-300 to-indigo-600",
    edge: "#2a2a7a",
  },
  {
    title: "Craft",
    text: "Clean, well-tested code and thoughtful design that stays easy to change as your business grows.",
    icon: SparklesIcon,
    tone: "from-cyan-300 to-teal-600",
    edge: "#0b4a4a",
  },
  {
    title: "Partnership",
    text: "We stay with you after launch, improving the product as you learn what your users need.",
    icon: UsersIcon,
    tone: "from-emerald-300 to-emerald-600",
    edge: "#0b4d34",
  },
] as const;

const aboutFaqs = [
  {
    question: "What does Oryen Solutions do?",
    answer:
      "Oryen Solutions builds custom web platforms, mobile apps, CRM and ERP systems, SaaS products and AI-powered automation, using an agile, founder-led delivery approach.",
  },
  {
    question: "Where is Oryen Solutions based?",
    answer:
      "We're based in Ahmedabad, Gujarat, India, and work with startups and businesses in the US and around the world through remote collaboration.",
  },
  {
    question: "Why does Oryen Solutions use agile engineering?",
    answer:
      "Agile lets us validate progress early, reduce rework and keep delivery aligned with real business priorities, with a working demo every week.",
  },
  {
    question: "Who will I work with on my project?",
    answer:
      "You work directly with the founders and senior engineers who scope, design and build your project. There are no hand-offs to account managers.",
  },
] as const;

export const metadata: Metadata = buildMetadata({
  title: "About Oryen Solutions",
  description:
    "Oryen Solutions is a founder-led software studio in Ahmedabad, India, building web, mobile, CRM, SaaS and AI automation solutions for clients in the US and worldwide.",
  path: routes.about,
  keywords: ["about Oryen Solutions", "Ahmedabad software company", "founder-led software studio"],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          organizationSchema(),
          webPageSchema({
            name: "About OryenSolutions",
            description:
              "Learn about OryenSolutions, an Ahmedabad-based software and automation company focused on agile engineering and practical digital delivery.",
            path: routes.about,
            type: "AboutPage",
          }),
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "About", path: routes.about },
          ]),
          faqSchema([...aboutFaqs]),
        ]}
      />
      <Navbar />

      <PageHero
        breadcrumb="About us"
        eyebrow="About Oryen Solutions"
        title={
          <>
            Engineers who build software <span className="text-gradient">like it&apos;s our own</span>
          </>
        }
        description="We're a founder-led software studio based in Ahmedabad, India, partnering with startups and businesses in the US and worldwide to turn ideas and messy workflows into reliable software."
        primaryCta={{ label: "Work with us", href: "#contact" }}
        secondaryCta={{ label: "See how we work", href: routes.agileMindset }}
        aside={
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Our mission</p>
              <p className="mt-3 text-xl font-bold leading-snug text-white">
                Help every business run on software that fits the way it actually works.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">What we build</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Web & mobile apps, CRMs, SaaS products and AI automation.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Who we serve</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Startups and growing businesses across 10+ industries.</p>
            </div>
          </div>
        }
      />

      <StatsBar />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="Why we started Oryen"
            description={
              <>
                Too many businesses are stuck with generic tools that don&apos;t fit, spreadsheets that break as they grow, or
                agencies that disappear after launch.
                <br />
                <br />
                We started Oryen Solutions to be a different kind of partner: a small, senior team that learns how your business
                works, builds exactly what you need, and stays around to make it better.
              </>
            }
          />
          <div className="relative rounded-[2rem] bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Our vision</p>
            <p className="mt-3 text-2xl font-extrabold leading-snug text-[var(--navy)] sm:text-3xl">
              To be the engineering partner founders and business owners trust to build what&apos;s next.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Founder-led, senior team", "Agile delivery, weekly demos", "Long-term product support", "US & global clients"].map((item) => (
                <p key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our values" title="What we stand for" description="The principles behind every project, sprint and line of code." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <li
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(2,16,36,0.08)]"
                >
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.tone} text-white`}
                    style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.45), 0 5px 0 ${value.edge}, 0 14px 24px rgba(2,16,36,0.2)` }}
                  >
                    <Icon className="h-7 w-7 drop-shadow" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[var(--text-body)]">{value.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <WhyChooseUs />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" eyebrow="FAQ" title="Getting to know us" />
            <Link
              href={routes.agileMindset}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
            >
              Read about our agile approach
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <FaqAccordion items={aboutFaqs} />
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
