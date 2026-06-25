"use client";

import { cn } from "@/lib/cn";
import { linkClasses, motionClasses, spacingClasses } from "@/lib/design-system";

type PromptChipProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function PromptChip({
  children,
  onClick,
  className,
  disabled,
}: PromptChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(linkClasses.promptChip, motionClasses.fast, className)}
    >
      {children}
    </button>
  );
}

type PromptChipListProps = {
  children: React.ReactNode;
  className?: string;
};

export function PromptChipList({ children, className }: PromptChipListProps) {
  return (
    <div className={cn("flex flex-wrap", spacingClasses.promptChipListGap, className)}>
      {children}
    </div>
  );
}
