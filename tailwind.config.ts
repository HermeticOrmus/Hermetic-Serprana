import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        earth: {
          50: '#faf7f4',
          100: '#f5efe8',
          200: '#e8ddd0',
          300: '#d9c7b0',
          400: '#c9ad8e',
          500: '#b89372',
          600: '#a67d5f',
          700: '#8a6850',
          800: '#715746',
          900: '#5d493b',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cec7',
          300: '#a3ada3',
          400: '#7f8e7f',
          500: '#647364',
          600: '#4f5c4f',
          700: '#414a41',
          800: '#363d36',
          900: '#2e332e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
