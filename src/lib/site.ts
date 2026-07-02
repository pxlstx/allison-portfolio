export const site = {
  name: "Allison Sarno",
  title: "Allison Sarno — Product & Design",
  description:
    "Product designer and builder. Case studies, writing, and a place to ask questions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  writingUrl:
    process.env.NEXT_PUBLIC_WRITING_URL ?? "https://www.wix.com",
  email: "hello@allisonsarno.com",
  linkedIn: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About me", href: "/about" },
  { label: "Ask me", href: "/ask" },
] as const;

export const clients = [
  { name: "Unique.AI", quirky: false },
  { name: "Expeerly", quirky: false },
  { name: "Ava AG", quirky: true },
  { name: "TomoDomo", quirky: false },
  { name: "Everskin", quirky: false },
  { name: "Sapient Nitro", quirky: false },
  { name: "Alfred", quirky: false },
  { name: "Chemie AG", quirky: false },
  { name: "Besso", quirky: false },
  { name: "PeakProduct", quirky: false },
  { name: "MPREIS", quirky: false },
  { name: "Schulthess", quirky: false },
] as const;

export const homeCopy = {
  greeting: "Hi, I'm Allison.",
  statement: "I create thoughtful design for ambitious companies.",
  statementSegments: [
    { text: "I create" },
    { text: "thoughtful design", accent: true },
    { text: "for ambitious companies." },
  ],
} as const;

export const homeMedia = {
  introVideo: "/video/ZoomCall.mp4",
} as const;
