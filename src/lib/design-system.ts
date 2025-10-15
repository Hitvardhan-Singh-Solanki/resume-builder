/**
 * Professional Design System
 *
 * Typography: 2 font sizes, 4 font weights
 * Spacing: 4-point system (4px base unit)
 * Colors: Light/Dark theme support
 */

// Typography System
export const typography = {
  // Font Sizes (2 sizes only)
  text: {
    base: "text-base", // 16px
    lg: "text-lg", // 18px
  },

  // Font Weights (4 weights)
  weight: {
    normal: "font-normal", // 400
    medium: "font-medium", // 500
    semibold: "font-semibold", // 600
    bold: "font-bold", // 700
  },

  // Combined typography classes
  heading: {
    h1: "text-lg font-bold",
    h2: "text-lg font-semibold",
    h3: "text-base font-semibold",
    h4: "text-base font-medium",
    body: "text-base font-normal",
    caption: "text-base font-normal opacity-75",
  },
} as const;

// 4-Point Spacing System (4px base unit)
export const spacing = {
  // 4-point increments
  px: "1px", // 1px
  "0.5": "2px", // 2px (0.5 * 4)
  "1": "4px", // 4px (1 * 4)
  "1.5": "6px", // 6px (1.5 * 4)
  "2": "8px", // 8px (2 * 4)
  "2.5": "10px", // 10px (2.5 * 4)
  "3": "12px", // 12px (3 * 4)
  "3.5": "14px", // 14px (3.5 * 4)
  "4": "16px", // 16px (4 * 4)
  "5": "20px", // 20px (5 * 4)
  "6": "24px", // 24px (6 * 4)
  "7": "28px", // 28px (7 * 4)
  "8": "32px", // 32px (8 * 4)
  "9": "36px", // 36px (9 * 4)
  "10": "40px", // 40px (10 * 4)
  "12": "48px", // 48px (12 * 4)
  "16": "64px", // 64px (16 * 4)
  "20": "80px", // 80px (20 * 4)
  "24": "96px", // 96px (24 * 4)
} as const;

// Tailwind spacing classes using 4-point system
export const spacingClasses = {
  // Padding
  p: {
    "0.5": "p-0.5", // 2px
    "1": "p-1", // 4px
    "1.5": "p-1.5", // 6px
    "2": "p-2", // 8px
    "2.5": "p-2.5", // 10px
    "3": "p-3", // 12px
    "4": "p-4", // 16px
    "5": "p-5", // 20px
    "6": "p-6", // 24px
    "8": "p-8", // 32px
    "10": "p-10", // 40px
    "12": "p-12", // 48px
    "16": "p-16", // 64px
    "20": "p-20", // 80px
    "24": "p-24", // 96px
  },
  // Margin
  m: {
    "0.5": "m-0.5",
    "1": "m-1",
    "1.5": "m-1.5",
    "2": "m-2",
    "2.5": "m-2.5",
    "3": "m-3",
    "4": "m-4",
    "5": "m-5",
    "6": "m-6",
    "8": "m-8",
    "10": "m-10",
    "12": "m-12",
    "16": "m-16",
    "20": "m-20",
    "24": "m-24",
  },
  // Gap
  gap: {
    "0.5": "gap-0.5",
    "1": "gap-1",
    "1.5": "gap-1.5",
    "2": "gap-2",
    "2.5": "gap-2.5",
    "3": "gap-3",
    "4": "gap-4",
    "5": "gap-5",
    "6": "gap-6",
    "8": "gap-8",
    "10": "gap-10",
    "12": "gap-12",
    "16": "gap-16",
    "20": "gap-20",
    "24": "gap-24",
  },
} as const;

// Color System
export const colors = {
  light: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      900: "#1e3a8a",
    },
    neutral: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
    },
  },
  dark: {
    primary: {
      50: "#1e3a8a",
      100: "#1d4ed8",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      900: "#eff6ff",
    },
    neutral: {
      50: "#0f172a",
      100: "#1e293b",
      200: "#334155",
      300: "#475569",
      400: "#64748b",
      500: "#94a3b8",
      600: "#cbd5e1",
      700: "#e2e8f0",
      800: "#f1f5f9",
      900: "#f8fafc",
    },
    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
    },
  },
} as const;

// Component Variants
export const variants = {
  button: {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
    ghost:
      "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800",
  },
  card: {
    default:
      "bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700",
    elevated:
      "bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700",
  },
} as const;
