import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "BIM Automation & Tekla Custom Development",
  description:
    "Improve structural engineering workflows with BIM automation, Tekla custom development, drawing automation, and reporting tools from OryenSolutions.",
  path: routes.servicesBim,
  keywords: ["Tekla custom development", "BIM automation company", "drawing automation services"],
  image: "/Assets/BIM & Tekla Services.png",
});

export default function BimAutomationPage() {
  return (
    <ServicePageTemplate
      badge="BIM & Tekla Services"
      slug={routes.servicesBim}
      title="BIM Automation & Tekla Custom Development"
      description="We build custom Tekla tools and BIM automation workflows to reduce manual effort, improve model consistency, and accelerate engineering delivery."
      heroImage="/Assets/BIM & Tekla Services.png"
      highlights={["Tekla Open API", "Drawing Automation", "Faster Detailing"]}
      capabilities={[
        "Custom Tekla plugin and macro development",
        "Automated drawing creation and sheet generation",
        "BOM and reporting customization",
        "Tekla + Excel workflow automation",
        "Model validation and rule-based checks",
      ]}
      outcomes={[
        "Reduced repetitive drafting time",
        "Improved detail accuracy and consistency",
        "Faster issue resolution in project cycles",
        "Higher visibility in structural deliverables",
      ]}
      faqs={[
        {
          question: "What is BIM automation in Tekla workflows?",
          answer:
            "BIM automation in Tekla workflows uses custom tools, plugins, and rules to reduce repetitive modeling, drawing, and reporting tasks across structural engineering projects.",
        },
        {
          question: "How does Tekla custom development help engineering teams?",
          answer:
            "Tekla custom development improves consistency, shortens detailing time, reduces manual errors, and gives teams better control over recurring engineering workflows.",
        },
        {
          question: "What kinds of BIM workflows can be automated?",
          answer:
            "Common automation targets include drawing generation, BOM creation, repetitive detailing tasks, model checks, and recurring reporting workflows.",
        },
        {
          question: "Do you build custom Tekla plugins?",
          answer:
            "Yes. OryenSolutions develops Tekla plugins and Tekla API-based tools aligned with the actual standards and process needs of structural engineering teams.",
        },
        {
          question: "Can BIM automation reduce drawing preparation time?",
          answer:
            "Yes. Drawing-related repetitive work is often one of the highest-value areas for BIM and Tekla automation.",
        },
        {
          question: "How do you identify the best Tekla automation opportunity?",
          answer:
            "We review the live workflow, find repetitive steps, and prioritize the tasks that consume time or create inconsistency across projects.",
        },
        {
          question: "Can custom development improve reporting and BOM outputs?",
          answer:
            "Yes. We can automate and standardize reports, BOMs, exports, and related deliverables used by engineering teams.",
        },
        {
          question: "Is BIM automation useful for smaller detailing teams?",
          answer:
            "Yes. Smaller teams often gain a lot because automation frees up limited resources and reduces repetitive manual workload.",
        },
        {
          question: "Can Tekla tools integrate with Excel or internal systems?",
          answer:
            "Yes. We can build workflows that move Tekla data into spreadsheets, dashboards, or connected internal business systems.",
        },
        {
          question: "Do you support BIM automation services outside India?",
          answer:
            "Yes. OryenSolutions works with structural engineering and BIM-focused teams in India and international markets.",
        },
        {
          question: "Why choose OryenSolutions for BIM automation and Tekla custom development?",
          answer:
            "We combine software engineering capability with practical BIM workflow understanding, which is essential for useful and adoptable automation.",
        },
      ]}
    />
  );
}
