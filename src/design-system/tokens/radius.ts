/**
 * Border Radius Design Tokens
 * Minimalistic radius system for consistent rounded corners
 */

export const radius = {
  none: "0px",
  sm: "2px",
  md: "4px",
  lg: "6px",
  xl: "8px",
  "2xl": "12px",
  "3xl": "16px",
  full: "9999px",
} as const;

// Semantic radius usage
export const semanticRadius = {
  // Component radius
  button: {
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
  },

  // Card radius
  card: {
    default: radius.lg,
    compact: radius.md,
  },

  // Input radius
  input: {
    default: radius.md,
    sm: radius.sm,
  },

  // Avatar radius
  avatar: {
    default: radius.md,
    rounded: radius.full,
  },

  // Badge radius
  badge: {
    default: radius.full,
    sm: radius.sm,
  },
} as const;

export type RadiusKey = keyof typeof radius;
export type SemanticRadiusKey = keyof typeof semanticRadius.button;
