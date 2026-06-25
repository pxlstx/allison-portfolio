import { cn } from "@/lib/cn";
import { colorClasses, layoutClasses, spacingClasses, typography } from "@/lib/design-system";

const bubbleRadius = {
  assistant: layoutClasses.radiusBubbleAssistant,
  user: layoutClasses.radiusBubbleUser,
} as const;

type MessageBubbleProps = {
  children: React.ReactNode;
  variant?: "assistant" | "user";
  className?: string;
  contentClassName?: string;
};

export function MessageBubble({
  children,
  variant = "assistant",
  className,
  contentClassName,
}: MessageBubbleProps) {
  const isUser = variant === "user";

  return (
    <div
      className={cn(
        "max-w-full border",
        spacingClasses.bubblePad,
        isUser ? bubbleRadius.user : bubbleRadius.assistant,
        isUser
          ? cn(
              colorClasses.borderWhite,
              colorClasses.surfaceWhite,
              colorClasses.textInk,
            )
          : cn(colorClasses.borderDefault, colorClasses.surfaceRaised),
        className,
      )}
    >
      <p
        className={cn(
          typography.bodySmall.className,
          isUser ? colorClasses.textInk : undefined,
          contentClassName,
        )}
      >
        {children}
      </p>
    </div>
  );
}
