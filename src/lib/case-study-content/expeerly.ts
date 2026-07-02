import type { StructuredCaseStudy } from "@/lib/case-study";

const img = (file: string) => `/images/expeerly/${file}`;

export const expeerlyCaseStudy: StructuredCaseStudy = {
  slug: "expeerly",
  tag: "Brand · Design System · Platform",
  title: "Designing for the honest review.",
  titleLines: ["Designing for the", "honest review."],
  subtitle:
    "Brand identity, design system, and consumer platform for a Swiss video review startup.",
  heroImage: img("expeerly-hero-brand.webp"),
  heroImageFocus: "center",
  meta: [
    { label: "Client", value: "Expeerly" },
    { label: "Role", value: "Brand designer, Product designer" },
    {
      label: "Scope",
      value: "Brand · Design System · Platform · Website",
    },
    { label: "Location", value: "Zurich, Switzerland" },
    { label: "Industry", value: "E-commerce · Creator Economy" },
  ],
  blocks: [
    {
      type: "stats",
      items: [
        {
          target: 1,
          suffix: ".35M",
          label: "Shoppers using Expeerly for authentic video reviews",
        },
        {
          target: 40,
          suffix: ".7%",
          label:
            "Higher conversion rate after watching an Expeerly video vs other product videos",
        },
        {
          target: 100,
          suffix: "+",
          label:
            "Brands and marketplaces including Dyson, Sony, Philips, and Puma",
        },
      ],
    },
    {
      type: "chapter",
      label: "The challenge",
      headline: "Authenticity at scale — harder than it sounds.",
      paragraphs: [
        "Expeerly is built on a simple but powerful idea — people make better decisions when they hear from real users, not marketing departments. Their platform connects consumers with authentic video reviews from creators who know their subject and are genuinely motivated to share it.",
        "When I first worked with them they were pre-launch, moving fast, and needed a brand that could speak to retailers, brands, and content creators simultaneously. The challenge was to create something distinctive enough to stand out and human enough to reflect what made Expeerly different.",
      ],
    },
    {
      type: "typo",
      before: "Consumers don't trust ads. They trust ",
      highlight: "people.",
      after: " The design had to reflect that.",
    },
    {
      type: "image",
      src: img("expeerly-community.webp"),
      alt: "Expeerly creator and product network graphic",
      variant: "short",
      fit: "cover",
      width: 3639,
      height: 1620,
    },
    {
      type: "chapter",
      label: "Approach",
      headline: "Start with the brand. Build a system. Design the platform.",
      paragraphs: [
        "I started with a brand workshop to understand Expeerly's positioning and the three distinct audiences they needed to serve — consumers, brands, and creators. The core insight was that the creators are the product. Unlike other review platforms, Expeerly's content comes from people who are genuinely motivated to share their experience, not paid spokespeople. The brand needed to make that distinction visible and feel it at every touchpoint.",
        "Everything was documented in a comprehensive design system in Figma from day one — tokens, components, and usage guidelines — giving Expeerly a solid foundation for launch and all the work that followed. As the product matured I returned to design the full consumer platform, significantly expanding the system to support the complexity of a multi-sided marketplace.",
      ],
    },
    {
      type: "deliverable",
      label: "Brand identity",
      title: "A brand built on voice and community.",
      titleLayout: "right",
      body: "The brand direction centres on the people behind the reviews — honest, well-intentioned creators who share their expertise because they genuinely want to help others make better decisions. Portrait photography of creators in their environment, combined with a vibrant colour palette, creates a design that feels energetic and human — where the emphasis is always on the creator and their unique voice. The logo — two overlapping speech bubbles — represents both community and conversation, and became a recurring graphic device used throughout the entire visual system, from the platform to marketing materials.",
    },
    {
      type: "image",
      src: img("expeerly-brand.webp"),
      alt: "Expeerly brand identity, colour system, and design language",
      caption: "Expeerly — brand identity, colour system, and design language",
      fit: "cover",
      width: 1797,
      height: 1011,
    },
    {
      type: "deliverable",
      label: "Launch",
      title: "From brand to live product — fast.",
      titleLayout: "right",
      body: "Following the brand phase I designed the Expeerly video player, interactive widgets, marketing website, and sales materials for launch. The comprehensive design system made this phase fast and consistent — every component documented and ready to use.",
    },
    {
      type: "image",
      src: img("expeerly-website.webp"),
      alt: "Expeerly marketing website for shoppers, brands, and reviewers",
      caption:
        "Expeerly — marketing website: shopper, brand, and reviewer perspectives",
      variant: "tall",
      fit: "contain",
      width: 16776,
      height: 18930,
    },
    {
      type: "deliverable",
      label: "Consumer platform",
      title: "A platform built around the reviewer.",
      titleLayout: "right",
      body: "I built the design system first — following atomic design principles in Cursor, then exporting into Figma so the team had the option to work in either tool. Tokens, components, and patterns were established before a single page template was designed. Then I built out the key platform templates — homepage, explore, brand landing pages, video and review pages, a campaign application flow, and a reviewer dashboard — refining the system as new patterns emerged. The result was fully developed, production-ready code handed off directly to the engineering team. No pixel-pushing, no back and forth. They could implement it immediately.",
    },
    {
      type: "image",
      src: img("expeerly-platform.webp"),
      alt: "Expeerly consumer platform screens",
      caption:
        "Expeerly — consumer platform: homepage, reviewer dashboard, video page, brand page, and campaign application",
      variant: "tall",
      fit: "contain",
      width: 7974,
      height: 5964,
    },
    {
      type: "testimonial",
      quote:
        "Allison proved to be an invaluable asset in shaping our brand identity and user experience at Expeerly. Her strategic approach, exceptional creativity, and impressive speed in delivery truly sets her apart. The comprehensive design system and documentation she provided was exactly what we needed to establish strong brand recognition and user engagement.",
      attribution: "Lea von Bidder — Founder, Expeerly",
    },
  ],
  nextProject: {
    title: "Everskin — end-to-end customer and practitioner experience",
    href: "/work/everskin",
  },
};
