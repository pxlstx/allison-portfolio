export type WorkCategory = "product" | "brand";

export type WorkFilter = "all" | WorkCategory;

export type GridSpan = {
  colSpan: 4 | 6;
  aspect: "16/10" | "4/3";
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
    nda: true,
    ndaMsg: "Password protected — request access",
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
    href: "/work/everskin",
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
  },
  {
    id: "p5",
    client: "Ava",
    title:
      "Mobile product design, brand identity, and creative leadership for a funded Swiss femtech startup",
    sentence:
      "Brand, product, and marketing design for a funded Swiss femtech startup.",
    year: "2019–21",
    color: "#181A16",
    category: "product",
    imageSeed: "50",
  },
];

export const brandProjects: WorkProject[] = [
  {
    id: "b1",
    client: "Expeerly",
    title:
      "Visual identity, typography, and brand guidelines for a Swiss video review platform",
    sentence:
      "Visual identity, typography, colour system, and brand guidelines.",
    year: "2024",
    color: "#1C1816",
    category: "brand",
    imageSeed: "60",
  },
  {
    id: "b2",
    client: "TomoDomo",
    title:
      "Logo, visual language, and brand system for a Swiss coworking and space booking platform",
    sentence:
      "Logo, identity, and visual language for a Swiss space-booking platform.",
    year: "2023",
    color: "#16181C",
    category: "brand",
    imageSeed: "70",
  },
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
  },
  {
    id: "b5",
    client: "Peak Product",
    title:
      "Brand identity and positioning for a senior product leadership coaching practice",
    sentence:
      "Clean, confident positioning for a senior professional audience.",
    year: "2022",
    color: "#16181A",
    category: "brand",
    imageSeed: "100",
  },
];

export const allProjectsOrder: WorkProject[] = [
  productProjects[0],
  productProjects[1],
  productProjects[2],
  brandProjects[0],
  brandProjects[2],
  productProjects[3],
  brandProjects[1],
  productProjects[4],
  brandProjects[3],
];

export const allGridSpans: GridSpan[] = [
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 12 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 12 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 12 },
];

export const productGridSpans: GridSpan[] = [
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
];

export const brandGridSpans: GridSpan[] = [
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 4, aspect: "4/3", mobileColSpan: 6 },
  { colSpan: 6, aspect: "16/10", mobileColSpan: 12 },
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
