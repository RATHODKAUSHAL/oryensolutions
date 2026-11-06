import { businessPosts } from "./posts-business";
import { technologyPosts } from "./posts-technology";
import type { BlogPost, BlogSection } from "./types";

export type { BlogPost, BlogSection } from "./types";

export const blogPosts: BlogPost[] = [...businessPosts, ...technologyPosts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export const blogPostMap: Record<string, BlogPost> = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));

export function blogPath(slug: string) {
  return `/blog/${slug}`;
}

export function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function sectionText(section: BlogSection) {
  return [
    section.heading,
    ...(section.paragraphs ?? []),
    ...(section.bullets ?? []),
    ...(section.steps ?? []).flatMap((step) => [step.title, step.detail]),
    ...(section.table ? section.table.rows.flat() : []),
  ].join(" ");
}

export function readingMinutes(post: BlogPost) {
  const text = [post.keyTakeaway, ...post.sections.map(sectionText), ...post.faqs.flatMap((f) => [f.question, f.answer])].join(" ");
  return Math.max(3, Math.round(text.split(/\s+/).length / 220));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
