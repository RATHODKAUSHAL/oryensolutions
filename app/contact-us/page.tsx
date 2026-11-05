import type { Metadata } from "next";

import { ContactUsClient } from "@/components/pages/ContactUsClient";
import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbList, buildMetadata, faqSchema, routes, siteConfig, webPageSchema } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact OryenSolutions",
  description:
    "Contact OryenSolutions to discuss web development, BIM automation, SaaS, CRM, and software integration projects with our team in Ahmedabad.",
  path: routes.contact,
  keywords: ["contact OryenSolutions", "software consultation Ahmedabad", "BIM automation contact"],
});

const contactFaqs = [
  {
    question: "How can I contact OryenSolutions?",
    answer:
      "You can contact OryenSolutions by submitting the project inquiry form, emailing info@oryensolutions.com, or calling +91 92658 85370 for a direct discussion.",
  },
  {
    question: "What should I include in a project inquiry?",
    answer:
      "A strong project inquiry includes the business goal, current workflow challenges, required integrations, expected timeline, and the type of software or automation support you need.",
  },
] as const;

export default function ContactUsPage() {
  return (
    <>
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
            name: "Contact OryenSolutions",
            url: `${siteConfig.url}${routes.contact}`,
            description: "Contact page for OryenSolutions project and partnership inquiries.",
          },
        ]}
      />
      <ContactUsClient />
    </>
  );
}
