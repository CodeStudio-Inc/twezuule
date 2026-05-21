import fs from "fs";
import path from "path";
import { getReadingTime } from "./utils";

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  coverImage: string;
  content: ContentBlock[];
};

export type Program = {
  slug: string;
  title: string;
  focusArea: string;
  summary: string;
  problem: string;
  activities: string[];
  audience: string[];
  outcomes: string[];
  howToJoin: string[];
  coverImage: string;
  heroImage?: string;
  gallery?: string[];
  stats?: { label: string; value: string }[];
  quote?: string;
  quoteAuthor?: string;
  keyOutcomes?: string[];
  sections?: Array<{
    title: string;
    description: string;
    items?: string[];
    image?: string;
  }>;
};

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  location: string;
  outcome: string;
};

export type FocusAreaProgram = {
  title: string;
  summary: string;
  projects: string[];
};

export type FocusAreaDetail = {
  slug: string;
  title: string;
  description: string;
  programs: FocusAreaProgram[];
};

const contentRoot = path.join(process.cwd(), "content");

function readJson<T>(relativePath: string): T {
  const filePath = path.join(contentRoot, relativePath);
  const file = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(file) as T;
}

export function getAllPosts() {
  const posts = readJson<BlogPost[]>("blog/posts.json");
  return posts
    .map((post) => ({
      ...post,
      readingTime: getReadingTime(
        post.content
          .map((block) => ("text" in block ? block.text : block.items?.join(" ") || ""))
          .join(" ")
      ),
    }))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getPrograms() {
  return readJson<Program[]>("programs/programs.json");
}

export function getProgramBySlug(slug: string) {
  return getPrograms().find((program) => program.slug === slug);
}

export function getCaseStudies() {
  return readJson<CaseStudy[]>("case-studies/case-studies.json");
}

export function getFocusAreasDetail() {
  return readJson<FocusAreaDetail[]>("focus-areas.json");
}

export function getFocusAreaDetailBySlug(slug: string) {
  return getFocusAreasDetail().find((area) => area.slug === slug);
}
