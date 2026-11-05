import type { Metadata } from "next";

import { CareersClient } from "@/components/pages/CareersClient";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbList, buildMetadata, faqSchema, routes, webPageSchema } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Careers at OryenSolutions",
  description:
    "Learn about careers at OryenSolutions and submit your resume for future opportunities in web development, mobile apps, and software integration.",
  path: routes.careers,
  keywords: ["software careers Ahmedabad", "software developer jobs India", "web development careers"],
});

const careerFaqs = [
  {
    question: "Does OryenSolutions have open jobs right now?",
    answer:
      "As of March 9, 2026, OryenSolutions does not list active openings on the site, but candidates can still submit a resume for future opportunities.",
  },
  {
    question: "What roles fit OryenSolutions best?",
    answer:
      "The strongest fit is for candidates with experience in web development, mobile apps, custom integrations, and practical delivery in fast-moving engineering environments.",
  },
] as const;

export default function CareersPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", path: routes.home },
            { name: "Careers", path: routes.careers },
          ]),
          webPageSchema({
            name: "Careers at OryenSolutions",
            description: "Career page for OryenSolutions with resume submission for future software and automation roles.",
            path: routes.careers,
          }),
          faqSchema([...careerFaqs]),
        ]}
      />
      <CareersClient />
    </>
  );
}
