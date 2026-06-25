import type { Metadata } from "next";
import { WorkPageContent } from "@/components/work/WorkPageContent";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product and brand design work.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
