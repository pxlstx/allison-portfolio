import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { StructuredCaseStudyPage } from "@/components/case-study/StructuredCaseStudyPage";
import { FadeIn, PageShell } from "@/components/PageShell";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { getStructuredCaseStudy, getStructuredCaseStudySlugs } from "@/lib/case-study";
import { getCaseStudies, getCaseStudy } from "@/lib/case-studies";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const mdxSlugs = getCaseStudies().map((study) => ({ slug: study.slug }));
  const structuredSlugs = getStructuredCaseStudySlugs().map((slug) => ({ slug }));
  const merged = new Map(mdxSlugs.map((item) => [item.slug, item]));
  for (const item of structuredSlugs) {
    merged.set(item.slug, item);
  }
  return [...merged.values()];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const structured = getStructuredCaseStudy(slug);
  if (structured) {
    return {
      title: structured.title,
      description: structured.subtitle,
    };
  }

  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const structured = getStructuredCaseStudy(slug);

  if (structured) {
    return <StructuredCaseStudyPage study={structured} />;
  }

  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <PageShell className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <FadeIn>
        <Link
          href="/work"
          className="text-sm font-medium text-stone-500 transition hover:text-stone-900"
        >
          ← Back to work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone-500">
          <span>{study.year}</span>
          <span aria-hidden>·</span>
          <span>{study.role}</span>
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          {study.title}
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-stone-600">
          {study.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-14 border-t border-stone-200 pt-12" delay={0.08}>
        <MDXRemote source={study.content} components={mdxComponents} />
      </FadeIn>
    </PageShell>
  );
}
