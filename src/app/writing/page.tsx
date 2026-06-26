import type { Metadata } from "next";
import { FadeIn, PageShell } from "@/components/PageShell";
import { DisplayHeading, TextLink } from "@/components/ui";
import { PageContainer } from "@/components/ui/PageContainer";
import { cn } from "@/lib/cn";
import {
  colorClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes hosted on Allison's writing site.",
};

export default function WritingPage() {
  return (
    <div className={cn(colorClasses.surface, typography.body.className)}>
      <PageShell className={spacingClasses.workHeaderPad}>
        <PageContainer width="prose">
          <FadeIn>
            <p className={cn(typography.label.className, "mb-4")}>Writing</p>
            <DisplayHeading as="h1" variant="display" className="mb-6">
              Essays live on my writing site
            </DisplayHeading>
            <p className={typography.bodyLarge.className}>
              Longer-form writing—product thinking, process notes, and occasional
              essays—lives on Wix so I can publish without touching this codebase.
            </p>
          </FadeIn>

          <FadeIn className="mt-10" delay={0.08}>
            <TextLink href={site.writingUrl} external variant="cta">
              Visit writing site
            </TextLink>
          </FadeIn>
        </PageContainer>
      </PageShell>
    </div>
  );
}
