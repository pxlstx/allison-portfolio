import type { Metadata } from "next";
import { CustomCursor } from "@/components/site/CustomCursor";
import { SiteMenu } from "@/components/site/SiteMenu";
import { colorClasses } from "@/lib/design-system";
import { typekit } from "@/lib/fonts";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {typekit.preconnect.map((origin) => (
          <link key={origin} rel="preconnect" href={origin} crossOrigin="" />
        ))}
        <link rel="stylesheet" href={typekit.url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={cn("min-h-full font-sans", colorClasses.surface, colorClasses.textMuted)}>
        <CustomCursor />
        <SiteMenu />
        <main className="min-h-full">{children}</main>
      </body>
    </html>
  );
}
