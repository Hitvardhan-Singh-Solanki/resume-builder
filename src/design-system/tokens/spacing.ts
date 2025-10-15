/**
 * Spacing Design Tokens
 * 4-point spacing system for consistent layouts
 */

export const spacing = {
  // 4-point base unit system
  px: "1px", // 1px
  0.5: "2px", // 0.5 * 4
  1: "4px", // 1 * 4
  1.5: "6px", // 1.5 * 4
  2: "8px", // 2 * 4
  2.5: "10px", // 2.5 * 4
  3: "12px", // 3 * 4
  3.5: "14px", // 3.5 * 4
  4: "16px", // 4 * 4
  5: "20px", // 5 * 4
  6: "24px", // 6 * 4
  7: "28px", // 7 * 4
  8: "32px", // 8 * 4
  9: "36px", // 9 * 4
  10: "40px", // 10 * 4
  11: "44px", // 11 * 4
  12: "48px", // 12 * 4
  14: "56px", // 14 * 4
  16: "64px", // 16 * 4
  20: "80px", // 20 * 4
  24: "96px", // 24 * 4
  28: "112px", // 28 * 4
  32: "128px", // 32 * 4
  36: "144px", // 36 * 4
  40: "160px", // 40 * 4
  44: "176px", // 44 * 4
  48: "192px", // 48 * 4
  52: "208px", // 52 * 4
  56: "224px", // 56 * 4
  60: "240px", // 60 * 4
  64: "256px", // 64 * 4
  72: "288px", // 72 * 4
  80: "320px", // 80 * 4
  96: "384px", // 96 * 4
} as const;

// Semantic spacing for common use cases
export const semanticSpacing = {
  // Component spacing
  component: {
    xs: spacing[1], // 4px
    sm: spacing[2], // 8px
    md: spacing[3], // 12px
    lg: spacing[4], // 16px
    xl: spacing[6], // 24px
    "2xl": spacing[8], // 32px
  },

  // Layout spacing
  layout: {
    xs: spacing[4], // 16px
    sm: spacing[6], // 24px
    md: spacing[8], // 32px
    lg: spacing[12], // 48px
    xl: spacing[16], // 64px
    "2xl": spacing[24], // 96px
  },

  // Text spacing
  text: {
    tight: spacing[1], // 4px
    normal: spacing[2], // 8px
    relaxed: spacing[3], // 12px
    loose: spacing[4], // 16px
  },
} as const;

export type SpacingKey = keyof typeof spacing;
export type SemanticSpacingKey = keyof typeof semanticSpacing.component;
