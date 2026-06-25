import { cn } from "@/lib/cn";
import { colorClasses, layoutClasses, motionClasses, spacingClasses } from "@/lib/design-system";

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
        className={cn(
          "relative overflow-hidden border",
          layoutClasses.radius,
          colorClasses.borderDefault,
          colorClasses.surfaceRaised,
        )}
        style={{ aspectRatio: PORTRAIT_ASPECT }}
      >
        <video
          src="/video/ZoomCall.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Allison Sarno"
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}
