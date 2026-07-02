import { layoutClasses, spacingClasses } from "@/lib/design-system";
import { cn } from "@/lib/cn";

/** Challenge / approach grid — label + chapter headline in left column, body in right. */
export function CaseStudyChapterLayout({
  label,
  headline,
  children,
  className,
}: {
  label: React.ReactNode;
  headline: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        layoutClasses.caseStudyModule,
        "grid items-start gap-4",
        spacingClasses.caseStudyChapterGrid,
        spacingClasses.caseStudySectionGap,
        className,
      )}
    >
      <div className={cn(spacingClasses.caseStudySectionLabelPt, "min-w-0")}>
        {label}
        {headline}
      </div>
      <div className="min-w-0">{children}</div>
    </article>
  );
}
