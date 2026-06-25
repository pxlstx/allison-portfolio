"use client";

import { useEffect, useState } from "react";
import { colorClasses, motionClasses, typography, zIndexClasses } from "@/lib/design-system";
import { cn } from "@/lib/cn";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [large, setLarge] = useState(false);
  const [label, setLabel] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);
    if (!finePointer) return;

    document.body.dataset.customCursor = "true";

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='view']");
      setLarge(Boolean(interactive));
      setLabel(Boolean(interactive?.closest("[data-cursor='view']")));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      delete document.body.dataset.customCursor;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className={cn(
          "pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference transition-[width,height]",
          zIndexClasses.cursor,
          colorClasses.bgWhite,
          motionClasses.medium,
          large ? "h-[52px] w-[52px]" : "h-2 w-2",
        )}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={cn(
          "pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 transition-opacity",
          zIndexClasses.cursorLabel,
          typography.micro.className,
          colorClasses.textInk,
          motionClasses.fast,
          label ? "opacity-100" : "opacity-0",
        )}
        style={{ left: position.x, top: position.y + 28 }}
      >
        View
      </div>
    </>
  );
}
