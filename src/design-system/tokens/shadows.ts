/**
 * Shadow Design Tokens
 * Minimalistic shadow system for depth and hierarchy
 */

export const shadows = {
  // Elevation shadows
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",

  // Inner shadows
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",

  // Focus shadows
  focus: "0 0 0 3px rgb(34 197 94 / 0.1)", // Green focus ring
  "focus-error": "0 0 0 3px rgb(239 68 68 / 0.1)", // Red focus ring

  // None
  none: "none",
} as const;

// Semantic shadow usage
export const semanticShadows = {
  // Component shadows
  card: {
    default: shadows.sm,
    hover: shadows.md,
    active: shadows.xs,
  },

  // Button shadows
  button: {
    default: shadows.none,
    hover: shadows.sm,
    active: shadows.inner,
  },

  // Modal shadows
  modal: shadows.xl,

  // Dropdown shadows
  dropdown: shadows.lg,
} as const;

export type ShadowKey = keyof typeof shadows;
export type SemanticShadowKey = keyof typeof semanticShadows.card;
