"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/case-study/CaseStudyMotion";
import type { CaseStudyBlock } from "@/lib/case-study";
import { colorClasses, layoutClasses, spacingClasses, typography } from "@/lib/design-system";
import { cn } from "@/lib/cn";

type StatItem = Extract<CaseStudyBlock, { type: "stats" }>["items"][number];

function formatStatValue(
  current: number,
  prefix: string,
  suffix: string,
): string {
  return `${prefix}${current}${suffix}`;
}

export function CaseStudyStats({
  items,
}: {
  items: StatItem[];
}) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const [values, setValues] = useState(() =>
    items.map((item) =>
      reduceMotion
        ? item.target
        : 0,
    ),
  );

  useEffect(() => {
    if (reduceMotion) {
      setValues(items.map((item) => item.target));
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated.current) return;
          hasAnimated.current = true;

          const duration = 1800;
          const steps = 60;
          const stepMs = duration / steps;

          items.forEach((item, index) => {
            const increment = item.target / steps;
            let step = 0;

            const timer = setInterval(() => {
              step++;
              const current = Math.min(Math.round(increment * step), item.target);
              setValues((prev) => {
                const next = [...prev];
                next[index] = current;
                return next;
              });
              if (current >= item.target) clearInterval(timer);
            }, stepMs);
          });
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [items, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "border-b py-20",
        colorClasses.borderDefault,
      )}
    >
      <div
        className={cn(
          layoutClasses.caseStudyTextShell,
          spacingClasses.pagePadX,
        )}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08} y={16}>
              <div>
                <p
                  className={cn(
                    "mb-3",
                    typography.displayHero.className,
                    colorClasses.textPrimary,
                  )}
                >
                  {formatStatValue(
                    values[index] ?? 0,
                    item.prefix ?? "",
                    item.suffix ?? "",
                  )}
                </p>
                <p className={typography.body.className}>{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
