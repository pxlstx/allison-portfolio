import Link from "next/link";
import { cn } from "@/lib/cn";
import { linkClasses, typography } from "@/lib/design-system";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: "footer" | "cta" | "inline";
};

const variantClass = {
  footer: cn(typography.caption.className, linkClasses.textLinkFooter),
  cta: cn(typography.ctaLink.className, linkClasses.textLinkCta),
  inline: linkClasses.textLinkInline,
};

export function TextLink({
  href,
  children,
  className,
  external,
  variant = "inline",
}: TextLinkProps) {
  const classes = cn(variantClass[variant], className);

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type TextLinkSmallProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function TextLinkSmall({
  children,
  onClick,
  className,
}: TextLinkSmallProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-0 bg-transparent p-0",
        typography.textLinkSmall.className,
        linkClasses.textLinkSmall,
        className,
      )}
    >
      {children}
    </button>
  );
}
