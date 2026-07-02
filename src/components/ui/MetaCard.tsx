import { cn } from "@/lib/cn";
import {
  colorClasses,
  layoutClasses,
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
        spacingClasses.metaCardPad,
        className,
      )}
    >
      <div className={cn(spacingClasses.metaCardLabelMb, "label")}>
        {label}
      </div>
      <div className={typography.bodyMedium.className}>{value}</div>
    </div>
  );
}
