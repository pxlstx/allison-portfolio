import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About me",
  description: `About ${site.name} — product and UX design in Zurich.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
