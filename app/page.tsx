import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { CTASection } from "@/components/sections/CTASection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StartupSection } from "@/components/sections/StartupSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { homeFaqs } from "@/lib/faqs";
import { breadcrumbList, buildMetadata, faqSchema, routes, serviceSchema, webPageSchema } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Custom Software, Web & Mobile App Development Company",
  description:
    "Oryen Solutions builds web platforms, mobile apps, CRM & ERP systems, SaaS products and startup MVPs for clients in the US and worldwide, across 10+ industries. Book a free consultation.",
  path: routes.home,
  keywords: ["custom software development", "mobile app development company", "CRM development company", "SaaS development company"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          breadcrumbList([{ name: "Home", path: routes.home }]),
          webPageSchema({
            name: "OryenSolutions Home",
            description:
              "Homepage for OryenSolutions, a software development company offering web development, mobile apps, AI automation, and software integration services.",
            path: routes.home,
          }),
          faqSchema([...homeFaqs]),
          serviceSchema({
            name: "Web Development & Digital Solutions",
            description: "Custom websites, SaaS products, CRM systems, and scalable web applications.",
            path: routes.servicesWeb,
            serviceType: "Web Development",
          }),
          serviceSchema({
            name: "Software Integration & Custom Automation",
            description: "Business system integrations, automation pipelines, and workflow orchestration.",
            path: routes.servicesAutomation,
            serviceType: "Software Integration",
          }),
        ]}
      />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <IndustriesSection />
      <StartupSection />
      <WhyChooseUs />
      <ProcessSection />
      <EngagementSection />
      <IntegrationsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
