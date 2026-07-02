import type { StructuredCaseStudy } from "@/lib/case-study";

const img = (file: string) => `/images/unique/${file}`;
const tour = (file: string) => `/images/unique/tour/${file}`;

export const uniqueCaseStudy: StructuredCaseStudy = {
  slug: "unique",
  tag: "UX Design · Design System",
  title:
    "Bringing clarity and consistency to an AI platform built for regulated industries.",
  subtitle:
    "UX design and design system for Unique.AI — an agentic AI platform serving private banks and wealth managers.",
  heroImage: img("unique-hero-4.jpg"),
  heroImageFocus: "center",
  meta: [
    { label: "Client", value: "Unique.AI" },
    { label: "Role", value: "UX Lead" },
    { label: "Scope", value: "UX Design · Design System · Agentic Workflows" },
    { label: "Industry", value: "Fintech · AI · Wealth Management" },
  ],
  blocks: [
    {
      type: "stats",
      items: [
        {
          target: 53,
          prefix: "$",
          suffix: "M",
          label: "Raised in total funding including a $30M Series A",
        },
        {
          target: 40,
          suffix: "+",
          label:
            "Financial services clients including leading international private banks",
        },
        {
          target: 2.3,
          prefix: "$",
          suffix: "T",
          label: "In assets under management across their client base",
        },
      ],
    },
    {
      type: "chapter",
      label: "The challenge",
      headline: "A product moving fast — and ready for the next level.",
      paragraphs: [
        "Unique.AI had achieved strong early traction — an agentic AI platform for compliance-driven industries with serious enterprise clients already on board. The design needed to match the ambition of the product: more consistent, more scalable, and easier to evolve as the platform grew.",
        "I came in to cover for the UX lead during maternity leave, stepping into a live product with real enterprise clients and a team that wasn't slowing down. The goal was to raise the bar without disrupting momentum.",
      ],
    },
    {
      type: "typo",
      before: "Real clients. Real ",
      highlight: "pressure.",
      after: " The design had to catch up without slowing anything down.",
    },
    {
      type: "chapter",
      label: "Approach",
      headline: "Audit. Design. Integrate.",
      paragraphs: [
        "I quickly assessed what existed, selected an appropriate component library as the foundation, and extended it to fit Unique's visual language and the demands of a regulated financial context. The resulting design system gave the team a shared language — tokens, components, and guidelines that worked in both Figma and production.",
        "With the system in place I redesigned the core surfaces, testing larger changes with users before they went into development to make sure improvements landed as intended.",
      ],
    },
    {
      type: "image",
      src: img("unique-design-system-dark.jpg"),
      alt: "Unique.AI design system — theme tokens, component library, and responsive behaviour built on shadcn/ui and Tailwind",
      caption:
        "Unique.AI — design system: tokens, components, and usage guidelines",
      fit: "contain",
      inset: "loose",
      width: 1600,
      height: 1053,
    },
    {
      type: "deliverable",
      label: "Chat interface",
      title: "The core experience, made coherent.",
      titleLayout: "right",
      body: "The AI chat interface is where most users spend most of their time. I redesigned it to improve information hierarchy, response formatting, source citation, and legibility. I also made key screens fully responsive for mobile — something the platform previously lacked — and simplified the white-label system so clients could control the most important brand elements without changes that would impede usability.",
    },
    {
      type: "video",
      src: img("unique-chat-walkthrough.mp4"),
      caption: "Unique.AI — chat interface walkthrough",
    },
    {
      type: "deliverable",
      label: "Knowledge base",
      title: "Making the data behind the AI manageable.",
      titleLayout: "right",
      body: "Admins and end users need to upload, organise, and control the documents and data sources available to the AI agent. I redesigned the knowledge base interface to make upload, navigation, and organisation intuitive — with consistency across desktop and mobile and a clear mental model for how the system uses the data it has access to.",
    },
    {
      type: "image",
      src: img("unique-knowledge-base.jpg"),
      alt: "Unique.AI knowledge base — folder structure, ingestion status, and file management across desktop and mobile",
      caption:
        "Unique.AI — knowledge base: folder structure, ingestion status, and file management",
      fit: "contain",
      inset: "loose",
      width: 1600,
      height: 538,
    },
    {
      type: "deliverable",
      label: "Agentic workflows",
      title: "Guiding complex, regulated decisions.",
      titleLayout: "right",
      body: "One of Unique's most distinctive products is the agentic table — designed to assist with KYC (Know Your Customer) workflows for private banks, helping analysts review source-of-wealth documentation with AI guidance. I improved the existing experience with better affordances and a redesigned UI that guided users through their process while significantly reducing cognitive load.",
    },
    {
      type: "slideshow",
      brandline: "Unique.AI — source of wealth assessment",
      slides: [
        {
          src: tour("unique-sow-01.jpg"),
          alt: "Source of Wealth list view — 358 clients, filterable by status with row-level actions",
          label: "List view",
        },
        {
          src: tour("unique-sow-02.jpg"),
          alt: "Assessment start — SoW Quality Index with all actions pending",
          label: "Assessment start",
        },
        {
          src: tour("unique-sow-03.jpg"),
          alt: "AI-assisted review — surfacing the top three SoW assessments needing attention",
          label: "AI-assisted",
        },
        {
          src: tour("unique-sow-04.jpg"),
          alt: "Under review — 50% coverage with gaps and conflicts flagged in the dossier",
          label: "Under review",
        },
        {
          src: tour("unique-sow-05.jpg"),
          alt: "75% complete — approve, return for revision, or escalate",
          label: "Decision",
        },
        {
          src: tour("unique-sow-06.jpg"),
          alt: "Approved — 100% coverage, SoW signed off",
          label: "Approved",
        },
      ],
    },
    {
      type: "chapter",
      label: "Outcome",
      headline: "The platform shipped better — and faster.",
      headlineLayout: "right",
      paragraphs: [
        "Design system adopted across the full product — tokens, components, and guidelines used by both design and engineering.",
        "Faster feature delivery — new surfaces designed and built with significantly less back-and-forth.",
        "Key UX changes validated through user testing before going into production.",
        "Design and development parity established for the first time across the platform.",
      ],
    },
  ],
  nextProject: {
    title: "Everskin — end-to-end customer and practitioner experience",
    href: "/work/everskin",
  },
};
