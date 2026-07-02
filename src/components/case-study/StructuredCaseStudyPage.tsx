import Image from "next/image";
import Link from "next/link";
import { HomeFooter } from "@/components/home/HomeFooter";
import {
  CaseStudyHeroAnimated,
  ParallaxImage,
  Reveal,
} from "@/components/case-study/CaseStudyMotion";
import { CaseStudyChapter } from "@/components/case-study/CaseStudyChapter";
import { CaseStudyDeliverable } from "@/components/case-study/CaseStudyDeliverable";
import { CaseStudyModule } from "@/components/case-study/CaseStudyModule";
import { CaseStudyProductTour } from "@/components/case-study/CaseStudyProductTour";
import { CaseStudyStats } from "@/components/case-study/CaseStudyStats";
import { CaseStudyVideo } from "@/components/case-study/CaseStudyVideo";
import { CaseStudyTextShell } from "@/components/case-study/CaseStudyTextShell";
import { Icon, MetaCard } from "@/components/ui";
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
  stateClasses,
  typography,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

function CaseStudyMetaStrip({ study }: { study: StructuredCaseStudy }) {
  return (
    <section
      className={cn(
        "border-y",
        colorClasses.borderDefault,
        spacingClasses.metaStripPad,
      )}
    >
      <CaseStudyTextShell
        className={cn("flex flex-wrap", spacingClasses.metaStripGap)}
      >
        <CaseStudyModule className={cn("flex flex-wrap", spacingClasses.metaStripGap)}>
          {study.meta.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08} y={16}>
              <MetaCard label={item.label} value={item.value} />
            </Reveal>
          ))}
        </CaseStudyModule>
      </CaseStudyTextShell>
    </section>
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
      )}
    >
      <CaseStudyTextShell>
        <Reveal y={20}>
          <CaseStudyModule width="wide">
            <p
              className={cn(
                typography.displayChapter.className,
                colorClasses.textPrimary,
              )}
            >
              {before}
              <span className={colorClasses.textAccent}>{highlight}</span>{" "}
              {after.trimStart()}
            </p>
          </CaseStudyModule>
        </Reveal>
      </CaseStudyTextShell>
    </section>
  );
}

const imageVariantClass: Record<CaseStudyImageVariant, string> = {
  default: cn("relative", layoutClasses.aspectVideo),
  short: cn("relative", layoutClasses.aspectShort),
  tall: cn("relative", layoutClasses.aspectTall),
  "app-wide": cn(
    "flex w-full items-center justify-center",
    layoutClasses.minHeightAppWide,
    colorClasses.surfaceRaised,
    spacingClasses.imageAppPad,
  ),
};

function imageFocusClass(focus?: "top" | "center" | "low" | "bottom") {
  switch (focus) {
    case "top":
      return "object-top";
    case "low":
      return "object-[50%_65%]";
    case "bottom":
      return "object-bottom";
    default:
      return "object-center";
  }
}

function CaseStudyFigure({
  src,
  alt,
  caption,
  variant = "default",
  fit = "cover",
  width,
  height,
  inset,
  focus,
  parallax,
}: Extract<CaseStudyBlock, { type: "image" }>) {
  const isAppWide = variant === "app-wide";
  const isContain = fit === "contain";
  const useNaturalSize = width != null && height != null;
  const useNaturalContain = useNaturalSize && isContain;
  const usePlainContain = useNaturalContain && inset === "plain";
  const useLooseContain =
    useNaturalContain && (inset === "loose" || inset === "loose-wide");
  const useLooseWideInset = inset === "loose-wide";
  const useNaturalCover = useNaturalSize && fit === "cover";
  const useNaturalShortCover = variant === "short" && useNaturalCover && !focus;
  const useNaturalCroppedCover = useNaturalCover && focus != null;

  const imageShellClass = cn(
    "w-full",
    usePlainContain
      ? cn("mx-auto w-full")
      : useLooseContain
      ? cn(
          colorClasses.surfaceRaised,
          spacingClasses.pagePadX,
          spacingClasses.imageContainPadLoose,
        )
      : useNaturalContain
        ? cn(colorClasses.surfaceRaised, spacingClasses.imageContainPad)
        : useNaturalShortCover || useNaturalCroppedCover
          ? "overflow-hidden"
          : useNaturalCover
            ? "overflow-hidden"
            : isAppWide
              ? imageVariantClass["app-wide"]
              : isContain
                ? cn("relative", colorClasses.surfaceRaised, imageVariantClass[variant])
                : imageVariantClass[variant],
  );

  const plainContainMaxWidth = usePlainContain && width != null ? width : undefined;
  const plainContainDisplayWidth =
    plainContainMaxWidth != null
      ? Math.min(plainContainMaxWidth, 1400)
      : undefined;
  const plainContainUnoptimized =
    usePlainContain &&
    plainContainMaxWidth != null &&
    plainContainMaxWidth <= 800;

  const containImage = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized={plainContainUnoptimized}
      quality={plainContainUnoptimized ? undefined : 80}
      sizes={
        plainContainDisplayWidth
          ? `(max-width: ${plainContainDisplayWidth}px) 95vw, ${plainContainDisplayWidth}px`
          : useLooseContain
            ? "(max-width: 1200px) 90vw, 1200px"
            : "100vw"
      }
      style={
        plainContainDisplayWidth
          ? { maxWidth: plainContainDisplayWidth }
          : undefined
      }
      className={cn(
        "mx-auto h-auto w-full object-contain",
        useLooseContain
          ? layoutClasses.maxWidthContent
          : usePlainContain
            ? layoutClasses.maxWidthImage
            : layoutClasses.maxWidthImage,
      )}
    />
  );

  const imageNode = useNaturalContain ? (
    useLooseContain ? (
      <div
        className={cn(
          useLooseWideInset
            ? spacingClasses.imageContainInsetLooseWide
            : spacingClasses.imageContainInsetLoose,
          "mx-auto w-full",
          layoutClasses.maxWidthContent,
        )}
      >
        {containImage}
      </div>
    ) : (
      containImage
    )
  ) : useNaturalCroppedCover ? (
    <div className={cn("relative w-full", layoutClasses.aspectVideo)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={cn("object-cover", imageFocusClass(focus))}
      />
    </div>
  ) : useNaturalShortCover ? (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="100vw"
      className="h-auto max-h-[60vh] w-full object-cover object-center"
    />
  ) : useNaturalCover ? (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="100vw"
      className="h-auto w-full object-cover object-center"
    />
  ) : isAppWide ? (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1400}
      height={height ?? 900}
      sizes="100vw"
      className={cn(layoutClasses.appWideImage, layoutClasses.maxWidthImage)}
    />
  ) : (
    <div className="relative h-full w-full scale-[1.14]">
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
  );

  // Parallax applies to every figure except app-wide device shots. Cover
  // images (photographic, crop-tolerant) always drift; contained UI
  // screenshots opt in via the `parallax` flag to avoid clipping content.
  const useParallax = !isAppWide && (fit !== "contain" || parallax === true);
  // Natural-height cover images need extra scale so the vertical drift never
  // reveals the surface behind them. The fill-based cover path already scales
  // its own inner wrapper, and contained images rely on their inset padding.
  const isNaturalCoverNode =
    useNaturalCroppedCover || useNaturalShortCover || useNaturalCover;
  const parallaxContentScale = isNaturalCoverNode ? 1.14 : 1;

  return (
    <figure>
      <Reveal y={20}>
        {useParallax ? (
          <ParallaxImage
            className={imageShellClass}
            strength={8}
            contentScale={parallaxContentScale}
          >
            {imageNode}
          </ParallaxImage>
        ) : (
          <div className={imageShellClass}>{imageNode}</div>
        )}
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
            <CaseStudyTextShell>
              <CaseStudyModule>
                {caption.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </CaseStudyModule>
            </CaseStudyTextShell>
          </figcaption>
        </Reveal>
      ) : null}
    </figure>
  );
}

function CaseStudyTestimonial({
  quote,
  attribution,
}: Extract<CaseStudyBlock, { type: "testimonial" }>) {
  return (
    <section
      className={cn(
        "border-y",
        spacingClasses.sectionPadY,
        colorClasses.borderDefault,
      )}
    >
      <CaseStudyTextShell>
        <Reveal y={20}>
          <CaseStudyModule width="quote">
            <blockquote
              className={cn(
                "border-l-2 border-accent",
                spacingClasses.blockquotePad,
                typography.displayClosing.className,
                colorClasses.textPrimary,
              )}
            >
              {quote}
            </blockquote>
            <p
              className={cn(
                spacingClasses.blockquotePad,
                typography.bodySmall.className,
                colorClasses.textSubtle,
              )}
            >
              {attribution}
            </p>
          </CaseStudyModule>
        </Reveal>
      </CaseStudyTextShell>
    </section>
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
      return <CaseStudyChapter key={index} {...block} />;
    case "typo":
      return <CaseStudyTypoMoment key={index} {...block} />;
    case "stats":
      return <CaseStudyStats key={index} items={block.items} />;
    case "deliverable":
      return <CaseStudyDeliverable key={index} {...block} />;
    case "slideshow":
      return <CaseStudyProductTour key={index} {...block} />;
    case "video":
      return <CaseStudyVideo key={index} {...block} />;
    case "testimonial":
      return <CaseStudyTestimonial key={index} {...block} />;
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
          "group block border-t transition-colors hover:bg-ink-2 active:bg-ink-2",
          colorClasses.borderDefault,
        )}
      >
        <CaseStudyTextShell
          className={spacingClasses.nextProjectPad}
        >
          <CaseStudyModule className="flex items-center justify-between">
            <div>
              <div className={cn(spacingClasses.nextProjectLabelMb, "label")}>
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
                stateClasses.nextProjectIconHover,
              )}
            />
          </CaseStudyModule>
        </CaseStudyTextShell>
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
    <div className={cn(colorClasses.surface, typography.body.className)}>
      <CaseStudyHeroAnimated study={study} />
      <CaseStudyMetaStrip study={study} />

      {study.blocks.map((block, index) => (
        <CaseStudyBlockRenderer key={index} block={block} index={index} />
      ))}

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
