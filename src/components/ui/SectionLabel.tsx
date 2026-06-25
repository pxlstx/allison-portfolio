import { cn } from "@/lib/cn";
import { colorClasses, spacingClasses, typography } from "@/lib/design-system";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        spacingClasses.sectionLabelMb,
        "flex items-center",
        spacingClasses.labelGapMd,
        colorClasses.textAccent,
        typography.label.className,
        className,
      )}
    >
      <span className={cn("block h-px", spacingClasses.eyebrowBarSm, colorClasses.bgAccent)} aria-hidden />
      {children}
    </div>
  );
}

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  barWidth?: "sm" | "md";
};

export function Eyebrow({ children, className, barWidth = "md" }: EyebrowProps) {
  return (
    <div
      className={cn(
        "flex items-center",
        spacingClasses.labelGapSm,
        colorClasses.textAccent,
        typography.label.className,
        className,
      )}
    >
      <span
        className={cn("block h-px", colorClasses.bgAccent, barWidth === "sm" ? spacingClasses.eyebrowBarSm : spacingClasses.eyebrowBarMd)}
        aria-hidden
      />
      {children}
    </div>
  );
}
