import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: "#08070E",
        foreground: "",
        textPrim: "#F5F5F5",
        textSec: "#D5D5D5",
        accentPrim: "#f54900",
        accentSec: "",
        border: "",
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
export default config;
