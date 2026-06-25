"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Caption,
  Icon,
  MessageBubble,
  PromptChip,
  PromptChipList,
  TextInput,
  TextLink,
} from "@/components/ui";
import { askPrompts, askWelcomeMessage } from "@/lib/ask";
import { site } from "@/lib/site";
import {
  colorClasses,
  layoutClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function AssistantAvatar() {
  return (
    <div
      className={cn(
        "relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border",
        colorClasses.borderDefault,
        colorClasses.surfaceRaised,
      )}
    >
      <Image
        src="/images/allison-portrait.png"
        alt="Allison"
        fill
        sizes="72px"
        className="object-cover object-center"
      />
    </div>
  );
}

function UserAvatar() {
  return (
    <div
      className={cn(
        spacingClasses.avatarMt,
        spacingClasses.avatarSize,
        "shrink-0 rounded-full bg-bdr",
      )}
    />
  );
}

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const content = message.content.replace(/\s*\n+\s*/g, " ").trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-start",
        spacingClasses.chatMessageGap,
        isUser ? "flex-row-reverse" : "",
      )}
    >
      {isUser ? <UserAvatar /> : <AssistantAvatar />}
      <MessageBubble variant={message.role}>{content}</MessageBubble>
    </motion.div>
  );
}

export function AskChat() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: askWelcomeMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasUserMessage = messages.some((message) => message.role === "user");

  useEffect(() => {
    setMessages((current) =>
      current.map((message) =>
        message.id === "welcome"
          ? { ...message, content: askWelcomeMessage }
          : message,
      ),
    );
  }, []);

  useEffect(() => {
    if (!hasUserMessage) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, hasUserMessage]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to get a response.");
      }

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message ?? "",
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  const canSend = Boolean(input.trim()) && !isLoading;

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col",
        colorClasses.surface,
        !hasUserMessage && "justify-center",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full flex-col px-page",
          layoutClasses.maxWidthChat,
          hasUserMessage ? "min-h-screen flex-1 pt-24" : "py-12",
        )}
      >
        <header className={cn("text-left", hasUserMessage ? "pb-8" : "pb-10")}>
          <h1 className="font-display text-display font-light tracking-display text-w-100">
            AllisonGPT.
          </h1>
          <p className="mt-4 font-sans text-body font-light text-w-60">
            Almost as good as the real thing. Ask me about my work, my process,
            or how I&apos;d approach your next project.
          </p>
        </header>

        <div
          className={cn(
            "flex min-h-0 flex-col",
            hasUserMessage && "flex-1 overflow-hidden",
          )}
        >
          <div
            className={cn(
              "flex flex-col",
              spacingClasses.chatMessageGap,
              !hasUserMessage && "mb-12",
              hasUserMessage && "min-h-0 flex-1 overflow-y-auto pb-4",
            )}
          >
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {isLoading && (
              <div className={cn("flex items-start", spacingClasses.chatMessageGap)}>
                <AssistantAvatar />
                <MessageBubble
                  variant="assistant"
                  contentClassName={colorClasses.textSubtle}
                >
                  Thinking…
                </MessageBubble>
              </div>
            )}

            {error && (
              <p className={cn(typography.bodySmall.className, colorClasses.textError)}>
                {error}
              </p>
            )}

            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={onSubmit}
            className={cn(
              "shrink-0",
              hasUserMessage && cn("sticky bottom-0 pt-3", colorClasses.surface),
            )}
          >
            <div className="relative">
              <TextInput
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className={spacingClasses.inputSubmitInset}
              />
              <button
                type="submit"
                disabled={!canSend}
                className={cn(
                  spacingClasses.inputSubmitPos,
                  spacingClasses.inputSubmitSize,
                  "absolute top-1/2 flex -translate-y-1/2 items-center justify-center transition-colors disabled:cursor-not-allowed",
                  canSend
                    ? colorClasses.textAccentBright
                    : colorClasses.textFaint,
                )}
                aria-label="Send message"
              >
                <Icon
                  name="arrow_forward"
                  size="md"
                  className={canSend ? colorClasses.textAccentBright : colorClasses.textFaint}
                />
              </button>
            </div>

            {!hasUserMessage && (
              <PromptChipList className="mt-4">
                {askPrompts.map((prompt) => (
                  <PromptChip
                    key={prompt}
                    onClick={() => void sendMessage(prompt)}
                  >
                    {prompt}
                  </PromptChip>
                ))}
              </PromptChipList>
            )}

            <Caption className="mt-2">
              Powered by Claude · Answers based on Allison&apos;s actual background.
              {" "}
              Something seem off?{" "}
              <TextLink href={`mailto:${site.email}`} variant="inline">
                Email directly.
              </TextLink>
            </Caption>
          </form>
        </div>
      </div>
    </div>
  );
}
