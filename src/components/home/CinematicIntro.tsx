"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { clients, homeCopy } from "@/lib/site";
import { PortraitImage } from "@/components/home/PortraitImage";
import {
  colorClasses,
  layoutClasses,
  motionClasses,
  spacingClasses,
  typography,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

const displayTextClass = typography.display.className;

const closingDisplayClass = cn(
  "font-display text-hero font-light leading-display tracking-display",
  colorClasses.textPrimary,
);

type IntroPhase =
  | "panel-1-in"
  | "panel-1-out"
  | "panel-2-in"
  | "panel-2-out"
  | "panel-3-in"
  | "panel-3-out"
  | "done";

type TextSegment = {
  text: string;
  bold?: boolean;
  accent?: boolean;
  keepTogether?: boolean;
};

const statementSegments = homeCopy.statementSegments;

const closingLines: TextSegment[][] = [
  [{ text: "By helping teams turn" }],
  [
    { text: "complex", bold: true },
    { text: "ideas", bold: true },
  ],
  [
    { text: "into" },
    { text: "scalable products,", accent: true },
    { text: "brands," },
  ],
  [{ text: "and experiences.", bold: true, keepTogether: true }],
];

function segmentSeparator(previousIndex: number) {
  return previousIndex > 0 ? " " : null;
}

function letterCount(text: string) {
  return [...text].filter((char) => char !== " ").length;
}

const LETTER_DURATION_MS = 680;
const LETTER_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function letterAnimationMs(text: string, charDelay: number, hold = 0) {
  const count = letterCount(text);
  if (count === 0) return hold;
  return (count - 1) * charDelay + LETTER_DURATION_MS + hold;
}

function LetterSpan({
  char,
  show,
  delay,
  charDelay,
}: {
  char: string;
  show: boolean;
  delay: number;
  charDelay: number;
}) {
  return (
    <span
      className="inline-block align-baseline"
      style={{
        opacity: show ? 1 : 0,
        transition: `opacity ${LETTER_DURATION_MS}ms ${LETTER_EASE}`,
        transitionDelay: show ? `${delay * charDelay}ms` : "0ms",
      }}
    >
      {char}
    </span>
  );
}

function AnimatedLetters({
  text,
  show,
  charDelay = 30,
  className,
  singleLine = false,
}: {
  text: string;
  show: boolean;
  charDelay?: number;
  className: string;
  singleLine?: boolean;
}) {
  const words = text.trim().split(/\s+/);
  let delayIndex = 0;

  return (
    <div className={`${className}${singleLine ? " whitespace-nowrap" : ""}`}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((char, charIndex) => {
              const delay = delayIndex;
              delayIndex += 1;

              return (
                <LetterSpan
                  key={`${word}-${charIndex}`}
                  char={char}
                  show={show}
                  delay={delay}
                  charDelay={charDelay}
                />
              );
            })}
          </span>
          {wordIndex < words.length - 1 ? " " : null}
        </span>
      ))}
    </div>
  );
}

function StatementText({
  show,
  charDelay = 28,
}: {
  show: boolean;
  charDelay?: number;
}) {
  let delayIndex = 0;

  return (
    <div className={displayTextClass}>
      {statementSegments.map((segment, segmentIndex) => {
        const words = segment.text.trim().split(/\s+/).filter(Boolean);

        return (
          <span key={`statement-segment-${segmentIndex}`}>
            {segmentSeparator(segmentIndex)}
            <span className={"accent" in segment && segment.accent ? colorClasses.textAccent : undefined}>
              {words.map((word, wordIndex) => (
                <span key={`statement-word-${segmentIndex}-${wordIndex}`}>
                  <span className="inline-block whitespace-nowrap">
                    {[...word].map((char, charIndex) => {
                      const delay = delayIndex;
                      delayIndex += 1;

                      return (
                        <LetterSpan
                          key={`statement-char-${segmentIndex}-${wordIndex}-${charIndex}`}
                          char={char}
                          show={show}
                          delay={delay}
                          charDelay={charDelay}
                        />
                      );
                    })}
                  </span>
                  {wordIndex < words.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </div>
  );
}

function ClosingText({ show }: { show: boolean }) {
  let delayIndex = 0;

  function renderSegment(
    segment: TextSegment,
    lineIndex: number,
    segmentIndex: number,
  ) {
    const words = segment.text.trim().split(/\s+/);

    return (
      <span
        key={`closing-segment-${lineIndex}-${segmentIndex}`}
        className={cn(
          segment.bold && colorClasses.textPrimary,
          segment.accent && colorClasses.textAccent,
          segment.keepTogether && "whitespace-nowrap",
        )}
      >
        {words.map((word, wordIndex) => (
          <span key={`closing-word-${lineIndex}-${segmentIndex}-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {[...word].map((char, charIndex) => {
                const delay = delayIndex;
                delayIndex += 1;

                return (
                  <LetterSpan
                    key={`closing-char-${lineIndex}-${segmentIndex}-${wordIndex}-${charIndex}`}
                    char={char}
                    show={show}
                    delay={delay}
                    charDelay={24}
                  />
                );
              })}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    );
  }

  function renderSegmentGroup(
    segments: TextSegment[],
    lineIndex: number,
    startIndex: number,
  ) {
    return segments.map((segment, offset) => (
      <span key={`closing-segment-wrap-${lineIndex}-${startIndex + offset}`}>
        {segmentSeparator(offset)}
        {renderSegment(segment, lineIndex, startIndex + offset)}
      </span>
    ));
  }

  return (
    <div className={closingDisplayClass}>
      {closingLines.map((line, lineIndex) => (
        <div key={`closing-line-${lineIndex}`}>
          {renderSegmentGroup(line, lineIndex, 0)}
        </div>
      ))}
    </div>
  );
}

function ClientGrid({
  show,
  className = "",
}: {
  show: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3",
        spacingClasses.gridGapXSm,
        "sm:gap-y-8",
        className,
      )}
    >
      {clients.map((client, index) => (
        <div
          key={client.name}
          className={cn(
            typography.displayClosing.className,
            colorClasses.textPrimary,
            motionClasses.menu,
            "transition-all",
            client.quirky ? "inline-block origin-left" : "",
            show
              ? client.quirky
                ? "translate-y-0 rotate-[-1.5deg] opacity-100"
                : "translate-y-0 opacity-100"
              : "translate-y-1.5 opacity-0",
          )}
          style={{
            transitionDelay: show ? `${index * 80}ms` : "0ms",
          }}
        >
          {client.name}
        </div>
      ))}
    </div>
  );
}

function panelTransform(phase: IntroPhase, panel: 1 | 2 | 3) {
  switch (phase) {
    case "panel-1-in":
      return panel === 1 ? "translateY(0%)" : "translateY(100%)";
    case "panel-1-out":
    case "panel-2-in":
      if (panel === 1) return "translateY(-100%)";
      if (panel === 2) return "translateY(0%)";
      return "translateY(100%)";
    case "panel-2-out":
    case "panel-3-in":
      if (panel === 3) return "translateY(0%)";
      return "translateY(-100%)";
    case "panel-3-out":
      return "translateY(-100%)";
    case "done":
      if (panel === 3) return "translateY(0%)";
      return "translateY(-100%)";
    default:
      return "translateY(100%)";
  }
}

type CinematicIntroProps = {
  onComplete?: () => void;
};

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>("panel-1-in");
  const [showGreeting, setShowGreeting] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [showClosing, setShowClosing] = useState(false);
  const [showPortrait, setShowPortrait] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [portraitOpacity, setPortraitOpacity] = useState(1);
  const runId = useRef(0);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setPhase("done");
      setShowGreeting(true);
      setShowStatement(true);
      setShowClosing(true);
      setShowPortrait(true);
      setShowClients(true);
      return;
    }

    const currentRun = ++runId.current;

    async function runIntro() {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      setPhase("panel-1-in");
      setShowGreeting(false);
      setShowStatement(false);
      setShowClosing(false);
      setShowPortrait(false);
      setShowClients(false);
      setPortraitOpacity(1);

      await wait(100);
      if (runId.current !== currentRun) return;

      setShowPortrait(true);
      setShowGreeting(true);

      await wait(letterAnimationMs(homeCopy.greeting, 34, 1500));
      if (runId.current !== currentRun) return;

      setPortraitOpacity(0);
      setShowStatement(true);
      setPhase("panel-1-out");
      await wait(380);
      if (runId.current !== currentRun) return;

      setPhase("panel-2-in");
      await wait(letterAnimationMs(homeCopy.statement, 28, 400));
      if (runId.current !== currentRun) return;

      setShowClients(true);
      await wait(2200);
      if (runId.current !== currentRun) return;

      setPhase("panel-2-out");
      setShowClients(false);
      setShowClosing(true);
      await wait(380);
      if (runId.current !== currentRun) return;

      setPhase("panel-3-in");
      await wait(letterAnimationMs(
        closingLines.flat().map((s) => s.text).join(""),
        24,
        1500,
      ));
      if (runId.current !== currentRun) return;

      setPhase("done");
    }

    void runIntro();

    return () => {
      runId.current += 1;
    };
  }, []);

  useLayoutEffect(() => {
    if (phase !== "done") return;

    document
      .getElementById("home-intro-closing")
      ?.scrollIntoView({ behavior: "auto", block: "start" });

    onCompleteRef.current?.();
  }, [phase]);

  if (phase === "done") {
    return (
      <div id="home-intro" className="w-full">
        <IntroScrollSection id="home-intro-greeting" align="center">
          <div
            className={cn(
              "relative min-h-screen w-full",
              layoutClasses.homeSectionInner,
            )}
          >
            <div className={cn("flex min-h-screen items-center", spacingClasses.introGreetingPr)}>
              <AnimatedLetters
                text={homeCopy.greeting}
                show
                charDelay={34}
                singleLine
                className={displayTextClass}
              />
            </div>
            <PortraitImage visible opacity={1} />
          </div>
        </IntroScrollSection>

        <IntroScrollSection id="home-intro-statement" align="start">
          <div
            className={cn(
              "flex w-full flex-col",
              layoutClasses.homeSectionInner,
              spacingClasses.introStatementPt,
            )}
          >
            <StatementText show charDelay={28} />
            <ClientGrid show className={spacingClasses.introClientMt} />
          </div>
        </IntroScrollSection>

        <IntroScrollSection id="home-intro-closing" align="center">
          <div className={cn("w-full", layoutClasses.homeSectionInner)}>
            <ClosingText show />
          </div>
        </IntroScrollSection>
      </div>
    );
  }

  return (
    <div id="home-intro" className="relative h-screen w-full overflow-hidden">
      <IntroPanel phase={phase} panel={1}>
        <div className={cn("relative h-full w-full", layoutClasses.homeSectionInner)}>
          <div className={cn("flex h-full items-center", spacingClasses.introGreetingPr)}>
            <AnimatedLetters
              text={homeCopy.greeting}
              show={showGreeting}
              charDelay={34}
              singleLine
              className={displayTextClass}
            />
          </div>
          <PortraitImage visible={showPortrait} opacity={portraitOpacity} />
        </div>
      </IntroPanel>

      <IntroPanel phase={phase} panel={2} align="start">
        <div
          className={cn(
            "flex h-full w-full flex-col overflow-hidden",
            layoutClasses.homeSectionInner,
            spacingClasses.introStatementPt,
          )}
        >
          <StatementText show={showStatement} charDelay={28} />
          <ClientGrid
            show={showClients && phase === "panel-2-in"}
            className={spacingClasses.introClientMt}
          />
        </div>
      </IntroPanel>

      <IntroPanel phase={phase} panel={3}>
        <div className={cn("w-full", layoutClasses.homeSectionInner)}>
          <ClosingText show={showClosing} />
        </div>
      </IntroPanel>
    </div>
  );
}

function IntroScrollSection({
  id,
  children,
  align = "center",
}: {
  id?: string;
  children: React.ReactNode;
  align?: "center" | "start";
}) {
  return (
    <section
      id={id}
      className={cn(
        "flex min-h-screen w-full",
        align === "start" ? "items-start" : "items-center",
      )}
    >
      {children}
    </section>
  );
}

function IntroPanel({
  children,
  phase,
  panel,
  align = "center",
}: {
  children: React.ReactNode;
  phase: IntroPhase;
  panel: 1 | 2 | 3;
  align?: "center" | "start";
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex overflow-hidden transition-transform",
        motionClasses.panel,
        motionClasses.easePanel,
        align === "start" ? "items-start" : "items-center",
      )}
      style={{ transform: panelTransform(phase, panel) }}
    >
      {children}
    </div>
  );
}
