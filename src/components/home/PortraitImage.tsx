import { cn } from "@/lib/cn";
import { homeMedia } from "@/lib/site";
import { motionClasses, spacingClasses } from "@/lib/design-system";

// Matches source image: 1024×810
const PORTRAIT_ASPECT = 1024 / 810;

type PortraitImageProps = {
  visible: boolean;
  opacity?: number;
};

export function PortraitImage({ visible, opacity = 1 }: PortraitImageProps) {
  return (
    <div
      className={cn(
        spacingClasses.portraitPos,
        motionClasses.portraitFade,
      )}
      style={{ opacity: visible ? opacity : 0 }}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: PORTRAIT_ASPECT }}
      >
        <video
          src={homeMedia.introVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Allison Sarno"
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}
