"use client";

import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PasswordDialog } from "@/components/site/PasswordDialog";
import {
  getCaseStudyPassword,
  isCaseStudyUnlocked,
  slugFromHref,
  unlockCaseStudy,
} from "@/lib/case-study-access";
import type { GridSpan, WorkProject } from "@/lib/work";
import { cn } from "@/lib/cn";

const colSpanClass: Record<GridSpan["colSpan"], string> = {
  4: "min-[901px]:col-span-4",
  6: "min-[901px]:col-span-6",
  12: "min-[901px]:col-span-12",
};

const imageSizesClass: Record<GridSpan["colSpan"], string> = {
  4: "(max-width: 900px) 50vw, 33vw",
  6: "(max-width: 900px) 100vw, 50vw",
  12: "(max-width: 900px) 100vw, 100vw",
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
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [prefill, setPrefill] = useState("");

  const imageSrc =
    project.imageSrc ??
    `https://picsum.photos/seed/${project.imageSeed}/1200/900`;

  const gridClassName = cn(
    mobileColSpanClass[span.mobileColSpan],
    colSpanClass[span.colSpan],
  );

  const slug = slugFromHref(project.href);
  const password = slug ? getCaseStudyPassword(slug) : undefined;
  const locked = Boolean(project.nda && project.href && password);

  const openLocked = () => {
    setPrefill(slug && password && isCaseStudyUnlocked(slug) ? password : "");
    setDialogOpen(true);
  };

  return (
    <motion.div className={gridClassName} variants={workCardVariants}>
      <ProjectCard
        client={project.client}
        title={project.title}
        imageSrc={imageSrc}
        href={locked ? undefined : project.href}
        onActivate={locked ? openLocked : undefined}
        nda={project.nda}
        aspect={span.aspect}
        imageColor={project.color}
        imageFocus={project.imageFocus}
        imageLogoSrc={project.imageLogoSrc}
        imageLogoSize={project.imageLogoSize}
        imageSizes={imageSizesClass[span.colSpan]}
        className="h-full"
      />

      {locked && password ? (
        <PasswordDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          password={password}
          initialValue={prefill}
          onUnlocked={() => {
            if (slug) unlockCaseStudy(slug);
            setDialogOpen(false);
            router.push(project.href!);
          }}
        />
      ) : null}
    </motion.div>
  );
}
