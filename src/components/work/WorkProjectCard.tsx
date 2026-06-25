"use client";

import { motion, type Variants } from "framer-motion";
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

export const workCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type WorkProjectCardProps = {
  project: WorkProject;
  span: GridSpan;
};

export function WorkProjectCard({ project, span }: WorkProjectCardProps) {
  const imageSrc =
    project.imageSrc ??
    `https://picsum.photos/seed/${project.imageSeed}/1200/900`;

  const gridClassName = cn(
    mobileColSpanClass[span.mobileColSpan],
    colSpanClass[span.colSpan],
  );

  return (
    <motion.div className={gridClassName} variants={workCardVariants}>
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
