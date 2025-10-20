// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          light: "#BBFF00",
          DEFAULT: "#70D900",
          dark: "#10A700",
        },
      },
    },
  },
  plugins: [],
};

export default config;
