"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { HomeFooter } from "@/components/home/HomeFooter";
import { WorkProjectCard } from "@/components/work/WorkProjectCard";
import { DisplayHeading, FilterTab, FilterTabList } from "@/components/ui";
import {
  colorClasses,
  motionClasses,
  spacingClasses,
} from "@/lib/design-system";
import {
  getProjectsForFilter,
  getSpansForFilter,
  workFilters,
  type WorkFilter,
} from "@/lib/work";
import { cn } from "@/lib/cn";

const workGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
} as const;

export function WorkPageContent() {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const [shuffling, setShuffling] = useState(false);

  const projects = getProjectsForFilter(filter);
  const spans = getSpansForFilter(filter);

  const handleFilter = useCallback(
    (next: WorkFilter) => {
      if (next === filter) return;

      setShuffling(true);
      window.setTimeout(() => {
        setFilter(next);
        setShuffling(false);
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 300);
    },
    [filter],
  );

  return (
    <div className={colorClasses.surface}>
      <header
        className={cn(
          "flex flex-col items-start justify-between border-b sm:flex-row sm:items-end",
          spacingClasses.workHeaderGap,
          colorClasses.borderDefault,
          spacingClasses.workHeaderPad,
        )}
      >
        <DisplayHeading as="h1" variant="display">
          Work
        </DisplayHeading>

        <FilterTabList>
          {workFilters.map((item) => (
            <FilterTab
              key={item.id}
              active={filter === item.id}
              onClick={() => handleFilter(item.id)}
            >
              {item.label}
            </FilterTab>
          ))}
        </FilterTabList>
      </header>

      <div
        className={cn(
          spacingClasses.workGridPad,
          motionClasses.default,
          "transition-opacity ease-out",
          shuffling ? "opacity-0" : "opacity-100",
        )}
      >
        <motion.div
          key={filter}
          className={cn("grid grid-cols-12", spacingClasses.gridGap)}
          variants={workGridVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <WorkProjectCard
              key={project.id}
              project={project}
              span={spans[index] ?? { colSpan: 4, aspect: "4/3", mobileColSpan: 12 }}
            />
          ))}
        </motion.div>
      </div>

      <HomeFooter />
    </div>
  );
}
