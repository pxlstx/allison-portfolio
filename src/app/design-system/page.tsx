import type { Metadata } from "next";
import { HomeFooter } from "@/components/home/HomeFooter";
import { DesignSystemContent } from "@/components/design-system/DesignSystemContent";
import { cn } from "@/lib/cn";
import { spacingClasses } from "@/lib/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Design system",
  description: `Design tokens and components for ${site.name}'s portfolio.`,
};

export default function DesignSystemPage() {
  return (
    <div className={cn("bg-ink", spacingClasses.pageBottomPad)}>
      <DesignSystemContent />
      <HomeFooter />
    </div>
  );
}
