import { Reveal } from "@/components/case-study/CaseStudyMotion";
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
  paragraphs,
}: Omit<CaseStudyChapterProps, "type">) {
  const lines = headlineLines ?? [headline];

  return (
    <div className={spacingClasses.sectionPadY}>
      <CaseStudyTextShell>
        <Reveal>
          <CaseStudySectionLayout label={<SectionLabel>{label}</SectionLabel>}>
            <DisplayHeading
              as="h2"
              variant="chapter"
              className={spacingClasses.chapterHeadlineMb}
            >
              {lines.map((line, index) => (
                <span key={line} className={index > 0 ? "block" : undefined}>
                  {line}
                </span>
              ))}
            </DisplayHeading>
            <div className={typography.body.className}>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={spacingClasses.paragraphGap}>
                  {paragraph}
                </p>
              ))}
            </div>
          </CaseStudySectionLayout>
        </Reveal>
      </CaseStudyTextShell>
    </div>
  );
}
