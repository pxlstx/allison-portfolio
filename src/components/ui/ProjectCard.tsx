import Image from "next/image";
import Link from "next/link";
import {
  colorClasses,
  motionClasses,
  spacingClasses,
  stateClasses,
  typography,
} from "@/lib/design-system";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type ProjectCardAspect = "16/10" | "4/3" | "21/9";

export type ProjectCardImageFocus = "center" | "top" | "bottom" | "right-top";

const imageFocusClass: Record<ProjectCardImageFocus, string> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  "right-top": "object-right-top",
};

const aspectClass: Record<ProjectCardAspect, string> = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3] max-[900px]:aspect-video",
  "21/9": "aspect-[21/9] max-[900px]:aspect-video",
};

export type ProjectCardLogoSize = "wide" | "compact";

const logoSizeClass: Record<ProjectCardLogoSize, string> = {
  wide: spacingClasses.projectCardLogoImage,
  compact: spacingClasses.projectCardLogoImageCompact,
};

const logoIntrinsic: Record<ProjectCardLogoSize, { width: number; height: number }> = {
  wide: { width: 600, height: 115 },
  compact: { width: 1200, height: 200 },
};

export type ProjectCardProps = {
  client: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  nda?: boolean;
  aspect?: ProjectCardAspect;
  imageColor?: string;
  imageFocus?: ProjectCardImageFocus;
  imageLogoSrc?: string;
  imageLogoSize?: ProjectCardLogoSize;
  imageSizes?: string;
  onActivate?: () => void;
  className?: string;
};

export function ProjectCard({
  client,
  title,
  imageSrc,
  imageAlt = "",
  href,
  nda,
  aspect = "4/3",
  imageColor,
  imageFocus = "center",
  imageLogoSrc,
  imageLogoSize = "wide",
  imageSizes = "(max-width: 900px) 100vw, 50vw",
  onActivate,
  className,
}: ProjectCardProps) {
  const shellClassName = cn(
    "border transition-[border-color] hover:border-bdr-bright",
    colorClasses.borderDefault,
    motionClasses.default,
    className,
  );

  const bodyClassName = cn(
    "group flex h-full flex-col",
    spacingClasses.cardPad,
    spacingClasses.cardBodyGap,
  );

  const content = (
    <>
      <div
        className={cn("relative overflow-hidden", aspectClass[aspect])}
        style={imageColor ? { backgroundColor: imageColor } : undefined}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={imageSizes}
          className={cn(
            "object-cover transition-[filter]",
            imageFocusClass[imageFocus],
            colorClasses.imageBrightness,
            motionClasses.menu,
          )}
        />

        {imageLogoSrc ? (
          <div className={spacingClasses.projectCardLogoOverlay} aria-hidden>
            <Image
              src={imageLogoSrc}
              alt=""
              width={logoIntrinsic[imageLogoSize].width}
              height={logoIntrinsic[imageLogoSize].height}
              className={logoSizeClass[imageLogoSize]}
            />
          </div>
        ) : null}

        {nda ? (
          <div
            className={cn(
              spacingClasses.ndaBadgePos,
              "flex items-center justify-center rounded-full border",
              colorClasses.borderWhite15,
              colorClasses.surfaceOverlay,
              typography.micro.className,
            )}
            aria-hidden
          >
            <Icon name="lock" size={14} className={colorClasses.textPrimary} />
          </div>
        ) : null}
      </div>

      <div className={spacingClasses.cardTitleStack}>
        <p className="label">{client}</p>
        <p
          className={cn(
            typography.lead.className,
            colorClasses.textMuted,
            motionClasses.medium,
            stateClasses.projectCardTitleHover,
          )}
        >
          {title}
        </p>
      </div>
    </>
  );

  if (onActivate) {
    return (
      <div className={shellClassName}>
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          className={cn(bodyClassName, "cursor-pointer text-left")}
          onClick={onActivate}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onActivate();
            }
          }}
        >
          {content}
        </div>
      </div>
    );
  }

  if (!href) {
    return (
      <article className={shellClassName}>
        <div className={bodyClassName}>
          {content}
        </div>
      </article>
    );
  }

  return (
    <div className={shellClassName}>
      <Link href={href} className={bodyClassName} data-cursor="view">
        {content}
      </Link>
    </div>
  );
}
