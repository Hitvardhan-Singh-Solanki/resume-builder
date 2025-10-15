/**
 * Typography Design Tokens
 * Professional typography system using Inter font
 */

export const typography = {
  // Font Family
  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "Consolas", "monospace"],
  },

  // Font Sizes (2 sizes only for minimalism)
  fontSize: {
    base: {
      size: "16px",
      lineHeight: "24px", // 1.5
      letterSpacing: "-0.01em",
    },
    lg: {
      size: "18px",
      lineHeight: "28px", // 1.56
      letterSpacing: "-0.02em",
    },
  },

  // Font Weights (4 weights)
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Typography Scale
  scale: {
    h1: {
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    body: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: "-0.01em",
    },
    caption: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: "-0.01em",
      opacity: 0.75,
    },
  },
} as const;

export type TypographyScale = keyof typeof typography.scale;
