/**
 * Design System
 * Professional, minimalistic design system with Inter font and green color scheme
 */

export * from "./tokens/typography";
export * from "./tokens/colors";
export * from "./tokens/spacing";
export * from "./tokens/shadows";
export * from "./tokens/radius";

// Re-export all tokens for easy access
import { typography } from "./tokens/typography";
import { colors } from "./tokens/colors";
import { spacing, semanticSpacing } from "./tokens/spacing";
import { shadows, semanticShadows } from "./tokens/shadows";
import { radius, semanticRadius } from "./tokens/radius";

export const designTokens = {
  typography,
  colors,
  spacing,
  semanticSpacing,
  shadows,
  semanticShadows,
  radius,
  semanticRadius,
} as const;

export type DesignTokens = typeof designTokens;
