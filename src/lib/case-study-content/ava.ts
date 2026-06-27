import type { StructuredCaseStudy } from "@/lib/case-study";

const img = (file: string) => `/images/ava/${file}`;

export const avaCaseStudy: StructuredCaseStudy = {
  slug: "ava",
  tag: "Product Design & Creative Direction",
  title: "Technology in service of something deeply human.",
  subtitle:
    "Design leadership across product, brand, and marketing for Ava — a fertility tracking wearable based in Zurich.",
  heroImage: img("ava-hero.jpg"),
  meta: [
    { label: "Client", value: "Ava Women" },
    { label: "Role", value: "Design Lead → Creative Director" },
    { label: "Scope", value: "Mobile App · Brand · Product · Marketing" },
    { label: "Years", value: "2016–2020" },
    { label: "Industry", value: "Femtech · Digital Health" },
  ],
  blocks: [
    {
      type: "stats",
      items: [
        {
          target: 42,
          prefix: "$",
          suffix: "M",
          label: "Raised in total funding across multiple rounds",
        },
        {
          target: 10,
          suffix: "K",
          label: "Pregnancies among users since launch in 2016",
        },
        {
          target: 9,
          label: "Physiological parameters tracked nightly by the bracelet",
        },
      ],
    },
    {
      type: "chapter",
      label: "The challenge",
      headline: "Making complex biometric data feel human.",
      paragraphs: [
        "Ava was building something genuinely new — a wearable bracelet that tracked nine physiological parameters overnight to predict a woman's fertile window using AI. The science was rigorous. The data was rich. But the experience of understanding it needed to feel accessible, not clinical.",
        "My challenge was to take an early-stage app and build it into a scalable, coherent product platform — one that could grow with the company and hold up to the expectations of a deeply invested user community.",
      ],
    },
    {
      type: "chapter",
      label: "Approach",
      headline: "Science-backed. Human first.",
      paragraphs: [
        "Fertility is deeply personal. The product needed to be rigorously grounded in science while never making a user feel like something was wrong with them — a fine line that shaped every design decision.",
        "We engaged constantly with users through testing and community feedback, listening to their struggles and what they actually needed. The goal was to demystify fertility, help women understand their bodies, and support them throughout their journey.",
      ],
    },
    {
      type: "typo",
      before: "The stakes were ",
      highlight: "real.",
      after:
        "Women were using this app to make major decisions about their reproductive health.",
    },
    {
      type: "image",
      src: img("ava-lifestyle.png"),
      alt: "Ava wearable bracelet in use",
      variant: "short",
    },
    {
      type: "deliverable",
      label: "The app",
      title: "Turning biometric data into something a woman could act on.",
      titleLayout: "right",
      body: "I evolved the app into a coherent, scalable platform — presenting complex biometric data simply enough to fit into a morning routine. Every major decision was validated with users through testing and post-launch feedback.",
    },
    {
      type: "image",
      src: img("ava-app.png"),
      alt: "Ava fertility app screens",
      caption:
        "Ava fertility app — dashboard, calendar, health charts, cycle history, and pregnancy mode",
      fit: "contain",
      inset: "loose",
      width: 2780,
      height: 3540,
    },
    {
      type: "deliverable",
      label: "Brand refresh",
      title: "Bringing consistency and maturity to the Ava identity.",
      titleLayout: "right",
      body: "With the launch of Ava 2.0, I led a visual refresh of the entire brand — new photography direction, streamlined typography, and a refined colour palette implemented across the website, app, packaging, and advertising. Everything needed to feel like one coherent brand.",
    },
    {
      type: "image",
      src: img("ava-brand.jpg"),
      alt: "Ava brand campaign materials",
      caption:
        "Ava brand campaign — lifestyle photography, in-app content, and marketing materials",
      fit: "cover",
      width: 2300,
      height: 2480,
    },
    {
      type: "deliverable",
      label: "Ava 2.0",
      title: "A complete reimagining of the product — inside and out.",
      titleLayout: "right",
      body: "I led all design aspects of the Ava 2.0 hardware — from sourcing industrial design firms through to reviewing materials, concepts, and final packaging. The result needed to feel premium and considered, worthy of the trust women were placing in it.",
    },
    {
      type: "image",
      src: img("ava-packaging.png"),
      alt: "Ava 2.0 product packaging",
      caption: "Ava 2.0 — packaging",
      variant: "short",
      fit: "cover",
      width: 3572,
      height: 2526,
    },
    {
      type: "deliverable",
      label: "Ava Prevent",
      title: "From fertility tracker to digital contraception.",
      titleLayout: "right",
      body: "A Class II medical device requiring rigorous Human Factors Engineering and the highest usability standards. Women sync overnight data and wake up to a clear green or red screen. I led UX design while simultaneously modernising the existing Ava app design language — keeping both products clearly related.",
    },
    {
      type: "image",
      src: img("ava-prevent.png"),
      alt: "Ava Prevent digital contraception app",
      caption: "Ava Prevent — digital contraception app, Class II medical device",
      fit: "contain",
      inset: "loose",
      width: 3000,
      height: 3844,
    },
    {
      type: "testimonial",
      quote:
        "Allison made an extraordinary impact at Ava, originally joining as a product designer and quickly taking on the role of creative director — leading our design team across product and marketing. Her exceptional design skills and strategic mindset elevated every aspect of our brand and user experience. Allison made it her mission to truly understand and empathise with our users and made sure that our product fulfilled their needs in every way.",
      attribution:
        "Philipp Tholen — Co-founder & VP of Product & Technology, Ava Women",
    },
  ],
  nextProject: {
    title: "Expeerly — video review platform and design system",
    href: "/work",
  },
};
