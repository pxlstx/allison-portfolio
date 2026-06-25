import { cn } from "@/lib/cn";
import { iconSizes, type IconSize } from "@/lib/design-system/icons";

type IconProps = {
  name: string;
  size?: IconSize | number;
  className?: string;
  label?: string;
};

export function Icon({ name, size = "md", className, label }: IconProps) {
  const px = typeof size === "number" ? size : iconSizes[size];

  return (
    <span
      className={cn("material-symbols-outlined select-none", className)}
      style={{
        fontSize: px,
        fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' ${px}`,
      }}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {name}
    </span>
  );
}
