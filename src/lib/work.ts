export type WorkCategory = "product" | "brand";

export type WorkFilter = "all" | WorkCategory;

export type GridSpan = {
  colSpan: 4 | 6 | 12;
  aspect: "16/10" | "4/3" | "21/9";
  mobileColSpan: 6 | 12;
};

export type WorkProject = {
  id: string;
  client: string;
  title: string;
  sentence: string;
  year: string;
  color: string;
  category: WorkCategory;
  imageSeed: string;
  imageSrc?: string;
  imageFocus?: "center" | "top" | "bottom" | "right-top";
  imageLogoSrc?: string;
  imageLogoSize?: "wide" | "compact";
  nda?: boolean;
  ndaMsg?: string;
  href?: string;
};

export const productProjects: WorkProject[] = [
  {
    id: "p1",
    client: "Unique.AI",
    title: "UX design for an AI-enabled compliance platform for private banks",
    sentence:
      "Password protected — get in touch to discuss the work.",
    year: "2022–23",
    color: "#1A1816",
    category: "product",
    imageSeed: "10",
    imageSrc: "/images/unique/unique-work-hero.jpg",
    imageLogoSrc: "/images/unique/unique-logo-white.png",
    imageLogoSize: "compact",
    href: "/work/unique",
    nda: true,
    ndaMsg: "Password protected — request access",
  },
  {
    id: "p4",
    client: "TomoDomo",
    title:
      "Internal room management system and consumer-facing booking flow, designed end to end",
    sentence:
      "Internal room management and a consumer-facing booking flow, designed end to end.",
    year: "2023",
    color: "#161818",
    category: "product",
    imageSeed: "40",
    imageSrc: "/images/tomodomo/tomodomo-hero.png",
    imageFocus: "right-top",
    href: "/work/tomodomo",
  },
  {
    id: "p2",
    client: "Expeerly",
    title:
      "Full platform redesign, design system, and marketing site for a Swiss video review platform",
    sentence:
      "A full platform redesign, design system, and marketing site — built partly in Cursor.",
    year: "2024",
    color: "#18161A",
    category: "product",
    imageSeed: "20",
    href: "/work/expeerly",
    imageSrc: "/images/expeerly/expeerly-hero-brand.png",
  },
  {
    id: "p3",
    client: "Everskin",
    title:
      "End-to-end experience design across website, client app, and practitioner iPad app",
    sentence:
      "A seamless experience from initial engagement to in-clinic and at-home care.",
    year: "2024",
    color: "#161A18",
    category: "product",
    imageSeed: "30",
    imageSrc: "/images/everskin/everskin-hero.webp",
    imageLogoSrc: "/images/everskin/everskin-logo-white.png",
    href: "/work/everskin",
  },
  {
    id: "p5",
    client: "Ava",
    title:
      "Mobile product design, brand identity, and creative leadership for a funded Swiss femtech startup",
    sentence:
      "Brand, product, and marketing design for a funded Swiss femtech startup.",
    year: "2016–20",
    color: "#181A16",
    category: "product",
    imageSeed: "50",
    imageSrc: "/images/ava/ava-hero-bracelet-app.jpg",
    href: "/work/ava",
  },
];

export const brandProjects: WorkProject[] = [
  {
    id: "b4",
    client: "Kumi",
    title:
      "Premium visual identity and brand system for a South African real estate company",
    sentence:
      "Visual identity and brand system positioned for a competitive market.",
    year: "2022",
    color: "#1C1618",
    category: "brand",
    imageSeed: "90",
    href: "/work/kumi",
    imageSrc: "/images/kumi/kumi-mindful-luxury.jpg",
  },
];

export const allProjectsOrder: WorkProject[] = [
  productProjects[0], // Unique.AI
  productProjects[1], // TomoDomo
  productProjects[3], // Everskin
  productProjects[4], // Ava
  brandProjects[0], // Kumi
];

export const allGridSpans: GridSpan[] = [
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
];

export const productGridSpans: GridSpan[] = [
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
];

export const brandGridSpans: GridSpan[] = [
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
];

export const workFilters: { id: WorkFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product & UX" },
  { id: "brand", label: "Brand & Visual" },
];

export function getProjectsForFilter(filter: WorkFilter): WorkProject[] {
  if (filter === "product") return productProjects;
  if (filter === "brand") return brandProjects;
  return allProjectsOrder;
}

export function getSpansForFilter(filter: WorkFilter): GridSpan[] {
  if (filter === "product") return productGridSpans;
  if (filter === "brand") return brandGridSpans;
  return allGridSpans;
}
