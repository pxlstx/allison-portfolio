import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/case-studies");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  featured?: boolean;
  cover?: string;
};

export type CaseStudy = CaseStudyMeta & {
  content: string;
};

function parseFile(slug: string, raw: string): CaseStudy {
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    year: String(data.year ?? ""),
    role: String(data.role ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    featured: Boolean(data.featured),
    cover: data.cover ? String(data.cover) : undefined,
    content,
  };
}

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCaseStudies(): CaseStudyMeta[] {
  return getCaseStudySlugs()
    .map((slug) => {
      const raw = fs.readFileSync(
        path.join(CONTENT_DIR, `${slug}.mdx`),
        "utf8",
      );
      const { content: _content, ...meta } = parseFile(slug, raw);
      return meta;
    })
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  return parseFile(slug, raw);
}
