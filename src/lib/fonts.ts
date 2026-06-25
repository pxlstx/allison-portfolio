export const typekit = {
  url: "https://use.typekit.net/deu5fpf.css",
  preconnect: ["https://use.typekit.net", "https://p.typekit.net"],
} as const;

export const fontFamily = {
  sans: '"neue-haas-grotesk-text", sans-serif',
  display: '"neue-haas-grotesk-display", sans-serif',
} as const;

/** Weights published in the deu5fpf kit — use these with the matching family. */
export const fontWeights = {
  display: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  sans: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
} as const;
