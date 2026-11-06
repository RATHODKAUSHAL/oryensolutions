export type BlogSection = {
  /** Rendered as an H2 and used for the table of contents anchor. */
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Optional numbered steps rendered as an ordered list. */
  steps?: Array<{ title: string; detail: string }>;
  table?: { headers: string[]; rows: string[][] };
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  /** Short, direct answer shown at the top: targets featured snippets and AI answer engines. */
  keyTakeaway: string;
  sections: BlogSection[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{ label: string; href: string }>;
  relatedPosts: string[];
};
