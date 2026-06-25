import Anthropic from "@anthropic-ai/sdk";
import { getCaseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function buildSystemPrompt(): string {
  const studies = getCaseStudies()
    .map(
      (study) =>
        `- ${study.title} (${study.year}): ${study.summary} [tags: ${study.tags.join(", ")}]`,
    )
    .join("\n");

  return `You are a helpful assistant on ${site.name}'s portfolio website. Answer questions about their work, background, and design approach in a warm, concise, first-person voice—as if you are Allison speaking to a visitor.

Keep answers focused and conversational. If asked about something you don't know, say so honestly and suggest they reach out directly.

Known case studies:
${studies || "- No case studies published yet."}

Writing lives on an external site. For long-form essays, direct visitors to the Writing page.`;
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        error:
          "ANTHROPIC_API_KEY is not configured. Add it to your environment to enable chat.",
      },
      { status: 503 },
    );
  }

  let body: { messages?: ChatMessage[] };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = body.messages?.filter(
    (message) =>
      (message.role === "user" || message.role === "assistant") &&
      typeof message.content === "string" &&
      message.content.trim(),
  );

  if (!messages?.length) {
    return Response.json({ error: "No messages provided." }, { status: 400 });
  }

  const anthropic = new Anthropic({ apiKey });

  try {
    const response = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6",
      max_tokens: 1024,
      system: buildSystemPrompt(),
      messages: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return Response.json({ message: text });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Anthropic API request failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
