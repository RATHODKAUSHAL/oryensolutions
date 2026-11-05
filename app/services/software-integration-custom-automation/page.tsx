import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Software Integration & Custom Automation",
  description:
    "Connect business systems, automate manual workflows, and improve operational control with OryenSolutions integration and automation services.",
  path: routes.servicesAutomation,
  keywords: ["API integration services", "workflow automation company", "custom software integration"],
  image: "/Assets/Web Development & Digital Solutions.png",
});

export default function SoftwareIntegrationPage() {
  return (
    <ServicePageTemplate
      badge="Integration Services"
      slug={routes.servicesAutomation}
      title="Software Integration & Custom Automation"
      description="We connect your business tools, remove repetitive manual handoffs, and create automation pipelines that improve speed, accuracy, and operational control."
      heroImage="/Assets/Web Development & Digital Solutions.png"
      highlights={["API Integrations", "Automation Pipelines", "Workflow Sync"]}
      capabilities={[
        "Third-party API integrations and middleware",
        "Cross-system data sync and transformation",
        "Custom process automation scripts/services",
        "Notification and workflow orchestration",
        "Reporting and dashboard data consolidation",
      ]}
      outcomes={[
        "Reduced manual operational workload",
        "Lower integration errors and duplicated effort",
        "Improved process visibility across teams",
        "Higher execution speed with connected systems",
      ]}
      faqs={[
        {
          question: "What kinds of systems can OryenSolutions integrate?",
          answer:
            "OryenSolutions can integrate CRM platforms, payment systems, internal dashboards, spreadsheets, reporting tools, and third-party APIs used in day-to-day operations.",
        },
        {
          question: "Why invest in custom automation?",
          answer:
            "Custom automation reduces repetitive manual work, improves data consistency, and helps teams move faster with fewer operational bottlenecks.",
        },
        {
          question: "What are software integration services?",
          answer:
            "Software integration services connect business systems so data can move automatically, workflows can trigger reliably, and teams can work with fewer manual handoffs.",
        },
        {
          question: "Can integrations connect our website, CRM, and internal tools?",
          answer:
            "Yes. We frequently connect lead forms, websites, CRMs, dashboards, spreadsheets, and internal software into one operational flow.",
        },
        {
          question: "Do you build workflow automation on top of integrations?",
          answer:
            "Yes. Once systems are connected, we can automate notifications, assignments, approvals, reporting, and repetitive operational tasks.",
        },
        {
          question: "How do you handle integration reliability?",
          answer:
            "We design for error handling, validation, retries, and monitoring so integrations remain dependable in real business usage.",
        },
        {
          question: "Can you help if our processes span multiple SaaS tools?",
          answer:
            "Yes. Multi-tool workflows are a common reason businesses invest in custom integration and automation work.",
        },
        {
          question: "Is custom integration better than generic connector tools?",
          answer:
            "Custom integrations provide more control over data quality, business rules, edge cases, and long-term extensibility than generic connector setups.",
        },
        {
          question: "Can this service support AI automation initiatives?",
          answer:
            "Yes. AI automation becomes more useful when connected to CRMs, knowledge sources, ticketing systems, and operational data through integrations.",
        },
        {
          question: "What teams benefit most from custom automation?",
          answer:
            "Sales, support, operations, and delivery teams benefit when repetitive handoffs and duplicate data entry slow down execution.",
        },
        {
          question: "Do you offer software integration services for businesses in India and globally?",
          answer:
            "Yes. OryenSolutions supports software integration and automation projects for companies in Ahmedabad, Gujarat, India and international markets.",
        },
      ]}
    />
  );
}
