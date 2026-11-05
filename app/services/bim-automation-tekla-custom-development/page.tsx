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
      badge="BIM & Tekla Automation"
      slug={routes.servicesBim}
      title="BIM Automation & Tekla Custom Development"
      description="Custom Tekla plugins, macros and Revit tools that remove repetitive modelling, drawing and reporting work, so your structural engineering team delivers faster with fewer errors."
      heroImage="/Assets/BIM & Tekla Services.png"
      highlights={["Tekla Open API", "Drawing automation", "BOM & reports", "Revit tools"]}
      capabilities={[
        {
          title: "Tekla plugin & macro development",
          text: "Custom tools built on the Tekla Open API to automate the repetitive steps in your modelling workflow.",
        },
        {
          title: "Automated drawing creation",
          text: "Generate GA, assembly and single-part drawings and sheets automatically to your standards.",
        },
        {
          title: "BOM & report customization",
          text: "Bills of materials and reports formatted exactly how your team and clients need them.",
        },
        {
          title: "Tekla–Excel integration",
          text: "Move model data to and from Excel and other tools without manual exports and re-entry.",
        },
        {
          title: "Model validation & checks",
          text: "Rule-based checks that catch modelling issues before they reach drawings or the shop floor.",
        },
        {
          title: "Rebar & Revit automation",
          text: "Automation tools for rebar detailing and Revit workflows that cut hours of manual work.",
        },
      ]}
      outcomes={[
        { title: "Less repetitive drafting", text: "Hours of manual drawing and reporting work handled by tools instead." },
        { title: "More consistent output", text: "Every drawing and report follows the same standards automatically." },
        { title: "Fewer detailing errors", text: "Automated checks catch issues early, reducing costly revisions." },
        { title: "Faster project delivery", text: "Your detailers spend more time on engineering and less on admin." },
      ]}
      idealFor={[
        "A steel or precast detailing firm",
        "A structural engineering consultancy",
        "A fabricator using Tekla Structures",
        "A BIM team with repetitive manual workflows",
      ]}
      stack={["Tekla Open API", "Tekla Structures", "Revit API", "AutoCAD", "C# / .NET", "Excel"]}
      faqs={[
        {
          question: "What is BIM automation in Tekla workflows?",
          answer:
            "BIM automation in Tekla uses custom plugins, macros and rules to handle repetitive modelling, drawing and reporting tasks automatically across structural engineering projects.",
        },
        {
          question: "How does Tekla custom development help engineering teams?",
          answer:
            "It shortens detailing time, improves consistency across drawings and reports, reduces manual errors and gives teams more control over recurring engineering workflows.",
        },
        {
          question: "Can you build tools for our specific drawing standards?",
          answer:
            "Yes. We build tools around your company's own templates, drawing standards and reporting formats, so the output matches what your team and clients expect.",
        },
        {
          question: "Do you work with Revit as well as Tekla?",
          answer:
            "Yes. Alongside Tekla, we build automation for Revit and AutoCAD workflows, including rebar detailing and data exchange between tools.",
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
