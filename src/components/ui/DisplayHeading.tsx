import { cn } from "@/lib/cn";
import { colorClasses, typography } from "@/lib/design-system";

const variantClass = {
  display: typography.display.className,
  hero: typography.displayHero.className,
  chapter: typography.displayChapter.className,
  lead: typography.lead.className,
  deliverableTitle: typography.deliverableTitle.className,
  cta: typography.ctaLink.className,
  bodyLarge: typography.bodyLarge.className,
  body: typography.body.className,
  bodyMedium: typography.bodyMedium.className,
  bodySmall: typography.bodySmall.className,
  caption: typography.caption.className,
  fine: typography.fine.className,
} as const;

type DisplayHeadingProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  variant?: keyof typeof variantClass;
  children: React.ReactNode;
  className?: string;
};

export function DisplayHeading({
  as: Tag = "h1",
  variant = "display",
  children,
  className,
}: DisplayHeadingProps) {
  return (
    <Tag className={cn(variantClass[variant], colorClasses.textPrimary, className)}>
      {children}
    </Tag>
  );
}
