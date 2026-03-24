# Twezuule Foundation Website

Modern, accessible, mobile-first NGO website for Twezuule Foundation (Uganda), a youth-driven and disability-led organization.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (subtle, reduced-motion aware)
- React Hook Form + Zod
- JSON content layer for editable content

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Accessibility Features

- Skip-to-content link in global layout
- Keyboard focus styles and semantic HTML
- Reduced-motion support via CSS and Framer Motion
- Accessible forms with labels, validation, and ARIA error messaging
- Accessibility Settings widget:
	- High contrast mode
	- Larger text mode
	- Preferences persisted via localStorage

## Content Editing (No Code Changes Required)

Edit JSON files under the content folder:

- Blog posts: content/blog/posts.json
- Programs: content/programs/programs.json
- Focus area details: content/focus-areas.json
- Case studies: content/case-studies/case-studies.json

After editing content, save files and refresh the site.

## Key Routes

- / (Home)
- /about
- /programs and /programs/[slug]
- /focus-areas/[slug]
- /impact
- /get-involved
- /donate
- /news and /news/[slug]
- /contact

## SEO

- Global metadata with OpenGraph and Twitter cards
- robots.txt via app/robots.ts
- sitemap.xml via app/sitemap.ts
