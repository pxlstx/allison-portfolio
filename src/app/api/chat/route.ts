import Anthropic from "@anthropic-ai/sdk";
import { systemPrompt } from "@/lib/systemPrompt";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

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
      system: systemPrompt,
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
