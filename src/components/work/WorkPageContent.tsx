"use client";

import { motion } from "framer-motion";
import { HomeFooter } from "@/components/home/HomeFooter";
import { WorkProjectCard } from "@/components/work/WorkProjectCard";
import { DisplayHeading } from "@/components/ui";
import {
  colorClasses,
  spacingClasses,
} from "@/lib/design-system";
import { allGridSpans, allProjectsOrder } from "@/lib/work";
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
  return (
    <div className={colorClasses.surface}>
      <header
        className={cn(
          "border-b",
          colorClasses.borderDefault,
          spacingClasses.workHeaderPad,
        )}
      >
        <DisplayHeading as="h1" variant="display">
          Work
        </DisplayHeading>
      </header>

      <div className={spacingClasses.workGridPad}>
        <motion.div
          className={cn("grid grid-cols-12", spacingClasses.gridGap)}
          variants={workGridVariants}
          initial="hidden"
          animate="visible"
        >
          {allProjectsOrder.map((project, index) => (
            <WorkProjectCard
              key={project.id}
              project={project}
              span={
                allGridSpans[index] ?? {
                  colSpan: 6,
                  aspect: "16/10",
                  mobileColSpan: 12,
                }
              }
            />
          ))}
        </motion.div>
      </div>

      <HomeFooter />
    </div>
  );
}
