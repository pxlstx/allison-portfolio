import { cn } from "@/lib/cn";
import { layoutClasses, spacingClasses } from "@/lib/design-system";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  width?: "page" | "content" | "prose" | "chat";
};

const widthClass = {
  page: layoutClasses.maxWidthPage,
  content: layoutClasses.maxWidthContent,
  prose: layoutClasses.maxWidthProse,
  chat: layoutClasses.maxWidthChat,
};

export function PageContainer({
  children,
  className,
  width = "page",
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        spacingClasses.pagePadX,
        widthClass[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
