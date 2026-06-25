import Image from "next/image";
import Link from "next/link";
import { HomeFooter } from "@/components/home/HomeFooter";
import {
  CaseStudyHeroAnimated,
  ParallaxImage,
  Reveal,
} from "@/components/case-study/CaseStudyMotion";
import { DisplayHeading, Icon, MetaCard, SectionLabel } from "@/components/ui";
import type {
  CaseStudyBlock,
  CaseStudyImageVariant,
  StructuredCaseStudy,
} from "@/lib/case-study";
import {
  colorClasses,
  layoutClasses,
  motionClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

function CaseStudyMetaStrip({ study }: { study: StructuredCaseStudy }) {
  return (
    <section
      className={cn(
        "flex flex-wrap border-y",
        spacingClasses.metaStripGap,
        colorClasses.borderDefault,
        spacingClasses.metaStripPad,
      )}
    >
      {study.meta.map((item, index) => (
        <Reveal key={item.label} delay={index * 0.08} y={16}>
          <MetaCard label={item.label} value={item.value} />
        </Reveal>
      ))}
    </section>
  );
}

function CaseStudyChapter({
  label,
  headline,
  headlineLines,
  paragraphs,
}: Extract<CaseStudyBlock, { type: "chapter" }>) {
  const lines = headlineLines ?? [headline];

  return (
    <Reveal>
      <article className={cn(spacingClasses.chapterBlockMb, "last:mb-0", layoutClasses.maxWidthChapter)}>
        <SectionLabel>{label}</SectionLabel>
        <DisplayHeading as="h2" variant="chapter" className={spacingClasses.chapterHeadlineMb}>
          {lines.map((line, index) => (
            <span key={line} className={index > 0 ? "block" : undefined}>
              {line}
            </span>
          ))}
        </DisplayHeading>
        <div className={typography.body.className}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={spacingClasses.paragraphGap}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

function CaseStudyTypoMoment({
  before,
  highlight,
  after,
}: Extract<CaseStudyBlock, { type: "typo" }>) {
  return (
    <section
      className={cn(
        "border-y",
        spacingClasses.sectionTypoY,
        colorClasses.borderDefault,
        spacingClasses.pagePadXWide,
      )}
    >
      <Reveal y={20}>
        <p
          className={cn(
            layoutClasses.maxWidthProse,
            typography.displayChapter.className,
            colorClasses.textPrimary,
          )}
        >
          {before}
          <span className={colorClasses.textAccent}>{highlight}</span>{" "}
          {after.trimStart()}
        </p>
      </Reveal>
    </section>
  );
}

const imageVariantClass: Record<CaseStudyImageVariant, string> = {
  default: cn("relative", layoutClasses.aspectVideo),
  short: cn("relative", layoutClasses.aspectShort),
  tall: cn("relative", layoutClasses.aspectTall),
  "app-wide": cn(
    "flex items-center justify-center",
    layoutClasses.minHeightAppWide,
    colorClasses.surfaceRaised,
    spacingClasses.imageAppPad,
  ),
};

function CaseStudyFigure({
  src,
  alt,
  caption,
  variant = "default",
  fit = "cover",
  width,
  height,
}: Extract<CaseStudyBlock, { type: "image" }>) {
  const isAppWide = variant === "app-wide";
  const isContain = fit === "contain";
  const useNaturalSize = isContain && width != null && height != null;

  const imageShellClass = cn(
    "w-full",
    isAppWide
      ? imageVariantClass["app-wide"]
      : useNaturalSize
        ? colorClasses.surfaceRaised
        : isContain
          ? cn("relative", colorClasses.surfaceRaised, imageVariantClass[variant])
          : imageVariantClass[variant],
  );

  return (
    <figure>
      <Reveal y={20}>
        <ParallaxImage className={imageShellClass} strength={isAppWide ? 4 : 6}>
          {isAppWide ? (
            <Image
              src={src}
              alt={alt}
              width={width ?? 1400}
              height={height ?? 900}
              sizes="100vw"
              className={cn("h-auto w-full object-contain", layoutClasses.maxWidthImage)}
            />
          ) : useNaturalSize ? (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="100vw"
              className="h-auto w-full"
            />
          ) : (
            <div className="relative h-full w-full scale-[1.06]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className={
                  isContain
                    ? "object-contain object-top"
                    : "object-cover object-center"
                }
              />
            </div>
          )}
        </ParallaxImage>
      </Reveal>
      {caption ? (
        <Reveal delay={0.08} y={12}>
          <figcaption
            className={cn(
              "border-b",
              colorClasses.borderDefault,
              colorClasses.textMuted,
              spacingClasses.captionPad,
              typography.caption.className,
            )}
          >
            {caption}
          </figcaption>
        </Reveal>
      ) : null}
    </figure>
  );
}

function CaseStudyDeliverable({
  label,
  body,
}: Extract<CaseStudyBlock, { type: "deliverable" }>) {
  return (
    <Reveal>
      <article
        className={cn(
          "grid items-start gap-4 border-t",
          spacingClasses.deliverablePadY,
          spacingClasses.deliverableLabelCol,
          spacingClasses.deliverableGap,
          colorClasses.borderDefault,
        )}
      >
        <div className={cn(spacingClasses.deliverableLabelPt, colorClasses.textAccent, typography.label.className)}>
          {label}
        </div>
        <p className={cn(layoutClasses.maxWidthDeliverable, typography.bodyLarge.className)}>
          {body}
        </p>
      </article>
    </Reveal>
  );
}

function CaseStudyBlockRenderer({
  block,
  index,
}: {
  block: CaseStudyBlock;
  index: number;
}) {
  switch (block.type) {
    case "chapter":
      return (
        <div key={index} className={spacingClasses.chapterBlockPad}>
          <CaseStudyChapter {...block} />
        </div>
      );
    case "typo":
      return <CaseStudyTypoMoment key={index} {...block} />;
    case "image":
      return <CaseStudyFigure key={index} {...block} />;
    default:
      return null;
  }
}

function CaseStudyNext({ title, href }: { title: string; href: string }) {
  return (
    <Reveal y={16}>
      <Link
        href={href}
        className={cn(
          "group flex items-center justify-between border-t transition-colors hover:bg-ink-2 active:bg-ink-2",
          colorClasses.borderDefault,
          spacingClasses.nextProjectPad,
        )}
      >
        <div>
          <div className={cn(spacingClasses.nextProjectLabelMb, colorClasses.textAccent, typography.label.className)}>
            Next project
          </div>
          <div
            className={cn(
              typography.lead.className,
              colorClasses.textPrimary,
              "group-active:text-accent",
            )}
          >
            {title}
          </div>
        </div>
        <Icon
          name="arrow_forward"
          size={28}
          className={cn(
            colorClasses.textFaint,
            motionClasses.fast,
            spacingClasses.arrowNudge,
            "transition-[transform,color] group-hover:text-w-60 group-active:text-accent",
          )}
        />
      </Link>
    </Reveal>
  );
}

export function StructuredCaseStudyPage({
  study,
}: {
  study: StructuredCaseStudy;
}) {
  return (
    <div className={cn(colorClasses.surface, "font-sans")}>
      <CaseStudyHeroAnimated study={study} />
      <CaseStudyMetaStrip study={study} />

      {study.blocks.map((block, index) => {
        if (block.type === "deliverable") {
          return (
            <div key={index} className={spacingClasses.deliverableBlockPad}>
              <CaseStudyDeliverable {...block} />
            </div>
          );
        }

        return (
          <CaseStudyBlockRenderer key={index} block={block} index={index} />
        );
      })}

      {study.nextProject ? (
        <CaseStudyNext
          title={study.nextProject.title}
          href={study.nextProject.href}
        />
      ) : null}

      <HomeFooter />
    </div>
  );
}
