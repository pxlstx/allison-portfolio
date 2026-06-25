import type { Metadata } from "next";
import { FadeIn, PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes hosted on Allison's writing site.",
};

export default function WritingPage() {
  return (
    <PageShell className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <FadeIn>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
          Writing
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900">
          Essays live on my writing site
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          Longer-form writing—product thinking, process notes, and occasional
          essays—lives on Wix so I can publish without touching this codebase.
        </p>
      </FadeIn>

      <FadeIn className="mt-10" delay={0.08}>
        <a
          href={site.writingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
        >
          Visit writing site
          <span aria-hidden>↗</span>
        </a>
      </FadeIn>
    </PageShell>
  );
}
