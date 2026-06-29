import fs from "node:fs";
import path from "node:path";
import { getCaseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

const promptPath = path.join(process.cwd(), "content/allison-gpt.md");

function loadPromptTemplate(): string {
  return fs.readFileSync(promptPath, "utf8").trim();
}

const studies = getCaseStudies()
  .map(
    (study) =>
      `- ${study.title} (${study.year}): ${study.summary} [tags: ${study.tags.join(", ")}]`,
  )
  .join("\n");

export const systemPrompt = [
  loadPromptTemplate().replaceAll("{{email}}", site.email),
  "",
  "## Portfolio case studies (from site data)",
  studies || "- No case studies published yet.",
  "",
  "Writing lives on an external site. For long-form essays, direct visitors to the Writing page.",
].join("\n");
