"use client";

import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { colorClasses, linkClasses, motionClasses, spacingClasses, typography } from "@/lib/design-system";

const underlineTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
};

type FilterTabProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export function FilterTab({
  children,
  active,
  onClick,
  className,
}: FilterTabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        linkClasses.filterTabBase,
        typography.filterTab.className,
        "relative",
        active ? linkClasses.filterTabActive : linkClasses.filterTabInactive,
        className,
      )}
    >
      {children}
      {active ? (
        <motion.span
          layoutId="filter-tab-underline"
          className={cn(
            "absolute bottom-[-6px] left-0 right-0 h-px",
            colorClasses.bgWhite,
          )}
          transition={underlineTransition}
        />
      ) : null}
    </button>
  );
}

type FilterTabListProps = {
  children: React.ReactNode;
  className?: string;
};

export function FilterTabList({ children, className }: FilterTabListProps) {
  return (
    <LayoutGroup>
      <div
        className={cn("flex shrink-0 flex-wrap", spacingClasses.filterTabListGap, className)}
      >
        {children}
      </div>
    </LayoutGroup>
  );
}
