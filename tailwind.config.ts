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
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideDown: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(0, 60vh)' }, // Adjust the Y distance to your layout
        },
        fadeOut: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'}

        },
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}

        },
        topDown: {
          '0%': { transform: 'translate(0, -60vh)' },
          '100%': { transform: 'translate(0,0)' }, // Adjust the Y distance to your layout
        }
      },
      animation: {
        'slide-in': 'slidein 1.2s ease-in-out',
        'spin-slow': 'spin 5s linear infinite', // Adjust duration as needed
        'slide-down': 'slideDown 1s ease-in-out forwards',
        'fade-out': 'fadeOut 1s forwards',
        'fade-in': 'fadeIn 1s forwards',
        'top-down': 'topDown 1s forwards'
      }
    },
  },
  plugins: [],
};
export default config;
