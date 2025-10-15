/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Inter font family
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },

      // Typography with Inter
      fontSize: {
        base: ["16px", { lineHeight: "24px", letterSpacing: "-0.01em" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.02em" }],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      // 4-point spacing system
      spacing: {
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
      },

      // Professional green color palette
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },

      // Minimalistic shadows
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        focus: "0 0 0 3px rgb(34 197 94 / 0.1)",
        "focus-error": "0 0 0 3px rgb(239 68 68 / 0.1)",
      },

      // Border radius
      borderRadius: {
        none: "0px",
        sm: "2px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        "2xl": "12px",
        "3xl": "16px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
