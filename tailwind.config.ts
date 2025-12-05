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
        // Primary green/sage background - base: #66756C
        sage: {
          50: '#f5f6f5',
          100: '#e8eae8',
          200: '#d1d5d1',
          300: '#b0b5b0',
          400: '#8b938b',
          500: '#66756C', // Main background color
          600: '#525e56',
          700: '#424d46',
          800: '#35403a',
          900: '#2c3530',
        },
        // Off-white/cream for text - base: #F2F3F1
        cream: {
          50: '#ffffff',
          100: '#F2F3F1', // Main text color
          200: '#e5e6e4',
          300: '#d8dad7',
          400: '#cbcdca',
          500: '#bec0bd',
          600: '#999a98',
          700: '#737473',
          800: '#4d4d4d',
          900: '#262626',
        },
        // Terracotta accent - base: #a63b2d
        terracotta: {
          50: '#fbeae7',
          100: '#f7d5cf',
          200: '#efaba0',
          300: '#e78170',
          400: '#df5741',
          500: '#a63b2d', // Main accent color
          600: '#852f24',
          700: '#64231b',
          800: '#421812',
          900: '#210c09',
        },
        // Gold accent for bold/emphasis text
        gold: {
          DEFAULT: '#C9A227',
          light: '#D4B94A',
          dark: '#A68820',
        },
        // Keep clay for backwards compatibility
        clay: {
          50: '#faf6f4',
          100: '#f4ede9',
          200: '#e8d9d1',
          300: '#d7b8a8',
          400: '#c5987e',
          500: '#B37B64',
          600: '#9f6350',
          700: '#835142',
          800: '#6a4336',
          900: '#57382d',
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
