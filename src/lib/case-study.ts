import { everskinCaseStudy } from "@/lib/case-study-content/everskin";

export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

export type CaseStudyImageVariant = "default" | "short" | "tall" | "app-wide";

export type CaseStudyBlock =
  | {
      type: "chapter";
      label: string;
      headline: string;
      headlineLines?: string[];
      paragraphs: string[];
    }
  | {
      type: "typo";
      before: string;
      highlight: string;
      after: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      variant?: CaseStudyImageVariant;
      fit?: "cover" | "contain";
      width?: number;
      height?: number;
    }
  | {
      type: "deliverable";
      label: string;
      body: string;
      title?: string;
    };

export type StructuredCaseStudy = {
  slug: string;
  tag: string;
  title: string;
  titleLines?: string[];
  subtitle: string;
  heroImage: string;
  meta: CaseStudyMetaItem[];
  blocks: CaseStudyBlock[];
  nextProject?: {
    title: string;
    href: string;
  };
};

const structuredCaseStudies: Record<string, StructuredCaseStudy> = {
  everskin: everskinCaseStudy,
};

export function getStructuredCaseStudy(
  slug: string,
): StructuredCaseStudy | null {
  return structuredCaseStudies[slug] ?? null;
}

export function getStructuredCaseStudySlugs(): string[] {
  return Object.keys(structuredCaseStudies);
}
