import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Web, Mobile & SaaS Development",
  description:
    "Custom web applications, mobile apps, CRM & ERP systems and SaaS products built by Oryen Solutions for startups and businesses in the US and worldwide.",
  path: routes.servicesWeb,
  keywords: ["Next.js development services", "SaaS development company", "custom CRM development"],
  image: "/Assets/Web Development & Digital Solutions.png",
});

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Web, Mobile & SaaS"
      slug={routes.servicesWeb}
      title="Web, Mobile & SaaS Development"
      description="From customer-facing websites and mobile apps to CRMs and full SaaS products, we design and build software that's fast, reliable and ready to grow with your business."
      heroImage="/Assets/Web Development & Digital Solutions.png"
      highlights={["Next.js & React", "Android & iOS", "CRM & ERP", "SaaS products"]}
      capabilities={[
        {
          title: "Web applications & portals",
          text: "Customer portals, booking systems, marketplaces and internal tools built on a modern, secure stack.",
        },
        {
          title: "Mobile apps",
          text: "Android and iOS apps with intuitive UX, offline support and real-time sync with your back office.",
        },
        {
          title: "CRM & ERP systems",
          text: "One system for leads, customers, orders, inventory and reporting, shaped around how your team works.",
        },
        {
          title: "SaaS product engineering",
          text: "From MVP to scale: multi-tenant architecture, subscriptions, billing and analytics built in.",
        },
        {
          title: "UI/UX design",
          text: "Research-led wireframes and clickable prototypes so you can validate the experience before development.",
        },
        {
          title: "Business websites & SEO",
          text: "Fast, SEO-ready websites with clean content structure that turn visitors into enquiries.",
        },
      ]}
      outcomes={[
        { title: "Faster time to market", text: "Weekly working builds mean you launch sooner and start learning from real users." },
        { title: "Less manual work", text: "Replace spreadsheets and copy-paste with workflows that run themselves." },
        { title: "Better conversion", text: "Clear, fast user journeys that turn more visitors into customers." },
        { title: "Room to grow", text: "Scalable architecture that handles more users and features without a rebuild." },
      ]}
      idealFor={[
        "A startup building its first product or MVP",
        "A growing business outgrowing spreadsheets",
        "A company replacing slow or outdated software",
        "A team that needs a customer-facing app",
      ]}
      stack={["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Stripe", "Figma"]}
      faqs={[
        {
          question: "What does Oryen Solutions build in web and mobile projects?",
          answer:
            "We build business websites, web applications, customer portals, mobile apps for Android and iOS, CRM and ERP systems, dashboards and full SaaS products, with a focus on performance, usability and maintainability.",
        },
        {
          question: "How long does it take to build a web or mobile app?",
          answer:
            "Most projects take 4 to 12 weeks depending on scope. An MVP with a focused feature set is usually at the shorter end, and we show you a working build every week.",
        },
        {
          question: "Do you build SaaS products from scratch?",
          answer:
            "Yes. We take SaaS products from idea to launch, including architecture, user management, subscriptions and billing, analytics dashboards and ongoing feature development.",
        },
        {
          question: "How do you make websites SEO-ready?",
          answer:
            "We use semantic HTML, structured metadata, optimized images, fast page loads and a clear content architecture on a Next.js foundation that supports strong technical SEO.",
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
