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
        // Primary sage/green accent - rgb(97, 139, 99)
        sage: {
          50: '#f4f7f4',
          100: '#e8f0e9',
          200: '#d1e1d2',
          300: '#b0cdb2',
          400: '#82af85',
          500: '#618b63', // Main accent color
          600: '#4f7251',
          700: '#405d42',
          800: '#364d37',
          900: '#2d3f2e',
        },
        // Warm terracotta/clay tones
        clay: {
          50: '#faf7f4',
          100: '#f4ede6',
          200: '#e8d9cc',
          300: '#d7bea8',
          400: '#c59f7e',
          500: '#b5825f',
          600: '#a36d4d',
          700: '#885941',
          800: '#6f4a38',
          900: '#5c3d2f',
        },
        // Soft cream/neutral tones
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1eb',
          300: '#ebe5dc',
          400: '#ddd3c5',
          500: '#c9bba9',
          600: '#a79683',
          700: '#8a7a6a',
          800: '#726459',
          900: '#5f544b',
        },
        // Accent variants for specific uses
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
