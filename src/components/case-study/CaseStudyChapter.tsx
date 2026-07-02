import { Reveal } from "@/components/case-study/CaseStudyMotion";
import { CaseStudyChapterLayout } from "@/components/case-study/CaseStudyChapterLayout";
import { CaseStudySectionLayout } from "@/components/case-study/CaseStudySectionLayout";
import { CaseStudyTextShell } from "@/components/case-study/CaseStudyTextShell";
import { DisplayHeading, SectionLabel } from "@/components/ui";
import type { CaseStudyBlock } from "@/lib/case-study";
import { spacingClasses, typography } from "@/lib/design-system";

export type CaseStudyChapterProps = Extract<
  CaseStudyBlock,
  { type: "chapter" }
>;

/** Narrative section — challenge, approach, outcome, etc. */
export function CaseStudyChapter({
  label,
  headline,
  headlineLines,
  headlineLayout = "left",
  paragraphs,
}: Omit<CaseStudyChapterProps, "type">) {
  const lines = headlineLines ?? [headline];
  const headlineEl = (
    <DisplayHeading
      as="h2"
      variant="section"
      className={headlineLayout === "right" ? spacingClasses.chapterHeadlineMb : undefined}
    >
      {lines.map((line, index) => (
        <span key={line} className={index > 0 ? "block" : undefined}>
          {line}
        </span>
      ))}
    </DisplayHeading>
  );
  const bodyEl = (
    <div className={typography.body.className}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={spacingClasses.paragraphGap}>
          {paragraph}
        </p>
      ))}
    </div>
  );

  return (
    <div className={spacingClasses.sectionPadY}>
      <CaseStudyTextShell>
        <Reveal>
          {headlineLayout === "right" ? (
            <CaseStudySectionLayout label={<SectionLabel>{label}</SectionLabel>}>
              {headlineEl}
              {bodyEl}
            </CaseStudySectionLayout>
          ) : (
            <CaseStudyChapterLayout
              label={<SectionLabel>{label}</SectionLabel>}
              headline={headlineEl}
            >
              {bodyEl}
            </CaseStudyChapterLayout>
          )}
        </Reveal>
      </CaseStudyTextShell>
    </div>
  );
}
