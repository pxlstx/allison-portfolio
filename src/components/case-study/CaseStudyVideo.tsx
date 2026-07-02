"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/case-study/CaseStudyMotion";
import { CaseStudyModule } from "@/components/case-study/CaseStudyModule";
import { CaseStudyTextShell } from "@/components/case-study/CaseStudyTextShell";
import type { CaseStudyBlock } from "@/lib/case-study";
import {
  colorClasses,
  layoutClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

export type CaseStudyVideoProps = Extract<CaseStudyBlock, { type: "video" }>;

/** Autoplaying, muted, looping product walkthrough framed like the product tour. */
export function CaseStudyVideo({
  src,
  poster,
  caption,
}: Omit<CaseStudyVideoProps, "type">) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure>
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
          >
            <div
              className={cn(
                "case-study-product-tour__frame relative w-full overflow-hidden border",
                colorClasses.borderMid,
                layoutClasses.radius,
              )}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-contain"
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </Reveal>
      {caption ? (
        <Reveal delay={0.08} y={12}>
          <figcaption
            className={cn(
              "border-b",
              colorClasses.borderDefault,
              colorClasses.textMuted,
              spacingClasses.captionPad,
              typography.caption.className,
            )}
          >
            <CaseStudyTextShell>
              <CaseStudyModule>
                {caption.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </CaseStudyModule>
            </CaseStudyTextShell>
          </figcaption>
        </Reveal>
      ) : null}
    </figure>
  );
}
