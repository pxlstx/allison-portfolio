"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Caption,
  DisplayHeading,
  Icon,
  MessageBubble,
  PageContainer,
  TextInput,
  TextLink,
  TextLinkSmall,
} from "@/components/ui";
import { askPrompts, askWelcomeMessage } from "@/lib/ask";
import { site } from "@/lib/site";
import {
  colorClasses,
  layoutClasses,
  spacingClasses,
  typography,
  zIndexClasses,
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
        spacingClasses.avatarMt,
        spacingClasses.avatarSize,
        "relative shrink-0 overflow-hidden rounded-full border",
        colorClasses.borderDefault,
        colorClasses.surfaceRaised,
      )}
    >
      <Image
        src="/images/allison-portrait.png"
        alt="Allison"
        fill
        sizes="28px"
        className="object-cover object-center"
      />
    </div>
  );
}

function UserAvatar() {
  return <div className={cn(spacingClasses.avatarMt, spacingClasses.avatarSize, "shrink-0 rounded-full bg-bdr")} />;
}

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const content = message.content.replace(/\s*\n+\s*/g, " ").trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex items-start", spacingClasses.chatMessageGap, isUser ? "flex-row-reverse" : "")}
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
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

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
    <div className={cn("flex min-h-screen flex-col", colorClasses.surface)}>
      <PageContainer className={cn("flex-1", spacingClasses.chatPagePad)}>
        <DisplayHeading as="h1" variant="display" className={spacingClasses.chatTitleMb}>
          AllisonGPT
        </DisplayHeading>

        <div className="lg:flex lg:justify-end">
          <div
            className={cn(
              "relative min-w-0 w-full max-lg:sticky max-lg:bottom-0",
              zIndexClasses.sticky,
              layoutClasses.maxWidthChatMin,
            )}
          >
            <div className="flex min-h-[min(52vh,480px)] min-w-0 flex-col overflow-hidden max-lg:max-h-[min(52vh,480px)] lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:max-h-none">
              <div
                className={cn(
                  "flex min-h-0 flex-1 flex-col overflow-y-auto",
                  spacingClasses.chatPanelPad,
                  spacingClasses.pagePadXSm6,
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
                  "sticky bottom-0 shrink-0",
                  zIndexClasses.sticky,
                  spacingClasses.chatFormPad,
                  colorClasses.surface,
                  spacingClasses.pagePadXSm6,
                )}
              >
                <div className="relative">
                  <TextInput
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask me (almost) anything"
                    disabled={isLoading}
                    className={spacingClasses.inputSubmitInset}
                  />
                  <button
                    type="submit"
                    disabled={!canSend}
                    className={cn(
                      spacingClasses.inputSubmitPos,
                      spacingClasses.inputSubmitSize,
                      "absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors disabled:cursor-not-allowed",
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
                  <p className={cn(spacingClasses.chatPromptMt, typography.textLinkSmall.className, colorClasses.textDim)}>
                    {askPrompts.map((prompt, index) => (
                      <span key={prompt}>
                        {index > 0 && (
                          <span aria-hidden className={colorClasses.textDim}>
                            ,&nbsp;&nbsp;
                          </span>
                        )}
                        <TextLinkSmall onClick={() => void sendMessage(prompt)}>
                          {prompt}
                        </TextLinkSmall>
                      </span>
                    ))}
                  </p>
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
      </PageContainer>
    </div>
  );
}
