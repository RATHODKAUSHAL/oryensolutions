import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "AI, Integration & Custom Automation",
  description:
    "Connect business systems, automate manual workflows, and improve operational control with OryenSolutions integration and automation services.",
  path: routes.servicesAutomation,
  keywords: ["API integration services", "workflow automation company", "custom software integration"],
  image: "/Assets/Web Development & Digital Solutions.png",
});

export default function SoftwareIntegrationPage() {
  return (
    <ServicePageTemplate
      badge="AI, Integration & Automation"
      slug={routes.servicesAutomation}
      title="AI, Integration & Custom Automation"
      description="Connect the tools your business already uses, remove repetitive manual hand-offs and let automation and AI take care of the busywork, so your team can focus on what matters."
      heroImage="/Assets/Web Development & Digital Solutions.png"
      highlights={["API integrations", "Workflow automation", "AI assistants", "Data sync"]}
      capabilities={[
        {
          title: "API & third-party integrations",
          text: "Connect CRMs, payment gateways, ERPs, spreadsheets and SaaS tools so data flows without re-typing.",
        },
        {
          title: "Workflow automation",
          text: "Automate approvals, notifications, document generation and routine tasks across your teams.",
        },
        {
          title: "AI assistants & chatbots",
          text: "AI-powered assistants that answer customer questions, qualify leads or support your team internally.",
        },
        {
          title: "Data sync & transformation",
          text: "Keep systems in step with reliable, monitored data pipelines and clean, consistent records.",
        },
        {
          title: "Reporting & dashboards",
          text: "Bring data from every tool into one live dashboard so decisions are based on up-to-date numbers.",
        },
        {
          title: "Legacy system modernization",
          text: "Wrap or replace outdated systems step by step, without disrupting day-to-day operations.",
        },
      ]}
      outcomes={[
        { title: "Hours saved every week", text: "Repetitive tasks run automatically instead of eating up your team's time." },
        { title: "Fewer errors", text: "No more copy-paste mistakes or mismatched records between systems." },
        { title: "One source of truth", text: "Everyone works from the same, up-to-date data." },
        { title: "Faster response times", text: "Customers and teams get answers and updates instantly." },
      ]}
      idealFor={[
        "A team re-entering data across multiple tools",
        "A business wanting to add AI to customer support",
        "A company with a legacy system that's slowing it down",
        "Leaders who need live reporting across departments",
      ]}
      stack={["Node.js", "REST APIs", "OpenAI", "Claude", "Google Workspace", "Excel", "Stripe", "PostgreSQL"]}
      faqs={[
        {
          question: "What kinds of systems can you integrate?",
          answer:
            "We integrate CRM platforms, ERPs, payment gateways, spreadsheets and Google Workspace, reporting tools, AI models and almost any third-party service that offers an API.",
        },
        {
          question: "Can you add AI to our existing software?",
          answer:
            "Yes. We can add AI assistants, smart search, document processing and automated responses to your existing products and internal tools using models such as OpenAI and Claude.",
        },
        {
          question: "Why invest in custom automation?",
          answer:
            "Custom automation removes repetitive manual work, improves data accuracy and lets your team move faster, often paying for itself through time saved within months.",
        },
        {
          question: "Will automation disrupt our current operations?",
          answer:
            "No. We roll out integrations and automation step by step, test them alongside your current process and switch over only when everything works reliably.",
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
