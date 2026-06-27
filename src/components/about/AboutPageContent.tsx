import Image from "next/image";
import { HomeFooter } from "@/components/home/HomeFooter";
import { DisplayHeading, Eyebrow, SectionLabel, TextLink } from "@/components/ui";
import { aboutCopy } from "@/lib/about";
import {
  colorClasses,
  layoutClasses,
  motionClasses,
  spacingClasses,
  stateClasses,
  typography,
} from "@/lib/design-system";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

function AboutSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-b",
        colorClasses.borderDefault,
        spacingClasses.sectionPadY,
        layoutClasses.aboutSectionShell,
        className,
      )}
    >
      {children}
    </section>
  );
}

function SidebarSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid items-start gap-6",
        spacingClasses.deliverableLabelCol,
        spacingClasses.deliverableGap,
      )}
    >
      <div
        className={cn(
          spacingClasses.deliverableLabelPt,
          colorClasses.textAccent,
          typography.label.className,
        )}
      >
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

export function AboutPageContent() {
  const { hero, callout, background, quote, howIWork, services, currently, cta } =
    aboutCopy;

  return (
    <div className={cn(colorClasses.surface, typography.body.className)}>
      {/* Hero */}
      <section
        className={cn(
          "border-b",
          colorClasses.borderDefault,
          layoutClasses.aboutSectionShell,
          "grid w-full items-end gap-12 sm:gap-20 lg:grid-cols-[1fr_360px]",
          spacingClasses.aboutHeroPad,
        )}
      >
        <div>
          <Eyebrow className="mb-7">{hero.label}</Eyebrow>
          <DisplayHeading
            as="h1"
            variant="display"
            className={cn("mb-8", layoutClasses.maxWidthAboutWide)}
          >
            {hero.headline}
          </DisplayHeading>
          <p
            className={cn(
              layoutClasses.maxWidthAboutProse,
              typography.bodyLarge.className,
            )}
          >
            {hero.intro}
          </p>
        </div>

        <div className={cn("mt-10 w-full sm:max-w-none lg:mt-10", layoutClasses.aboutPhotoMax)}>
          <div
            className={cn(
              "relative aspect-[3/4] overflow-hidden",
              layoutClasses.radius,
              colorClasses.surfaceRaised,
              "border",
              colorClasses.borderDefault,
            )}
          >
            <Image
              src={hero.photoSrc}
              alt={hero.photoAlt}
              fill
              sizes="(max-width: 1024px) 240px, 360px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Callout 1 */}
      <AboutSection>
        <p
          className={cn(
            layoutClasses.maxWidthAboutWide,
            typography.displayChapter.className,
            colorClasses.textPrimary,
          )}
        >
          {callout.before}
          <span className={colorClasses.textAccent}>{callout.accent}</span>
        </p>
      </AboutSection>

      {/* Background */}
      <AboutSection>
        <SidebarSection label={background.label}>
          <div
            className={cn(layoutClasses.maxWidthAboutProse, typography.body.className)}
          >
            {background.paragraphs.map((paragraph, index) => (
              <p key={index} className={spacingClasses.paragraphGap}>
                {paragraph}
              </p>
            ))}
          </div>
        </SidebarSection>
      </AboutSection>

      {/* Quote callout */}
      <AboutSection>
        <div className={layoutClasses.maxWidthAboutWide}>
          <blockquote
            className={cn(
              layoutClasses.maxWidthAboutQuote,
              "ml-auto border-l-2 border-accent",
              spacingClasses.blockquotePad,
              typography.displayClosing.className,
              colorClasses.textPrimary,
            )}
          >
            {quote}
          </blockquote>
        </div>
      </AboutSection>

      {/* How I work */}
      <AboutSection>
        <SectionLabel className="mb-12">{howIWork.label}</SectionLabel>
        <div
          className={cn(
            "grid grid-cols-1 gap-12 sm:grid-cols-3",
            layoutClasses.maxWidthAboutWide,
          )}
        >
          {howIWork.items.map((item) => (
            <div key={item.title}>
              <p className={cn(typography.itemTitle.className, "mb-2.5")}>
                {item.title}
              </p>
              <p className={typography.bodySmall.className}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </AboutSection>

      {/* Services */}
      <AboutSection>
        <SectionLabel className="mb-12">{services.label}</SectionLabel>
        <div
          className={cn(
            "grid grid-cols-1 gap-0.5 sm:grid-cols-2",
            layoutClasses.maxWidthAboutWide,
          )}
        >
          {services.items.map((item) => (
            <div
              key={item.title}
              className={cn(
                layoutClasses.radius,
                spacingClasses.serviceCardPad,
                "border",
                colorClasses.borderDefault,
                motionClasses.fast,
                stateClasses.serviceCardBorderHover,
              )}
            >
              <p className={cn(typography.itemTitle.className, "mb-2.5")}>
                {item.title}
              </p>
              <p className={typography.bodySmall.className}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </AboutSection>

      {/* Currently */}
      <AboutSection>
        <SidebarSection label={currently.label}>
          <div className={layoutClasses.maxWidthAboutProse}>
            {currently.items.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-baseline justify-between gap-6",
                  spacingClasses.currentlyRowPad,
                  index === 0 && spacingClasses.currentlyRowFirstPt,
                  index < currently.items.length - 1 && "border-b",
                  colorClasses.borderDefault,
                )}
              >
                <span className={cn("min-w-[100px] shrink-0", typography.bodySmallSubtle.className)}>
                  {item.label}
                </span>
                <span
                  className={cn(
                    typography.body.className,
                    "text-right",
                    colorClasses.textPrimary,
                  )}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </SidebarSection>
      </AboutSection>

      {/* CTA */}
      <section className={cn(layoutClasses.aboutSectionShell, spacingClasses.aboutCtaPad)}>
        <DisplayHeading
          as="h2"
          variant="display"
          className={cn("mb-10", layoutClasses.maxWidthAboutWide)}
        >
          {cta.headline}
        </DisplayHeading>
        <TextLink href={`mailto:${site.email}`} variant="cta">
          {site.email}
        </TextLink>
      </section>

      <div className={layoutClasses.aboutSectionShell}>
        <HomeFooter className="border-t-0 px-0" />
      </div>
    </div>
  );
}
