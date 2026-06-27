import type { ReactNode } from "react";
import { DisplayHeading, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  colorClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";

type WithChildren = {
  children?: ReactNode;
};

type AnchorProps = WithChildren & {
  href?: string;
};

export const mdxComponents = {
  h2: ({ children }: WithChildren) => (
    <DisplayHeading
      as="h2"
      variant="chapter"
      className={cn("mt-12 first:mt-0", spacingClasses.chapterHeadlineMb)}
    >
      {children}
    </DisplayHeading>
  ),
  h3: ({ children }: WithChildren) => (
    <DisplayHeading as="h3" variant="lead" className="mt-8 mb-3">
      {children}
    </DisplayHeading>
  ),
  p: ({ children }: WithChildren) => (
    <p className={cn(typography.body.className, spacingClasses.paragraphGap)}>{children}</p>
  ),
  ul: ({ children }: WithChildren) => (
    <ul className={cn("mb-6 list-disc space-y-2", spacingClasses.listPad, typography.body.className)}>
      {children}
    </ul>
  ),
  ol: ({ children }: WithChildren) => (
    <ol className={cn("mb-6 list-decimal space-y-2", spacingClasses.listPad, typography.body.className)}>
      {children}
    </ol>
  ),
  li: ({ children }: WithChildren) => <li>{children}</li>,
  a: ({ href, children }: AnchorProps) => (
    <TextLink href={href ?? "#"} variant="inline">
      {children}
    </TextLink>
  ),
  blockquote: ({ children }: WithChildren) => (
    <blockquote
      className={cn(
        "my-8 border-l-2 border-accent",
        spacingClasses.blockquotePad,
        typography.displayClosing.className,
        colorClasses.textPrimary,
      )}
    >
      {children}
    </blockquote>
  ),
  hr: () => <hr className={cn("my-10", colorClasses.borderDefault)} />,
  strong: ({ children }: WithChildren) => (
    <strong className={cn(typography.itemTitle.className, "inline")}>{children}</strong>
  ),
};
