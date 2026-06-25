import { cn } from "@/lib/cn";
import {
  colorClasses,
  layoutClasses,
  spacing,
  spacingClasses,
  typography,
} from "@/lib/design-system";

type MetaCardProps = {
  label: string;
  value: string;
  className?: string;
};

export function MetaCard({ label, value, className }: MetaCardProps) {
  return (
    <div
      className={cn(
        layoutClasses.radius,
        "border",
        colorClasses.borderWhite18,
        className,
      )}
      style={{ padding: `${spacing.metaCardPaddingY} ${spacing.pageXMobile}` }}
    >
      <div className={cn(spacingClasses.metaCardLabelMb, colorClasses.textAccent, typography.label.className)}>
        {label}
      </div>
      <div className={typography.bodyMedium.className}>{value}</div>
    </div>
  );
}
