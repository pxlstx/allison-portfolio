import type { Metadata } from "next";
import { AskChat } from "@/components/ask/AskChat";

export const metadata: Metadata = {
  title: "Ask me",
  description: "Chat with an AI assistant about Allison's work and background.",
};

export default function AskPage() {
  return <AskChat />;
}
