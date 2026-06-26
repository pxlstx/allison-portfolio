import { Caption, Icon, ProjectCard, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  colorClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";
import { site } from "@/lib/site";

type HomeFooterProps = {
  className?: string;
};

export function HomeFooter({ className }: HomeFooterProps = {}) {
  return (
    <footer
      className={cn(
        spacingClasses.footerHairline,
        "flex flex-col items-start justify-between border-t sm:flex-row sm:items-center",
        spacingClasses.footerFlexGap,
        colorClasses.borderDefault,
        spacingClasses.footerPad,
        className,
      )}
    >
      <div className={typography.bodySmallSubtle.className}>
        {site.name}
      </div>
      <ul className={cn("flex list-none", spacingClasses.footerLinkGap)}>
        <li>
          <TextLink href={site.linkedIn} external variant="footer">
            LinkedIn
          </TextLink>
        </li>
        <li>
          <TextLink href={site.instagram} external variant="footer">
            Instagram
          </TextLink>
        </li>
        <li>
          <TextLink href={`mailto:${site.email}`} variant="footer">
            {site.email}
          </TextLink>
        </li>
      </ul>
      <Caption className={colorClasses.textFaint}>
        © {new Date().getFullYear()}
      </Caption>
    </footer>
  );
}
