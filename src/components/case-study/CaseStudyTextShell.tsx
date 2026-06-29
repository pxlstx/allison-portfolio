import { layoutClasses, spacingClasses } from "@/lib/design-system";
import { cn } from "@/lib/cn";

export function CaseStudyTextShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        layoutClasses.caseStudyTextShell,
        spacingClasses.pagePadX,
        className,
      )}
    >
      {children}
    </div>
  );
}
