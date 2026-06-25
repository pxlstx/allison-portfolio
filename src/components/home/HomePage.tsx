"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { CinematicIntro } from "@/components/home/CinematicIntro";
import { HomeCTA } from "@/components/home/HomeCTA";
import { HomeFooter } from "@/components/home/HomeFooter";
import { colorClasses } from "@/lib/design-system";

function resetHomeScroll() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function HomePage() {
  const [ctaRevealed, setCtaRevealed] = useState(false);
  const [introKey, setIntroKey] = useState(0);

  const restartFromTop = useCallback(() => {
    resetHomeScroll();
    setCtaRevealed(false);
    setIntroKey((key) => key + 1);
  }, []);

  useLayoutEffect(() => {
    resetHomeScroll();
    setCtaRevealed(false);
  }, []);

  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        restartFromTop();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [restartFromTop]);

  const scrollToCta = useCallback(() => {
    setCtaRevealed(true);
    window.setTimeout(() => {
      document
        .getElementById("home-cta")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }, []);

  return (
    <div className={colorClasses.surface}>
      <CinematicIntro key={`intro-${introKey}`} onComplete={scrollToCta} />
      <HomeCTA key={`cta-${introKey}`} reveal={ctaRevealed} />
      <HomeFooter />
    </div>
  );
}
