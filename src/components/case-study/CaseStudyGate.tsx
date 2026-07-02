"use client";

import { useEffect, useState } from "react";
import { DisplayHeading, TextLink } from "@/components/ui";
import { PasswordForm } from "@/components/site/PasswordForm";
import { isCaseStudyUnlocked, unlockCaseStudy } from "@/lib/case-study-access";
import { colorClasses, spacingClasses, typography } from "@/lib/design-system";
import { cn } from "@/lib/cn";

type CaseStudyGateProps = {
  slug: string;
  password: string;
  children: React.ReactNode;
};

export function CaseStudyGate({ slug, password, children }: CaseStudyGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUnlocked(isCaseStudyUnlocked(slug));
    setReady(true);
  }, [slug]);

  if (!ready) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center py-12",
        spacingClasses.pagePadX,
        colorClasses.surface,
      )}
    >
      <div className="w-full max-w-[420px]">
        <p className="label">Password protected</p>
        <DisplayHeading as="h1" variant="display" className="mt-3 mb-3">
          This project is under NDA.
        </DisplayHeading>
        <p className={cn("mb-6", typography.body.className)}>
          Enter the password to view the case study, or get in touch to request
          access.
        </p>
        <PasswordForm
          password={password}
          autoFocus
          submitLabel="View case study"
          onSuccess={() => {
            unlockCaseStudy(slug);
            setUnlocked(true);
          }}
        />
        <div className="mt-6">
          <TextLink href="/work" variant="inline">
            ← Back to work
          </TextLink>
        </div>
      </div>
    </div>
  );
}
