import { layoutClasses } from "@/lib/design-system";
import { cn } from "@/lib/cn";

export type CaseStudyModuleWidth = "section" | "wide" | "quote";

const moduleWidthClass: Record<CaseStudyModuleWidth, string> = {
  section: layoutClasses.caseStudyModule,
  wide: layoutClasses.caseStudyModule,
  quote: layoutClasses.caseStudyModule,
};

/** Centers case study content blocks with equal horizontal inset. Text stays left-aligned. */
export function CaseStudyModule({
  children,
  width = "section",
  className,
}: {
  children: React.ReactNode;
  width?: CaseStudyModuleWidth;
  className?: string;
}) {
  return (
    <div className={cn(moduleWidthClass[width], className)}>{children}</div>
  );
}
