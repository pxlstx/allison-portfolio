import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { StructuredCaseStudyPage } from "@/components/case-study/StructuredCaseStudyPage";
import { HomeFooter } from "@/components/home/HomeFooter";
import { FadeIn, PageShell } from "@/components/PageShell";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { DisplayHeading, TextLink } from "@/components/ui";
import { PageContainer } from "@/components/ui/PageContainer";
import { getStructuredCaseStudy, getStructuredCaseStudySlugs } from "@/lib/case-study";
import { getCaseStudies, getCaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/cn";
import {
  colorClasses,
  layoutClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";

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
    <div className={cn(colorClasses.surface, typography.body.className)}>
      <PageShell className={spacingClasses.workHeaderPad}>
        <PageContainer width="prose">
          <FadeIn>
            <TextLink href="/work" variant="inline">
              ← Back to work
            </TextLink>

            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-3",
                typography.caption.className,
                colorClasses.textSubtle,
              )}
            >
              <span>{study.year}</span>
              <span aria-hidden>·</span>
              <span>{study.role}</span>
            </div>

            <DisplayHeading as="h1" variant="display" className="mt-4">
              {study.title}
            </DisplayHeading>

            <p className={cn("mt-6", typography.lead.className)}>{study.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    layoutClasses.radius,
                    "border px-3 py-1",
                    colorClasses.borderDefault,
                    typography.caption.className,
                    colorClasses.textSubtle,
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            className={cn("mt-14 border-t pt-12", colorClasses.borderDefault)}
            delay={0.08}
          >
            <MDXRemote source={study.content} components={mdxComponents} />
          </FadeIn>
        </PageContainer>
      </PageShell>

      <HomeFooter />
    </div>
  );
}
