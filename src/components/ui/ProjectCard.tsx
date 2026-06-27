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

export type ProjectCardAspect = "16/10" | "4/3";

const aspectClass: Record<ProjectCardAspect, string> = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3] max-[900px]:aspect-video",
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
          sizes="(max-width: 900px) 100vw, 50vw"
          className={cn(
            "object-cover object-center transition-[filter]",
            colorClasses.imageBrightness,
            motionClasses.menu,
          )}
        />

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
        <p className={cn(colorClasses.textAccent, typography.label.className)}>
          {client}
        </p>
        <p
          className={cn(
            typography.body.className,
            motionClasses.medium,
            stateClasses.projectCardTitleHover,
          )}
        >
          {title}
        </p>
      </div>
    </>
  );

  if (nda || !href) {
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
