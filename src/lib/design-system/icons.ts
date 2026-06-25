export const iconSizes = {
  sm: 20,
  md: 24,
  lg: 32,
} as const;

export type IconSize = keyof typeof iconSizes;

/** Curated Material Symbols used across the portfolio. */
export const iconExamples = [
  { name: "arrow_forward", label: "Arrow forward", usage: "Chat submit, CTAs, navigation" },
  { name: "menu", label: "Menu", usage: "Site navigation" },
  { name: "mail", label: "Mail", usage: "Email links" },
  { name: "lock", label: "Lock", usage: "NDA / private work" },
  { name: "open_in_new", label: "Open in new", usage: "External links" },
] as const;

export type IconName = (typeof iconExamples)[number]["name"];
