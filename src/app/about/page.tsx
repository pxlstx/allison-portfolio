import type { Metadata } from "next";
import { FadeIn, PageShell } from "@/components/PageShell";
import { DisplayHeading, PageContainer } from "@/components/ui";
import { spacingClasses, layoutClasses } from "@/lib/design-system";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About me",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageContainer
        className={cn(
          layoutClasses.maxWidthLegacyProse,
          spacingClasses.sectionPadY,
          spacingClasses.sectionPadYXL,
        )}
      >
      <FadeIn>
        <DisplayHeading as="h1" variant="display">
          About me
        </DisplayHeading>
      </FadeIn>
      </PageContainer>
    </PageShell>
  );
}
