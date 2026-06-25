"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { GridSpan, WorkProject } from "@/lib/work";
import { cn } from "@/lib/cn";

const colSpanClass: Record<GridSpan["colSpan"], string> = {
  4: "min-[901px]:col-span-4",
  6: "min-[901px]:col-span-6",
};

const mobileColSpanClass: Record<GridSpan["mobileColSpan"], string> = {
  6: "col-span-6",
  12: "col-span-12",
};

type WorkProjectCardProps = {
  project: WorkProject;
  span: GridSpan;
  index: number;
};

export function WorkProjectCard({ project, span, index }: WorkProjectCardProps) {
  const imageSrc =
    project.imageSrc ??
    `https://picsum.photos/seed/${project.imageSeed}/1200/900`;

  const gridClassName = cn(
    mobileColSpanClass[span.mobileColSpan],
    colSpanClass[span.colSpan],
  );

  const motionProps = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: index * 0.06,
    },
  };

  return (
    <motion.div className={gridClassName} {...motionProps}>
      <ProjectCard
        client={project.client}
        title={project.title}
        imageSrc={imageSrc}
        href={project.href}
        nda={project.nda}
        aspect={span.aspect}
        imageColor={project.color}
        className="h-full"
      />
    </motion.div>
  );
}
