import type { StructuredCaseStudy } from "@/lib/case-study";

const img = (file: string) => `/images/everskin/${file}`;

export const everskinCaseStudy: StructuredCaseStudy = {
  slug: "everskin",
  tag: "Product & UX Design · 2024",
  title: "A digitally empowered journey to your best skin.",
  titleLines: ["A digitally empowered", "journey to your best skin."],
  subtitle:
    "End-to-end experience design for a science-backed aesthetic dermatology clinic in Zurich.",
  heroImage: img("everskin-hero.webp"),
  meta: [
    { label: "Client", value: "Everskin" },
    { label: "Role", value: "Lead Product & UX Designer" },
    { label: "Scope", value: "Website · iOS App · iPad App" },
    { label: "Industry", value: "Aesthetics · Healthtech" },
  ],
  blocks: [
    {
      type: "chapter",
      label: "The challenge",
      headline:
        "Science-backed skincare needed a digital experience worthy of its ambition.",
      paragraphs: [
        "Everskin is a new kind of aesthetic dermatology clinic in Zurich — one that only offers science-backed, clinically proven treatments. At the core of their offering is a state-of-the-art skin analysis using advanced technology. But a one-time analysis wasn't enough.",
        "To truly fulfill their mission, they needed to empower clients to understand and track changes in their skin over time — across both in-clinic visits and at-home care. My challenge was to design a seamless, cohesive journey from the moment someone discovers everskin online to the practitioner iPad in the treatment room.",
      ],
    },
    {
      type: "typo",
      before:
        "A one-time analysis wasn't enough. To truly fulfill their mission, Everskin needed to empower clients to understand their skin — and track its ",
      highlight: "transformation",
      after: "over time.",
    },
    {
      type: "image",
      src: img("67a37ec66e84803011158cb0_18.png"),
      alt: "Everskin clinic skin analysis in session",
      variant: "short",
    },
    {
      type: "chapter",
      label: "Approach",
      headline:
        "One visual language. Three surfaces. A complete client journey.",
      paragraphs: [
        "Everskin had already partnered with a branding agency to establish their visual direction — earth tones, elegant understated typography, a blend of science and skin. My role was to translate that identity into a functional digital system across three distinct surfaces: a conversion-focused website, a client iPhone app, and a practitioner iPad app.",
        "I began with the website, defining the design system as I went — typography scale, component library, photography treatment — so that by the time I moved to the apps, every decision had a clear foundation to build from.",
      ],
    },
    {
      type: "deliverable",
      label: "The website",
      body: "The goal was to make science feel approachable. A full-screen imagery-led design that communicates clinical credibility and moves people toward booking — without ever feeling cold or clinical.",
    },
    {
      type: "image",
      src: img("website.png"),
      alt: "Everskin.ch homepage",
      caption: "Everskin.ch — homepage",
      variant: "tall",
      fit: "contain",
      width: 3515,
      height: 3321,
    },
    {
      type: "deliverable",
      label: "The client app",
      body: "The client app turns a one-time clinic visit into an ongoing relationship. Clients can track their skin score over time, understand what's changing and why, and stay connected to their treatment plan between appointments.",
    },
    {
      type: "image",
      src: img("everskin-app.png"),
      alt: "Everskin iOS app screens",
      caption:
        "Everskin iOS app — skin score, analysis, and treatment recommendations",
      variant: "app-wide",
      fit: "contain",
      width: 3517,
      height: 5610,
    },
    {
      type: "deliverable",
      label: "The practitioner app",
      body: "Designed for use in the treatment room, the practitioner app gives medical staff everything they need to guide a client through their skin analysis — clearly, confidently, and without the session feeling like a data entry exercise.",
    },
    {
      type: "image",
      src: img("everskin-practitioner-app.png"),
      alt: "Everskin practitioner iPad app",
      caption:
        "Everskin practitioner iPad app — client overview and treatment recommendations",
      variant: "app-wide",
      fit: "contain",
      width: 4380,
      height: 3372,
    },
    {
      type: "chapter",
      label: "Outcome",
      headline: "A 360° digital experience that sets everskin apart.",
      paragraphs: [
        "Everskin launched with a highly branded, polished website that encapsulates their mission and science-backed approach. The practitioner and consumer apps complete the picture — offering a 360-degree journey that empowers clients and sets everskin apart from every trend-driven clinic they compete with.",
      ],
    },
  ],
  nextProject: {
    title: "Expeerly — video review platform and design system",
    href: "/work",
  },
};
