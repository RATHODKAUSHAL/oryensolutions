import type { MetadataRoute } from "next";

import { landingPages } from "@/lib/landing-pages";
import { routes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-07T00:00:00.000Z");

  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}${routes.about}`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}${routes.agileMindset}`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteConfig.url}${routes.careers}`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}${routes.contact}`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}${routes.services}`, lastModified, changeFrequency: "weekly", priority: 0.92 },
    { url: `${siteConfig.url}${routes.servicesWeb}`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}${routes.servicesAutomation}`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    ...landingPages.map((page) => ({
      url: `${siteConfig.url}/services/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.84,
    })),
  ];
}
