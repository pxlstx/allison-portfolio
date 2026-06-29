import { avaCaseStudy } from "@/lib/case-study-content/ava";
import { everskinCaseStudy } from "@/lib/case-study-content/everskin";
import { expeerlyCaseStudy } from "@/lib/case-study-content/expeerly";
import { kumiCaseStudy } from "@/lib/case-study-content/kumi";

export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

export type CaseStudyImageVariant = "default" | "short" | "tall" | "app-wide";

export type CaseStudyBlock =
  | {
      /** Narrative section — challenge, approach, outcome, etc. */
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
      inset?: "loose" | "loose-wide" | "plain";
      focus?: "top" | "center" | "low" | "bottom";
    }
  | {
      type: "deliverable";
      label: string;
      title?: string;
      titleLayout?: "left" | "right";
      body: string;
    }
  | {
      type: "stats";
      items: {
        target: number;
        prefix?: string;
        suffix?: string;
        label: string;
      }[];
    }
  | {
      type: "testimonial";
      quote: string;
      attribution: string;
    };

export type StructuredCaseStudy = {
  slug: string;
  tag: string;
  title: string;
  titleLines?: string[];
  subtitle: string;
  heroImage: string;
  heroImageFocus?: "top" | "center" | "low" | "bottom";
  meta: CaseStudyMetaItem[];
  blocks: CaseStudyBlock[];
  nextProject?: {
    title: string;
    href: string;
  };
};

const structuredCaseStudies: Record<string, StructuredCaseStudy> = {
  ava: avaCaseStudy,
  everskin: everskinCaseStudy,
  expeerly: expeerlyCaseStudy,
  kumi: kumiCaseStudy,
};

export function getStructuredCaseStudy(
  slug: string,
): StructuredCaseStudy | null {
  return structuredCaseStudies[slug] ?? null;
}

export function getStructuredCaseStudySlugs(): string[] {
  return Object.keys(structuredCaseStudies);
}
