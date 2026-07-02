"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/case-study/CaseStudyMotion";
import type { CaseStudyBlock } from "@/lib/case-study";
import {
  colorClasses,
  layoutClasses,
  motionClasses,
  spacingClasses,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

export type CaseStudyProductTourProps = Extract<
  CaseStudyBlock,
  { type: "slideshow" }
>;

const TICK_MS = 50;

/** Autoplaying product tour — pauses on first user interaction. */
export function CaseStudyProductTour({
  slides,
  brandline,
  slideDuration = 4200,
}: Omit<CaseStudyProductTourProps, "type">) {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [autoplay, setAutoplay] = useState(!reduceMotion);

  const stopAutoplay = useCallback(() => {
    setAutoplay(false);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      stopAutoplay();
      setCurrent(index);
      setElapsed(0);
    },
    [stopAutoplay],
  );

  useEffect(() => {
    if (!autoplay) return;

    const timer = window.setInterval(() => {
      setElapsed((prev) => {
        const next = prev + TICK_MS;
        if (next >= slideDuration) {
          setCurrent((active) => (active + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [autoplay, slideDuration, slides.length]);

  const progress = Math.min(100, (elapsed / slideDuration) * 100);

  return (
    <Reveal>
      <div
        className={cn(
          "w-full",
          colorClasses.surfaceRaised,
          spacingClasses.pagePadX,
          spacingClasses.imageContainPadLoose,
        )}
      >
        <div
          className={cn(
            spacingClasses.imageContainInsetLooseWide,
            layoutClasses.maxWidthContent,
            "mx-auto w-full",
          )}
          onPointerDown={stopAutoplay}
        >
          <div
            className={cn(
              "case-study-product-tour__frame relative w-full overflow-hidden border",
              colorClasses.borderMid,
              layoutClasses.radius,
            )}
          >
            <div
              className={cn(
                "case-study-product-tour__progress absolute top-0 right-0 left-0 z-10",
                colorClasses.borderDefault,
              )}
              aria-hidden
            >
              <div
                className="h-full bg-accent transition-[width] duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className={cn(
                  "absolute inset-0 transition-opacity ease-in-out",
                  motionClasses.productTourSlide,
                  index === current
                    ? "pointer-events-auto z-20 opacity-100"
                    : "pointer-events-none opacity-0",
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1200px) 90vw, 1200px"
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className={cn("flex items-center justify-center gap-2.5", spacingClasses.productTourDotsPad)}>
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={cn(
                  "h-2 w-2 rounded-full border border-accent bg-transparent p-0 transition-[background-color,transform] duration-200",
                  index === current && "scale-[1.3] bg-accent",
                )}
                aria-label={`Go to ${slide.label}`}
                aria-current={index === current ? "true" : undefined}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {brandline ? (
            <p
              className={cn(
                "label",
                spacingClasses.productTourBrandlinePad,
                colorClasses.textSubtle,
              )}
            >
              {brandline}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
