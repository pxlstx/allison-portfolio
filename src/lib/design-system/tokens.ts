export const colors = {
  ink: "#0e0e0c",
  ink2: "#1a1a17",
  white: "#ffffff",
  w100: "rgb(255 255 255 / 1)",
  w60: "rgb(255 255 255 / 0.60)",
  w30: "rgb(255 255 255 / 0.30)",
  w20: "rgb(255 255 255 / 0.20)",
  w15: "rgb(255 255 255 / 0.15)",
  w08: "rgb(255 255 255 / 0.08)",
  link: "rgb(255 255 255 / 0.40)",
  linkSmall: "rgb(255 255 255 / 0.52)",
  linkMuted: "rgb(255 255 255 / 0.28)",
  linkFaint: "rgb(255 255 255 / 0.22)",
  bdr: "rgb(255 255 255 / 0.07)",
  bdrMid: "rgb(255 255 255 / 0.12)",
  bdrBright: "rgb(255 255 255 / 0.85)",
  bdrInput: "rgb(255 255 255 / 0.30)",
  accent: "#d4622a",
  accentBright: "#ee8340",
  statusOnline: "#4caf72",
  error: "#f87171",
} as const;

export const spacing = {
  pageX: "72px",
  pageXMobile: "28px",
  pageTop: "120px",
  sectionY: "96px",
  sectionYLarge: "120px",
  sectionTypoY: "100px",
  heroPaddingBottom: "72px",
  imageAppPaddingY: "60px",
  paragraphGap: "18px",
  metaCardPaddingY: "18px",
  menuOverlayX: "80px",
  hamburgerGap: "6px",
  hamburgerWidth: "28px",
  footerHairline: "3px",
  underlineOffsetSm: "4px",
  underlineOffsetMd: "6px",
  deliverableLabelCol: "200px",
  gridGap: "48px",
  gridGapLarge: "64px",
  cardPadding: "16px",
  cardImageGap: "16px",
  cardTitleGap: "8px",
  metaGap: "12px",
} as const;

export const layout = {
  maxWidthPage: "1440px",
  maxWidthContent: "1200px",
  maxWidthProse: "720px",
  maxWidthChat: "820px",
  maxWidthChatMin: "min(100%,820px)",
  maxWidthLead: "640px",
  maxWidthDeliverable: "680px",
  maxWidthImage: "1400px",
  radius: "2px",
  radiusBubbleUser: "12px 2px 12px 12px",
  radiusBubbleAssistant: "2px 12px 12px 12px",
} as const;

export const typography = {
  display: {
    className:
      "font-display text-hero font-light leading-[0.95] tracking-display text-white",
  },
  displayHero: {
    className:
      "font-display text-[clamp(44px,7vw,90px)] font-light leading-[1] tracking-display text-white",
  },
  displaySection: {
    className:
      "font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.05] tracking-display",
  },
  displayChapter: {
    className:
      "font-display text-display font-light leading-display tracking-display",
  },
  navChapter: {
    className:
      "font-display text-[clamp(36px,5.5vw,64px)] font-light leading-display tracking-display",
  },
  displayClosing: {
    className:
      "font-display text-[clamp(20px,2.5vw,32px)] font-light leading-[1.35] tracking-display",
  },
  lead: {
    className:
      "font-display text-lead font-light leading-[1.45] tracking-display",
  },
  ctaLink: {
    className:
      "font-display text-[clamp(22px,2.5vw,36px)] font-light tracking-display",
  },
  bodyLarge: {
    className:
      "font-display text-[20px] font-light leading-relaxed tracking-normal text-w-60",
  },
  body: {
    className:
      "font-display text-body font-light leading-body-loose tracking-normal text-w-60",
  },
  bodyMedium: {
    className: "font-display text-[18px] font-light tracking-normal text-w-60",
  },
  bodySmall: {
    className: "font-sans text-sm font-normal leading-[1.65] text-w-60",
  },
  bodySmallSubtle: {
    className: "font-sans text-sm font-normal leading-[1.65] text-w-30",
  },
  itemTitle: {
    className: "font-sans text-body font-medium tracking-normal text-white",
  },
  label: {
    className:
      "font-sans text-label font-medium leading-normal tracking-label uppercase",
  },
  caption: {
    className: "font-sans text-caption font-normal tracking-normal",
  },
  fine: {
    className: "font-sans text-label font-normal leading-[1.6]",
  },
  micro: {
    className: "font-sans text-micro font-medium tracking-[0.06em]",
  },
  navMeta: {
    className: "font-sans text-small font-normal",
  },
  navMetaLight: {
    className: "font-sans text-small font-normal",
  },
  filterTab: {
    className: "font-sans text-[15px] font-normal sm:text-base",
  },
  textLinkSmall: {
    className: "font-sans text-sm font-normal leading-[2.1]",
  },
} as const;

export const motion = {
  fast: "duration-200",
  default: "duration-300",
  medium: "duration-250",
  menu: "duration-350",
  panel: "duration-[380ms]",
  slow: "duration-500",
  ease: "ease-[cubic-bezier(0.22,1,0.36,1)]",
  easePanel: "ease-[cubic-bezier(0.4,0,0.2,1)]",
  easeLetter: "cubic-bezier(0.22, 1, 0.36, 1)",
  zMenu: "z-[998]",
  zMenuButton: "z-[999]",
  zCursor: "z-[9999]",
  zCursorLabel: "z-[9998]",
} as const;

export type ColorToken = keyof typeof colors;
export type TypographyToken = keyof typeof typography;
