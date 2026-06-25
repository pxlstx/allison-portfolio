import { cn } from "@/lib/cn";
import { colorClasses, spacingClasses, typography } from "@/lib/design-system";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function TextInput({ className, ...props }: TextInputProps) {
  return (
    <input
      className={cn(
        "w-full border outline-none transition-colors disabled:opacity-60",
        spacingClasses.inputPad,
        colorClasses.borderInput,
        colorClasses.surface,
        colorClasses.textPrimary,
        "placeholder:text-w-30 focus:border-white",
        typography.body.className,
        className,
      )}
      {...props}
    />
  );
}

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Caption({ children, className }: CaptionProps) {
  return (
    <p className={cn(typography.fine.className, colorClasses.textDim, className)}>
      {children}
    </p>
  );
}
