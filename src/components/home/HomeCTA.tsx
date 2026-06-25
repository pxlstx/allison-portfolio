"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DisplayHeading, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import { layoutClasses, spacingClasses } from "@/lib/design-system";

export function HomeCTA({ reveal = false }: { reveal?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reveal) setVisible(true);
  }, [reveal]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home-cta"
      ref={ref}
      className={cn(
        "flex min-h-screen w-full flex-col justify-center",
        spacingClasses.sectionPadYLarge,
      )}
    >
      <div className={layoutClasses.homeSectionInner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading as="h2" variant="display" className={spacingClasses.ctaHeadlineMb}>
            Intrigued?
          </DisplayHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn("flex flex-col items-start", spacingClasses.ctaLinkGap)}
        >
          <TextLink href="/work" variant="cta">
            See my work
          </TextLink>
          <TextLink href="/ask" variant="cta">
            Or ask me anything
          </TextLink>
        </motion.div>
      </div>
    </section>
  );
}
