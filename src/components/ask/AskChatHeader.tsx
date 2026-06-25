import Link from "next/link";
import { site } from "@/lib/site";
import {
  colorClasses,
  spacingClasses,
  typography,
  zIndexClasses,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

export function AskChatHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 flex items-center justify-between border-b",
        spacingClasses.chatHeaderPy,
        zIndexClasses.sticky,
        colorClasses.borderDefault,
        colorClasses.surface,
        spacingClasses.pagePadX,
      )}
    >
      <Link
        href="/"
        className={cn(
          typography.navMetaLight.className,
          colorClasses.textSubtle,
          "transition-colors hover:text-w-60",
        )}
      >
        ← Back
      </Link>

      <div className="text-center">
        <div className={cn(typography.bodySmall.className, colorClasses.textPrimary, "font-medium")}>
          {site.name}
        </div>
        <div
          className={cn(
            typography.caption.className,
            spacingClasses.avatarMt,
            spacingClasses.statusRowGap,
            "flex items-center justify-center",
            colorClasses.textSubtle,
          )}
        >
          <span className={cn(spacingClasses.statusDotSize, "rounded-full", colorClasses.bgStatusOnline)} />
          Ask me anything
        </div>
      </div>

      <div className={spacingClasses.chatHeaderBalance} aria-hidden />
    </header>
  );
}
