import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Web Development & Digital Solutions",
  description:
    "Custom web development, SaaS engineering, CRM implementation, and SEO-ready digital platforms built by OryenSolutions.",
  path: routes.servicesWeb,
  keywords: ["Next.js development services", "SaaS development company", "custom CRM development"],
  image: "/Assets/Web Development & Digital Solutions.png",
});

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Web & Digital Services"
      slug={routes.servicesWeb}
      title="Web Development & Digital Solutions"
      description="From business websites to full SaaS products, we build modern digital platforms focused on performance, UX quality, and scalable architecture."
      heroImage="/Assets/Web Development & Digital Solutions.png"
      highlights={["Next.js & React", "SaaS Platforms", "Modern UX"]}
      capabilities={[
        "Custom website and web app development",
        "SaaS product engineering from MVP to scale",
        "CRM and dashboard implementation",
        "Frontend performance optimization",
        "SEO-ready architecture and content structure",
      ]}
      outcomes={[
        "Faster feature rollout cycles",
        "Improved user retention and engagement",
        "Better conversion through cleaner UX flows",
        "Reliable and scalable long-term architecture",
      ]}
      faqs={[
        {
          question: "What does OryenSolutions build in web development projects?",
          answer:
            "OryenSolutions builds business websites, SaaS platforms, dashboards, portals, CRM systems, and custom web applications with a focus on performance and maintainability.",
        },
        {
          question: "How do you make websites SEO-ready?",
          answer:
            "The team uses semantic HTML, structured metadata, optimized images, clear content architecture, and a scalable Next.js foundation that supports strong technical SEO.",
        },
        {
          question: "Do you develop custom SaaS products?",
          answer:
            "Yes. OryenSolutions develops SaaS products from MVP to scale, including dashboards, role-based user areas, admin panels, and connected business workflows.",
        },
        {
          question: "Can you build a custom CRM as part of web development?",
          answer:
            "Yes. CRM development is one of our core service areas, especially for businesses that need lead tracking, follow-up workflows, and reporting tailored to their process.",
        },
        {
          question: "Why use Next.js and React for modern web applications?",
          answer:
            "Next.js and React support fast interfaces, scalable component architecture, and strong SEO implementation, making them well suited to commercial web applications.",
        },
        {
          question: "Do you redesign existing websites or only build new ones?",
          answer:
            "We do both. We can modernize outdated websites, improve conversion-focused UX, and rebuild the technical foundation for performance and search visibility.",
        },
        {
          question: "Can your web development team integrate third-party tools?",
          answer:
            "Yes. We commonly integrate forms, CRMs, payment systems, APIs, analytics tools, and internal operational software.",
        },
        {
          question: "Do you build AI-powered web applications?",
          answer:
            "Yes. We can embed AI features such as workflow assistance, search, summarization, and automation into modern web applications.",
        },
        {
          question: "What businesses benefit most from custom web development?",
          answer:
            "Growth-focused businesses, SaaS companies, professional service firms, and organizations with unique process needs benefit most from custom web development.",
        },
        {
          question: "Do you support post-launch improvements?",
          answer:
            "Yes. We support ongoing optimization, feature iteration, performance tuning, and maintenance after launch.",
        },
        {
          question: "Why choose OryenSolutions as a web development company in India?",
          answer:
            "OryenSolutions combines modern engineering, SEO-aware architecture, and practical business workflow understanding from Ahmedabad, Gujarat, India for local and global clients.",
        },
      ]}
    />
  );
}
