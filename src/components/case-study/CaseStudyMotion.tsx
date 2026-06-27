"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { DisplayHeading, Eyebrow } from "@/components/ui";
import type { StructuredCaseStudy } from "@/lib/case-study";
import {
  colorClasses,
  layoutClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

const revealTransition = (delay = 0): Transition => ({
  duration: 0.7,
  delay,
  ease,
});

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.div>
  );
}

type ParallaxImageProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function ParallaxImage({
  children,
  className,
  strength = 8,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : [`-${strength}%`, `${strength}%`],
  );

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export function CaseStudyHeroAnimated({ study }: { study: StructuredCaseStudy }) {
  const reduceMotion = useReducedMotion();
  const titleLines = study.titleLines ?? [study.title];

  return (
    <section
      className={cn(
        "border-b",
        colorClasses.surface,
        colorClasses.borderDefault,
      )}
    >
      <div
        className={cn(
          layoutClasses.caseStudyTextShell,
          spacingClasses.pagePadX,
          spacingClasses.pageTopPad,
          spacingClasses.caseStudyHeroTextPad,
        )}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
        >
          <Eyebrow className={spacingClasses.eyebrowMb}>{study.tag}</Eyebrow>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.22 }}
        >
          <DisplayHeading as="h1" variant="hero" className={spacingClasses.eyebrowMb}>
            {titleLines.map((line, index) => (
              <span key={line} className={index > 0 ? "block" : undefined}>
                {line}
              </span>
            ))}
          </DisplayHeading>
        </motion.div>
        <motion.p
          className={cn(
            layoutClasses.maxWidthLead,
            typography.lead.className,
            colorClasses.textPrimary,
          )}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.38 }}
        >
          {study.subtitle}
        </motion.p>
      </div>

      <div className={layoutClasses.caseStudyHeroImage}>
        <Image
          src={study.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={cn(
            "object-cover",
            study.heroImageFocus === "center"
              ? "object-center"
              : study.heroImageFocus === "low"
                ? "object-[50%_38%]"
                : study.heroImageFocus === "bottom"
                  ? "object-bottom"
                  : "object-top",
            colorClasses.imageBrightnessHero,
          )}
        />
      </div>
    </section>
  );
}
