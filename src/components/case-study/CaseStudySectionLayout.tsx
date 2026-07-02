import { layoutClasses, spacingClasses } from "@/lib/design-system";
import { cn } from "@/lib/cn";

/** Deliverable grid — 260px label column, title + body in 720px content column. */
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
        "grid items-baseline gap-4",
        spacingClasses.caseStudySectionGrid,
        spacingClasses.caseStudySectionGap,
        className,
      )}
    >
      <div className="min-w-0">{label}</div>
      <div className={cn(layoutClasses.maxWidthProse, "min-w-0")}>{children}</div>
    </article>
  );
}
