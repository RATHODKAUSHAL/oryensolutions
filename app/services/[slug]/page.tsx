import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TopicalServicePage } from "@/app/services/_components/TopicalServicePage";
import { landingPageMap, landingPages } from "@/lib/landing-pages";
import { buildMetadata } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPageMap[slug];

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function ServiceLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = landingPageMap[slug];

  if (!page) {
    notFound();
  }

  return <TopicalServicePage page={page} />;
}
