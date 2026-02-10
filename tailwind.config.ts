import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f9fd",
          100: "#d8f0fb",
          200: "#b3e2f7",
          500: "#3CAAE1",
          600: "#2b8fc1"
        }
      }
    }
  },
  plugins: []
};

export default config;
