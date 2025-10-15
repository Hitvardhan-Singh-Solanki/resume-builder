/**
 * Color Design Tokens
 * Professional green color scheme with minimalistic approach
 */

export const colors = {
  // Primary Green Palette
  primary: {
    50: "#f0fdf4", // Very light green
    100: "#dcfce7", // Light green
    200: "#bbf7d0", // Soft green
    300: "#86efac", // Medium light green
    400: "#4ade80", // Medium green
    500: "#22c55e", // Base green
    600: "#16a34a", // Dark green
    700: "#15803d", // Darker green
    800: "#166534", // Very dark green
    900: "#14532d", // Darkest green
    950: "#052e16", // Almost black green
  },

  // Neutral Grays (minimalistic)
  neutral: {
    50: "#fafafa", // Almost white
    100: "#f5f5f5", // Very light gray
    200: "#e5e5e5", // Light gray
    300: "#d4d4d4", // Medium light gray
    400: "#a3a3a3", // Medium gray
    500: "#737373", // Base gray
    600: "#525252", // Dark gray
    700: "#404040", // Darker gray
    800: "#262626", // Very dark gray
    900: "#171717", // Almost black
    950: "#0a0a0a", // Black
  },

  // Semantic Colors
  semantic: {
    success: "#22c55e", // Green
    warning: "#f59e0b", // Amber
    error: "#ef4444", // Red
    info: "#3b82f6", // Blue
  },

  // Background Colors
  background: {
    light: "#ffffff",
    dark: "#0a0a0a",
    muted: {
      light: "#fafafa",
      dark: "#171717",
    },
  },

  // Text Colors
  text: {
    primary: {
      light: "#171717",
      dark: "#fafafa",
    },
    secondary: {
      light: "#525252",
      dark: "#a3a3a3",
    },
    muted: {
      light: "#737373",
      dark: "#737373",
    },
  },

  // Border Colors
  border: {
    light: "#e5e5e5",
    dark: "#262626",
    muted: {
      light: "#f5f5f5",
      dark: "#171717",
    },
  },
} as const;

export type ColorScale = keyof typeof colors.primary;
export type SemanticColor = keyof typeof colors.semantic;
