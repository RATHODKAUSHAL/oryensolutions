import type { Metadata } from "next";

export const siteConfig = {
  name: "OryenSolutions",
  legalName: "Oryen Solutions",
  description:
    "Oryen Solutions is a software development company in Ahmedabad, Gujarat, India delivering web development, SaaS development, CRM development, mobile app development, AI automation, API integrations, and enterprise software solutions for global clients.",
  shortDescription:
    "Custom software, AI automation, and integration engineering for growth-focused businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.oryensolutions.com",
  email: "info@oryensolutions.com",
  phone: "+91 92658 85370",
  addressLocality: "Ahmedabad",
  addressRegion: "Gujarat",
  postalCode: "380001",
  addressCountry: "IN",
  areaServed: ["Ahmedabad", "Gujarat", "India", "Worldwide"],
  socialLinks: [
    "https://www.instagram.com/oryensolutions/",
    "https://www.linkedin.com/company/oryen-solutions/about/",
  ],
  keywords: [
    "web development company India",
    "custom software development company",
    "AI automation agency",
    "AI agent development company",
    "CRM development company",
    "SaaS development company",
    "full stack development agency",
    "React development company",
    "Next.js development agency",
    "Laravel development company",
    "API integration services",
    "business process automation",
    "enterprise software development",
    "mobile app development company",
    "AI powered web applications",
    "Ahmedabad software company",
    "Gujarat software development company",
    "global software development company",
  ] as string[],
} as const;

export const routes = {
  home: "/",
  about: "/about",
  agileMindset: "/agile-mindset",
  careers: "/careers",
  contact: "/contact-us",
  services: "/services",
  servicesWeb: "/services/web-development-digital-solutions",
  servicesAutomation: "/services/software-integration-custom-automation",
  blog: "/blog",
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/Assets/Oryen_Solutions.png",
  type = "website",
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    category: "technology",
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl(image),
          width: 1320,
          height: 752,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function breadcrumbList(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/Assets/Oryen_Solutions.png"),
    image: absoluteUrl("/Assets/Oryen_Solutions.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    areaServed: siteConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    sameAs: siteConfig.socialLinks,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: ["IN", "US", "GB", "AE", "AU", "CA"],
        availableLanguage: ["en"],
      },
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.legalName,
    image: absoluteUrl("/Assets/Oryen_Solutions.png"),
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    priceRange: "$$",
    areaServed: siteConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    sameAs: siteConfig.socialLinks,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    inLanguage: "en",
  };
}

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "Service";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    about: {
      "@id": `${siteConfig.url}#organization`,
    },
    primaryImageOfPage: absoluteUrl("/Assets/Oryen_Solutions.png"),
    inLanguage: "en",
  };
}

export function faqSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  keywords = [],
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: {
      "@id": `${siteConfig.url}#organization`,
    },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(path),
      availableLanguage: ["en"],
    },
    termsOfService: absoluteUrl(routes.contact),
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Startups, SMEs, enterprises",
    },
    keywords: keywords.join(", "),
  };
}

export function articleSchema({
  headline,
  description,
  path,
  image = "/Assets/Agile.jpg",
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    author: {
      "@id": `${siteConfig.url}#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@id": `${siteConfig.url}#organization`,
    },
    author: {
      "@type": "Person",
      name: "OryenSolutions Client",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody:
      "Oryen Solutions is known for practical delivery, responsive communication, and strong execution across software development and automation initiatives.",
  };
}

export function softwareApplicationSchema({
  name,
  description,
  path,
  category,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: category,
    operatingSystem: "Web",
    url: absoluteUrl(path),
    provider: {
      "@id": `${siteConfig.url}#organization`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function blogPostingSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  keywords = [],
  section,
  image = "/Assets/Oryen_Solutions.png",
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  keywords?: string[];
  section?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    headline,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    datePublished,
    dateModified,
    articleSection: section,
    keywords: keywords.join(", "),
    inLanguage: "en",
    author: {
      "@id": `${siteConfig.url}#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
  };
}
