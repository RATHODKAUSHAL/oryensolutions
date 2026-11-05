import Link from "next/link";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ArrowRightIcon } from "@/components/ui/icons";
import { homeFaqs } from "@/lib/faqs";
import { routes } from "@/lib/site";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions clients ask before starting"
            description="Can't find what you're looking for? Ask us directly. We're happy to talk through your project, even if it's just an idea."
          />
          <Link
            href={routes.contact}
            className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--primary)]"
          >
            Ask us a question
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <FaqAccordion items={homeFaqs} />
      </div>
    </section>
  );
}
