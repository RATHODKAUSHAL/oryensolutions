import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactUsForm } from "@/components/pages/ContactUsClient";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbList, buildMetadata, faqSchema, routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Oryen Solutions",
  description:
    "Book a free consultation with Oryen Solutions to discuss your web, mobile, CRM, SaaS, AI automation or BIM project. Serving clients in the US and worldwide.",
  path: routes.contact,
  keywords: ["contact Oryen Solutions", "free software consultation", "hire software development company"],
});

const contactFaqs = [
  {
    question: "How can I contact Oryen Solutions?",
    answer:
      "Fill in the project form on this page, email info@oryensolutions.com, call +91 92658 85370 or message us on WhatsApp. We work with clients in the US and worldwide.",
  },
  {
    question: "What should I include in a project inquiry?",
    answer:
      "Your business goal, who the software is for, current workflow challenges, any tools it needs to connect to, your expected timeline and a rough budget if you have one.",
  },
  {
    question: "Is the first consultation really free?",
    answer:
      "Yes. The first conversation is free and there's no obligation. We'll give you honest advice on your idea and a suggested approach, even if you decide not to work with us.",
  },
  {
    question: "Can you sign an NDA before we share details?",
    answer: "Yes. If your idea is confidential, let us know in the form and we'll sign an NDA before discussing the details.",
  },
] as const;

const channels = [
  { label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: MailIcon },
  { label: "Call us", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: PhoneIcon },
  { label: "WhatsApp", value: "Chat with the team", href: "https://wa.me/919265885370", icon: ChatIcon, external: true },
] as const;

const nextSteps = [
  { title: "We review your enquiry", text: "A senior engineer reads your brief and prepares questions." },
  { title: "Free consultation call", text: "We talk through your goals and suggest the best approach." },
  { title: "Clear proposal", text: "You receive a scope, timeline and estimate to decide on." },
] as const;

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "Contact Us", path: routes.contact },
          ]),
          webPageSchema({
            name: "Contact OryenSolutions",
            description: "Contact OryenSolutions for web development, AI automation, BIM automation, and software integration projects.",
            path: routes.contact,
            type: "ContactPage",
          }),
          faqSchema([...contactFaqs]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Oryen Solutions",
            url: `${siteConfig.url}${routes.contact}`,
            description: "Contact page for Oryen Solutions project and partnership inquiries.",
          },
        ]}
      />
      <Navbar />

      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">great together</span>
          </>
        }
        description="Tell us about your idea or the problem you want solved. We'll come back with honest advice, a suggested approach and a clear next step. No obligation."
        chips={["Free consultation", "NDA on request", "US & global clients"]}
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <aside className="space-y-6 lg:col-span-5 xl:col-span-4 xl:sticky xl:top-28 xl:self-start">
            <div className="space-y-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...("external" in channel ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_16px_40px_rgba(2,16,36,0.06)]"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">{channel.label}</span>
                      <span className="block text-sm font-bold text-[var(--navy)]">{channel.value}</span>
                    </span>
                  </a>
                );
              })}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <MapPinIcon className="h-5 w-5 text-[var(--primary)]" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Based in</p>
                  <p className="text-sm font-bold text-[var(--navy)]">Ahmedabad, India</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <GlobeIcon className="h-5 w-5 text-[var(--primary)]" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Serving</p>
                  <p className="text-sm font-bold text-[var(--navy)]">US & worldwide</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[var(--navy)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">What happens next</p>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400 text-xs font-bold text-[var(--navy)]">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">{step.title}</span>
                      <span className="block text-sm text-slate-300">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-7 xl:col-span-8">
            <ContactUsForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <SectionHeading align="left" eyebrow="FAQ" title="Before you get in touch" />
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
