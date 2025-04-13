import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px", // 375 x 629 M
      md: "768px", // 768 x 956 T
      lg: "1200px", // 1200 x 800 D
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
