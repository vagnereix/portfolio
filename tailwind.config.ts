import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash)"],
        sans: ["var(--font-inter)"],
        orbitron: ["var(--font-orbitron)"],
        futurism: ["var(--font-futurism)"],
      },
      colors: {
        dark: {
          400: "#888888",
          500: "#2e2e2e",
          600: "#222222",
          650: "#1b1b1b",
          700: "#1e1e1e",
          750: "#1a1a1a",
          800: "#111111",
          850: "#0e0e0e",
          900: "#0b0b0b",
          950: "#050505",
        },
        brand: {
          400: "#c9bb94",
          500: "#d5a832",
        },
        green: {
          500: "#38e492",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "gradient-brand-400-to-dark":
          "linear-gradient(90deg,#c9bb94 57%,rgba(221,174,52,.26))",

        "gradient-white-to-dark": "linear-gradient(90deg,#fff 54%,#6b6b6b)",

        "gradient-gold-to-dark":
          "linear-gradient(90deg, #c9bb94,rgba(56,228,146,0))",

        "gradient-gold-to-light":
          "linear-gradient(135deg, rgb(255, 153, 0) 0%, rgb(255, 230, 0) 100%)",

        "gradient-button":
          "linear-gradient(rgba(255,255,255,.26),rgba(255,255,255,0))",

        "gradient-silver":
          "linear-gradient(135deg, rgb(118, 118, 118) 0%, rgb(246, 246, 246) 100%)",
      },
      animation: {
        "scroll-x": "scroll-x 60s linear infinite",
        "scroll-x-reverse": "scroll-x 60s linear infinite reverse",
      },
      keyframes: {
        "scroll-x": {
          to: { transform: "translateX(calc(-50% - 8px))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
