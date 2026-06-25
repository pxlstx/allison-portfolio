import type { Metadata } from "next";
import { HomeFooter } from "@/components/home/HomeFooter";
import { DesignSystemContent } from "@/components/design-system/DesignSystemContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Design system",
  description: `Design tokens and components for ${site.name}'s portfolio.`,
};

export default function DesignSystemPage() {
  return (
    <div className="bg-ink pb-24">
      <DesignSystemContent />
      <HomeFooter />
    </div>
  );
}
