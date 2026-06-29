import { layoutClasses, spacingClasses } from "@/lib/design-system";
import { cn } from "@/lib/cn";

/** Shared 260px label column + 720px content column for chapters and deliverables. */
export function CaseStudySectionLayout({
  label,
  children,
  className,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        layoutClasses.caseStudyModule,
        "grid items-start gap-4",
        spacingClasses.caseStudySectionGrid,
        spacingClasses.caseStudySectionGap,
        className,
      )}
    >
      <div className={spacingClasses.caseStudySectionLabelPt}>{label}</div>
      <div className={cn(layoutClasses.maxWidthProse, "min-w-0")}>{children}</div>
    </article>
  );
}
