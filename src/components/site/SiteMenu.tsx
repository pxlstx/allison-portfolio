"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  colorClasses,
  linkClasses,
  motionClasses,
  spacingClasses,
  typography,
  zIndexClasses,
} from "@/lib/design-system";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SiteMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          spacingClasses.hamburgerPos,
          zIndexClasses.menuButton,
          spacingClasses.hamburgerWidth,
          "flex flex-col items-center justify-center",
          spacingClasses.hamburgerGap,
          "active:[&_span]:bg-accent",
        )}
      >
        <span
          className={cn(
            "block h-px origin-center transition-all",
            spacingClasses.hamburgerWidth,
            colorClasses.bgWhite,
            motionClasses.default,
            open && cn(spacingClasses.hamburgerShift, "rotate-45"),
          )}
        />
        <span
          className={cn(
            "block h-px transition-all",
            spacingClasses.hamburgerWidth,
            colorClasses.bgWhite,
            motionClasses.default,
            open ? "opacity-0" : "opacity-100",
          )}
        />
        <span
          className={cn(
            "block h-px origin-center transition-all",
            spacingClasses.hamburgerWidth,
            colorClasses.bgWhite,
            motionClasses.default,
            open && cn(spacingClasses.hamburgerShiftNeg, "-rotate-45"),
          )}
        />
      </button>

      <div
        className={cn(
          "fixed inset-0 flex flex-col items-start justify-center transition-opacity",
          zIndexClasses.menu,
          colorClasses.surface,
          spacingClasses.menuOverlayPad,
          motionClasses.menu,
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <ul className={cn("flex list-none flex-col", spacingClasses.menuNavGap)}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(typography.displayChapter.className, linkClasses.navLink)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={cn("absolute", spacingClasses.menuFooterPos)}>
          <a href={`mailto:${site.email}`} className={cn("mb-1 block", linkClasses.navMeta)}>
            {site.email}
          </a>
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("block", linkClasses.navMeta)}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
