import { Reveal } from "@/components/case-study/CaseStudyMotion";
import { CaseStudySectionLayout } from "@/components/case-study/CaseStudySectionLayout";
import { CaseStudyTextShell } from "@/components/case-study/CaseStudyTextShell";
import { DisplayHeading } from "@/components/ui";
import type { CaseStudyBlock } from "@/lib/case-study";
import { colorClasses, spacingClasses, typography } from "@/lib/design-system";
import { cn } from "@/lib/cn";

export type CaseStudyDeliverableProps = Extract<
  CaseStudyBlock,
  { type: "deliverable" }
>;

/** Deliverable section — brand identity, platform, app, etc. */
export function CaseStudyDeliverable({
  label,
  title,
  titleLayout = "left",
  body,
}: Omit<CaseStudyDeliverableProps, "type">) {
  const titleOnRight = titleLayout === "right" && title;

  return (
    <CaseStudyTextShell>
      <Reveal>
        <CaseStudySectionLayout
          className={cn(
            "border-t",
            spacingClasses.deliverablePadY,
            colorClasses.borderDefault,
          )}
          label={
            <>
              <div
                className={cn(
                  "label",
                  titleOnRight && spacingClasses.deliverableLabelOptical,
                )}
              >
                {label}
              </div>
              {title && !titleOnRight ? (
                <DisplayHeading
                  as="p"
                  variant="closing"
                  className={spacingClasses.deliverableTitleMt}
                >
                  {title}
                </DisplayHeading>
              ) : null}
            </>
          }
        >
          {titleOnRight ? (
            <DisplayHeading
              as="p"
              variant="closing"
              className={cn(
                spacingClasses.deliverableTitleMb,
                spacingClasses.deliverableTitleOptical,
              )}
            >
              {title}
            </DisplayHeading>
          ) : null}
          <p className={typography.body.className}>{body}</p>
        </CaseStudySectionLayout>
      </Reveal>
    </CaseStudyTextShell>
  );
}
