# Oryen Solutions Website — Task List

Last updated: 2026-10-29

**Status legend:** ⬜ To Do · 🟡 In Progress · ✅ Done

## Summary

| Priority | Total | To Do | In Progress | Done |
|----------|------:|------:|------------:|-----:|
| Critical | 6 | 1 | 2 | 3 |
| High | 8 | 4 | 2 | 2 |
| Medium | 15 | 9 | 3 | 3 |
| Low | 1 | 1 | 0 | 0 |
| **Total** | **30** | **15** | **7** | **8** |

## Critical

| # | Area | Task | Details | Status |
|---|------|------|---------|--------|
| 1 | Security | Remove client/applicant PII from git | `git rm --cached data/`; add `data/` to `.gitignore`; consider purging history | 🟡 In Progress — untracked & ignored; history purge pending |
| 2 | Backend | Fix form storage & lead notification | Replace local CSV/disk writes (lost on serverless) with email notification + DB/CRM; validate inputs | ✅ Done — both forms email rathodkaushal2001@gmail.com via Resend (resume attached, reply-to = submitter); CSV storage removed; email format & field length validation added. DB/CRM not added |
| 3 | Security | Add spam protection & upload limits | Honeypot/Turnstile, rate limiting, server-side resume size/type checks | 🟡 In Progress — resume type (PDF/DOC/DOCX) & 4MB size checks done; honeypot/Turnstile & rate limiting pending |
| 4 | Trust | Remove fake testimonials | Delete pravatar/invented testimonials; replace with real client reviews or hide section | ✅ Done — fake pravatar testimonials section deleted; add real client reviews later |
| 5 | Legal | Add Privacy Policy & Terms pages | Required under DPDP Act 2023 for collecting personal data; link from footer and forms | ⬜ To Do |
| 6 | Positioning | Rewrite homepage positioning | Lead with web, mobile, CRM, AI for 9 industries; BIM becomes one specialty; update title/meta description | ✅ Done — homepage now leads with web, mobile, CRM, SaaS & AI; BIM is one specialty; new title/meta description |

## High

| # | Area | Task | Details | Status |
|---|------|------|---------|--------|
| 7 | Content | Create Industries hub + 9 industry pages | Healthcare, Banking & Finance, Education, Logistics & Supply Chain, Automotive, Shopping & Style, Travel & Hospitality, Food & Restaurant, Real Estate | 🟡 In Progress — Industries section with 10 industries added to homepage; individual industry pages pending |
| 8 | Content | Split service pages | Separate pages: Mobile Apps, AI Solutions, CRM, SaaS, UI/UX, Maintenance; fix footer links pointing to same URL | ⬜ To Do |
| 9 | Content | Add Case Studies / Portfolio | 3–5 case studies: problem, solution, tech, measurable result | ⬜ To Do |
| 10 | UI | Hero redesign with CTA | Single clear message instead of auto carousel; buttons: Book free consultation / See our work | ✅ Done — carousel replaced by one clear headline (rotating service word), interactive "What do you want to build?" selector and "Book a free consultation" / "Explore our services" CTAs |
| 11 | UI | Improve contact form | Add service, industry, budget, timeline dropdowns, consent checkbox; Calendly/Cal.com booking | 🟡 In Progress — contact page form now has service, budget & timeline choices and consent checkbox; homepage quick form added; Calendly/Cal.com booking link pending |
| 19 | SEO | Local SEO schema & Google Business Profile | LocalBusiness/ProfessionalService schema with street, postal code, geo, hours; create/link GBP | ⬜ To Do |
| 20 | SEO | Render FAQ & tab content in HTML | FAQ answers and inactive tabs currently not in DOM; hide with CSS instead | ✅ Done — FAQ uses native <details> (answers in HTML); practices section no longer hides content in tabs |
| 24 | Analytics | Add analytics & Search Console | GA4/Plausible, Search Console verification, form conversion tracking, thank-you page | ⬜ To Do |

## Medium

| # | Area | Task | Details | Status |
|---|------|------|---------|--------|
| 12 | UI | Sharper CTAs | Replace generic "Connect to Us" with outcome-specific CTAs | ✅ Done — CTAs rewritten site-wide in navbar, homepage and footer ("Book a free consultation", "Discuss this option", etc.) |
| 13 | UI | Fix typos & small issues | Ravit→Revit, Saas→SaaS, (c)→©, mailto/tel links in footer, miscategorized FAQ, stale Careers date | 🟡 In Progress — Revit/SaaS/© typos, footer mailto/tel links and FAQ categories fixed; stale Careers date pending |
| 14 | Content | Review unverifiable claims | 24/7 zero-downtime, 80% drafting reduction vs 12+ projects; back up or soften | ✅ Done — 80% / 12+ / 24/7 claims removed; replaced with process-based commitments |
| 15 | Content | Add Engagement Models / Pricing guide | Fixed price, T&M, dedicated team; indicative ranges | 🟡 In Progress — Engagement models section added (fixed scope, dedicated team, T&M); indicative price ranges pending |
| 16 | Content | Add Tech Stack page | Full stack list; remove AngularJS (deprecated) | 🟡 In Progress — AngularJS removed; grouped tech stack section on homepage; dedicated page pending |
| 17 | Content | Team / founders on About page | Photos, bios, LinkedIn links | ⬜ To Do |
| 18 | Performance | Optimize images & OG card | Convert 2MB PNGs to WebP, rename without spaces; 1200×630 OG image under 300KB | ⬜ To Do |
| 21 | SEO | Fix homepage FAQ schema mismatch | `homeFaqs` schema must match visible FAQ content | ✅ Done — FAQ section and FAQPage schema now read from the same list (lib/faqs.ts) |
| 22 | SEO | Consistent brand name | Pick "Oryen Solutions" or "OryenSolutions" everywhere | ⬜ To Do |
| 25 | Pages | Custom 404 page | Branded 404 with links to services/contact | ⬜ To Do |
| 26 | GEO | Add llms.txt | Plain summary: who, services, industries, contact | ⬜ To Do |
| 27 | GEO | Add concrete facts | Founding year, team size, founders, project count, clients, pricing/timeline ranges | ⬜ To Do |
| 28 | GEO | Directory listings & reviews | Clutch, GoodFirms, DesignRush, Google reviews; add to `sameAs` | ⬜ To Do |
| 29 | GEO | Founder Person schema | Person markup with LinkedIn `sameAs` | ⬜ To Do |
| 30 | Content | Start Blog / Insights | Answer-style articles: CRM cost in India 2026, app timelines, AI in logistics, etc. | ⬜ To Do |

## Low

| # | Area | Task | Details | Status |
|---|------|------|---------|--------|
| 23 | SEO | Sitemap & meta cleanup | Real `lastModified` dates; drop keywords meta; add new pages to sitemap | ⬜ To Do |
