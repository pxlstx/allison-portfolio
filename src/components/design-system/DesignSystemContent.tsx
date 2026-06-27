import {
  Caption,
  DisplayHeading,
  Eyebrow,
  FilterTab,
  FilterTabList,
  Icon,
  MessageBubble,
  MetaCard,
  PageContainer,
  ProjectCard,
  PromptChip,
  PromptChipList,
  SectionLabel,
  TextInput,
  TextLink,
  TextLinkSmall,
} from "@/components/ui";
import { colors, colorClasses, iconExamples, iconSizes, layout, layoutClasses, linkClasses, spacing, typography } from "@/lib/design-system";
import { cn } from "@/lib/cn";

const docSurface = cn(
  "border",
  layoutClasses.radius,
  colorClasses.borderDefault,
  colorClasses.surfaceRaised,
);

function DsSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("border-t py-16 first:border-t-0 sm:py-20", colorClasses.borderDefault)}>
      <DisplayHeading as="h2" variant="chapter" className={cn("mb-10", typography.displaySection.className)}>
        {title}
      </DisplayHeading>
      {children}
    </section>
  );
}

function Swatch({
  name,
  value,
  className,
}: {
  name: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={cn("h-16 border", layoutClasses.radius, colorClasses.borderDefault, className)}
        style={className ? undefined : { background: value }}
      />
      <div>
        <p className={cn(typography.bodySmall.className, colorClasses.textPrimary)}>{name}</p>
        <p className={cn("font-mono text-caption", colorClasses.textSubtle)}>{value}</p>
      </div>
    </div>
  );
}

function TypeSpec({
  name,
  sample,
  className,
  meta,
  sampleClassName,
}: {
  name: string;
  sample: string;
  className: string;
  meta: string;
  sampleClassName?: string;
}) {
  return (
    <div className={cn("border-b py-8 last:border-b-0", colorClasses.borderDefault)}>
      <p className={cn("mb-1 font-mono text-caption", colorClasses.textAccent)}>{name}</p>
      <p className={cn("mb-3 font-mono", typography.fine.className, colorClasses.textFaint)}>{meta}</p>
      <p className={cn(className, sampleClassName)}>{sample}</p>
    </div>
  );
}

function CompLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className={cn("mb-4", typography.bodySmall.className)}>
      {children}
    </p>
  );
}

function CompDesc({ children }: { children: React.ReactNode }) {
  return (
    <p className={cn(typography.bodySmall.className, colorClasses.textSubtle)}>{children}</p>
  );
}

export function DesignSystemContent() {
  return (
    <PageContainer className="pt-24 sm:pt-32">
      <header className="mb-4 max-w-prose">
        <Eyebrow className="mb-6">Reference</Eyebrow>
        <DisplayHeading as="h1" variant="display" className="mb-6">
          Design system
        </DisplayHeading>
        <p className={typography.lead.className}>
          Tokens and components extracted from the portfolio. Use these as the
          source of truth when building new pages.
        </p>
      </header>

      <nav className={cn("mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b pb-8", colorClasses.borderDefault)}>
        {[
          ["colors", "Colors"],
          ["typography", "Typography"],
          ["spacing", "Spacing"],
          ["iconography", "Iconography"],
          ["components", "Components"],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(typography.bodySmall.className, colorClasses.textSubtle, "transition-colors hover:text-white active:text-accent")}
          >
            {label}
          </a>
        ))}
      </nav>

      <DsSection id="colors" title="Colors">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Swatch name="ink" value={colors.ink} />
          <Swatch name="ink-2" value={colors.ink2} />
          <Swatch name="accent" value={colors.accent} />
          <Swatch name="accent-bright" value={colors.accentBright} />
          <Swatch name="w-100" value={colors.w100} />
          <Swatch name="w-60" value={colors.w60} className="bg-w-60" />
          <Swatch name="w-30" value={colors.w30} className="bg-w-30" />
          <Swatch name="w-20" value={colors.w20} className="bg-w-20" />
          <Swatch name="w-15" value={colors.w15} className="bg-w-15" />
          <Swatch name="w-08" value={colors.w08} className="bg-w-08" />
          <Swatch name="bdr-mid" value={colors.bdrMid} className="bg-bdr-mid" />
          <Swatch name="bdr" value={colors.bdr} className="bg-bdr" />
          <Swatch name="status-online" value={colors.statusOnline} className="bg-status-online" />
          <Swatch name="error" value={colors.error} className="bg-error" />
        </div>
        <div className={cn("mt-10 p-6", docSurface)}>
          <p className={cn("mb-4", typography.bodySmall.className, colorClasses.textMuted)}>CSS variables</p>
          <pre className={cn("overflow-x-auto font-mono text-caption leading-relaxed", colorClasses.textSubtle)}>
            {`--ink, --ink-2\n--color-w-100 … --color-w-08\n--color-bdr, --color-bdr-mid, --color-bdr-bright\n--color-accent, --color-accent-bright\n--color-status-online, --color-error`}
          </pre>
        </div>
      </DsSection>

      <DsSection id="typography" title="Typography">
        <p className={cn("mb-8", typography.body.className)}>
          Display: Neue Haas Grotesk Display (100–700) · Text: Neue Haas Grotesk Text
          (400, 500, 700). Body at light (300) uses Display — Text has no 300 in this kit. Fonts via{" "}
          <a
            href="https://use.typekit.net/deu5fpf.css"
            className={cn(linkClasses.textLinkInline, "underline underline-offset-2")}
          >
            Adobe Fonts
          </a>
        </p>
        <TypeSpec
          name="display"
          meta="Display · clamp(48px, 8vw, 106px) · light (300) · 0 tracking · leading 0.95 · page titles, hero, intro"
          sample="Work"
          className={typography.display.className}
        />
        <TypeSpec
          name="displayHero"
          meta="Display · clamp(44px, 7vw, 90px) · light (300) · 0 tracking · leading 1 · case study hero titles"
          sample="A digitally empowered clinic."
          className={typography.displayHero.className}
        />
        <TypeSpec
          name="displaySection"
          meta="Display · clamp(32px, 4vw, 48px) · light (300) · 0 tracking · leading 1.05 · section headings"
          sample="Typography"
          className={typography.displaySection.className}
          sampleClassName={colorClasses.textPrimary}
        />
        <TypeSpec
          name="displayChapter"
          meta="Display · clamp(40px, 5.5vw, 72px) · light (300) · 0 tracking · leading 1.05 · case study headlines"
          sample="One visual language. Three surfaces."
          className={typography.displayChapter.className}
          sampleClassName={colorClasses.textPrimary}
        />
        <TypeSpec
          name="navChapter"
          meta="Display · clamp(36px, 5.5vw, 64px) · light (300) · 0 tracking · leading 1.05 · menu navigation"
          sample="Work"
          className={cn(typography.navChapter.className, linkClasses.navLink)}
        />
        <TypeSpec
          name="displayClosing"
          meta="Display · clamp(20px, 2.5vw, 32px) · light (300) · 0 tracking · leading 1.35 · quotes, client grid"
          sample="I do my best work when the problem is genuinely hard."
          className={typography.displayClosing.className}
          sampleClassName={colorClasses.textPrimary}
        />
        <TypeSpec
          name="lead"
          meta="Display · 24px · light (300) · 0 tracking · leading 1.45 · intro copy, subtitles, next project"
          sample="End-to-end experience design for a science-backed clinic."
          className={typography.lead.className}
        />
        <TypeSpec
          name="ctaLink"
          meta="Display · clamp(22px, 2.5vw, 36px) · light (300) · 0 tracking · CTA links"
          sample="Get in touch"
          className={cn(typography.ctaLink.className, colorClasses.textPrimary)}
        />
        <TypeSpec
          name="bodyLarge"
          meta="Display · 20px · light (300) · tracking-normal · leading 1.65 · w-60 · deliverables"
          sample="The goal was to make science feel approachable."
          className={typography.bodyLarge.className}
        />
        <TypeSpec
          name="bodyMedium"
          meta="Display · 18px · light (300) · tracking-normal · w-60 · meta card values"
          sample="Lead Product & UX Designer"
          className={typography.bodyMedium.className}
        />
        <TypeSpec
          name="body"
          meta="Display · 16px · light (300) · tracking-normal · leading 1.8 · w-60 · body copy, project cards"
          sample="Everskin is a new kind of aesthetic dermatology clinic in Zurich."
          className={typography.body.className}
        />
        <TypeSpec
          name="bodySmall"
          meta="Text · 14px (text-sm) · normal (400) · leading 1.65 · w-60 · About grids, chat bubbles"
          sample="I design the foundation before the features. Good design systems make everything downstream faster."
          className={typography.bodySmall.className}
        />
        <TypeSpec
          name="bodySmallSubtle"
          meta="Text · 14px (text-sm) · normal (400) · leading 1.65 · w-30 · footer name, Currently labels"
          sample="Based"
          className={typography.bodySmallSubtle.className}
        />
        <TypeSpec
          name="itemTitle"
          meta="Text · 16px · medium (500) · tracking-normal · white · About grid titles"
          sample="Systems first"
          className={typography.itemTitle.className}
        />
        <TypeSpec
          name="caption"
          meta="Text · 12px · normal (400) · tracking-normal · captions, footer links"
          sample="Powered by Claude · Answers based on Allison's actual background."
          className={typography.caption.className}
        />
        <TypeSpec
          name="micro"
          meta="Text · 10px · medium (500) · tracking 0.06em · NDA badges, cursor label"
          sample="NDA"
          className={typography.micro.className}
        />
        <TypeSpec
          name="label"
          meta="Text · 11px · medium (500) · tracking 0.1em · uppercase · section labels, eyebrows"
          sample="The challenge"
          className={typography.label.className}
          sampleClassName={colorClasses.textAccent}
        />
        <TypeSpec
          name="fine"
          meta="Text · 11px · normal (400) · leading 1.6 · fine print, type meta"
          sample="clamp(48px, 8vw, 106px) · light (300) · 0 tracking · leading 0.95"
          className={typography.fine.className}
          sampleClassName={colorClasses.textFaint}
        />
        <TypeSpec
          name="navMeta"
          meta="Text · 13px (text-small) · normal (400) · nav meta, prompt chips"
          sample="Based in Zurich"
          className={typography.navMeta.className}
          sampleClassName={colorClasses.textSubtle}
        />
        <TypeSpec
          name="filterTab"
          meta="Text · 15px / 16px sm · normal (400) · work filter tabs"
          sample="All work"
          className={typography.filterTab.className}
          sampleClassName={colorClasses.textSubtle}
        />
        <TypeSpec
          name="textLinkSmall"
          meta="Text · 14px (text-sm) · normal (400) · leading 2.1 · footer links"
          sample="LinkedIn"
          className={typography.textLinkSmall.className}
          sampleClassName={colorClasses.textFaint}
        />
      </DsSection>

      <DsSection id="spacing" title="Spacing & layout">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className={cn("mb-4", typography.bodySmall.className, colorClasses.textMuted)}>Spacing tokens</p>
            <ul className={cn("space-y-3 font-mono text-sm", colorClasses.textSubtle)}>
              <li>page-x: {spacing.pageX} (mobile: {spacing.pageXMobile})</li>
              <li>page-top: {spacing.pageTop}</li>
              <li>section-y: {spacing.sectionY}</li>
              <li>section-y-lg: {spacing.sectionYLarge}</li>
              <li>grid-gap: {spacing.gridGap}</li>
              <li>card-padding: {spacing.cardPadding}</li>
            </ul>
          </div>
          <div>
            <p className={cn("mb-4", typography.bodySmall.className, colorClasses.textMuted)}>Layout tokens</p>
            <ul className={cn("space-y-3 font-mono text-sm", colorClasses.textSubtle)}>
              <li>max-width-page: {layout.maxWidthPage}</li>
              <li>max-width-content: {layout.maxWidthContent}</li>
              <li>max-width-prose: {layout.maxWidthProse}</li>
              <li>max-width-chat: {layout.maxWidthChat}</li>
              <li>radius: {layout.radius}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className={cn("mb-4", typography.bodySmall.className, colorClasses.textMuted)}>Page padding visual</p>
          <div className={cn("relative h-24", docSurface)}>
            <div className="absolute inset-y-0 left-7 w-px bg-accent sm:left-[72px]" />
            <div className="absolute inset-y-0 right-7 w-px bg-accent sm:right-[72px]" />
            <p className={cn("flex h-full items-center justify-center text-caption", colorClasses.textSubtle)}>
              28px mobile · 72px desktop horizontal padding
            </p>
          </div>
        </div>
      </DsSection>

      <DsSection id="iconography" title="Iconography">
        <p className={cn("mb-8", typography.body.className)}>
          Material Symbols Outlined via Google Fonts. Use the{" "}
          <code className={cn("font-mono", typography.bodySmall.className, colorClasses.textSubtle)}>
            Icon
          </code>{" "}
          component with ligature names from{" "}
          <TextLink
            href="https://fonts.google.com/icons"
            external
            variant="inline"
          >
            fonts.google.com/icons
          </TextLink>
          .
        </p>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {iconExamples.map((icon) => (
            <div
              key={icon.name}
              className={cn("flex flex-col items-center gap-3 px-6 py-8", docSurface)}
            >
              <Icon name={icon.name} className={colorClasses.textPrimary} />
              <p className={cn("font-mono text-caption", colorClasses.textAccent)}>{icon.name}</p>
              <p className={cn("text-center", typography.bodySmall.className, colorClasses.textMuted)}>{icon.label}</p>
              <p className={cn("text-center", typography.fine.className, colorClasses.textFaint)}>{icon.usage}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className={cn("mb-4", typography.bodySmall.className, colorClasses.textMuted)}>Sizes</p>
            <div className={cn("flex flex-wrap items-end gap-8 p-6", docSurface)}>
              {(Object.entries(iconSizes) as [keyof typeof iconSizes, number][]).map(
                ([token, px]) => (
                  <div key={token} className="flex flex-col items-center gap-2">
                    <Icon name="arrow_forward" size={px} className={colorClasses.textPrimary} />
                    <p className={cn("font-mono", typography.fine.className, colorClasses.textSubtle)}>
                      {token} · {px}px
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
          <div>
            <p className={cn("mb-4", typography.bodySmall.className, colorClasses.textMuted)}>Colors</p>
            <div className={cn("flex flex-wrap items-center gap-8 p-6", docSurface)}>
              <Icon name="arrow_forward" className={colorClasses.textPrimary} label="White icon" />
              <Icon name="arrow_forward" className={colorClasses.textSubtle} label="Muted icon" />
              <Icon name="arrow_forward" className={colorClasses.textAccent} label="Accent icon" />
              <Icon name="arrow_forward" className={colorClasses.textAccentBright} label="Bright accent icon" />
            </div>
          </div>
        </div>

        <div className={cn("mt-10 p-6", docSurface)}>
          <p className={cn("mb-4", typography.bodySmall.className, colorClasses.textMuted)}>Usage</p>
          <pre className={cn("overflow-x-auto font-mono text-caption leading-relaxed", colorClasses.textSubtle)}>
            {`import { Icon } from "@/components/ui";\n\n<Icon name="arrow_forward" />\n<Icon name="arrow_forward" size="lg" className="text-accent-bright" />`}
          </pre>
        </div>
      </DsSection>

      <DsSection id="components" title="Components">
        <div className="space-y-16">
          <div>
            <SectionLabel>SectionLabel</SectionLabel>
            <CompDesc>
              Orange uppercase label with accent bar. Used for case study chapters.
            </CompDesc>
          </div>

          <div>
            <Eyebrow className="mb-4">Eyebrow</Eyebrow>
            <CompDesc>Hero tags and meta labels with accent bar.</CompDesc>
          </div>

          <div>
            <CompLabel>FilterTab</CompLabel>
            <FilterTabList>
              <FilterTab active>All</FilterTab>
              <FilterTab>Product & UX</FilterTab>
              <FilterTab>Brand & Visual</FilterTab>
            </FilterTabList>
          </div>

          <div>
            <CompLabel>TextLink — CTA</CompLabel>
            <TextLink href="#" variant="cta">
              See my work
            </TextLink>
          </div>

          <div>
            <CompLabel>TextLink — footer</CompLabel>
            <TextLink href="#" variant="footer">
              LinkedIn
            </TextLink>
          </div>

          <div>
            <CompLabel>TextLink — inline</CompLabel>
            <Caption>
              Something seem off?{" "}
              <TextLink href="#" variant="inline">
                Email directly.
              </TextLink>
            </Caption>
          </div>

          <div>
            <CompLabel>TextLinkSmall</CompLabel>
            <p className={cn(typography.textLinkSmall.className, colorClasses.textDim)}>
              <TextLinkSmall>What kind of clients do you work with?</TextLinkSmall>
              ,{" "}
              <TextLinkSmall>Do you work on design systems?</TextLinkSmall>
            </p>
          </div>

          <div className="max-w-xl">
            <CompLabel>TextInput</CompLabel>
            <div className="relative">
              <TextInput placeholder="Ask me (almost) anything" className="pr-12 sm:pr-14" />
              <span className={cn("pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center sm:right-4", colorClasses.textAccentBright)}>
                <Icon name="arrow_forward" size="md" className={colorClasses.textAccentBright} />
              </span>
            </div>
          </div>

          <div className="max-w-2xl">
            <CompLabel>PromptChip</CompLabel>
            <CompDesc>
              Suggested prompts on the Ask page. Pill button with border; 13px text, w-30 default,
              w-60 on hover. Use <code className={cn("font-mono text-caption", colorClasses.textSubtle)}>PromptChipList</code> for the wrapping row.
            </CompDesc>
            <PromptChipList className="mt-4">
              <PromptChip>What kind of clients do you work with?</PromptChip>
              <PromptChip>Do you work on design systems?</PromptChip>
              <PromptChip>What&apos;s your approach to product design?</PromptChip>
            </PromptChipList>
          </div>

          <div>
            <CompLabel>MetaCard</CompLabel>
            <div className="flex flex-wrap gap-3">
              <MetaCard label="Client" value="Everskin" />
              <MetaCard label="Role" value="Lead Product & UX Designer" />
            </div>
          </div>

          <div className="max-w-md">
            <CompLabel>ProjectCard</CompLabel>
            <CompDesc>
              Work grid card with bordered frame, 16px padding, image, client label, and title.
            </CompDesc>
            <div className="mt-4">
              <ProjectCard
                client="Everskin"
                title="End-to-end experience design across website, client app, and practitioner iPad app"
                imageSrc="/images/everskin/everskin-hero.webp"
                href="/work/everskin"
                imageColor="#161A18"
                aspect="4/3"
              />
            </div>
          </div>

          <div className="max-w-md">
            <CompLabel>ProjectCard — NDA</CompLabel>
            <ProjectCard
              client="Unique.AI"
              title="UX design for an AI-enabled compliance platform for private banks"
              imageSrc="https://picsum.photos/seed/10/1200/900"
              nda
              imageColor="#1A1816"
              aspect="16/10"
            />
          </div>

          <div className="max-w-lg space-y-4">
            <CompLabel>MessageBubble</CompLabel>
            <MessageBubble variant="assistant">
              Hi. I&apos;m a slightly less witty version of Allison, but I know her work pretty well. What would you like to know?
            </MessageBubble>
            <MessageBubble variant="user">
              What kind of clients do you work with?
            </MessageBubble>
          </div>

          <div>
            <CompLabel>Caption</CompLabel>
            <Caption>
              Powered by Claude · Answers based on Allison&apos;s actual background.
            </Caption>
          </div>
        </div>
      </DsSection>
    </PageContainer>
  );
}
