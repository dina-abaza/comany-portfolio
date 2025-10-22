/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aurora-light": "rgba(184, 255, 0, 1)",   // البداية الفاتحة
        "aurora-mid":   "rgba(136, 230, 0, 1)",   // الوسط
        "aurora-dark":  "rgba(16, 167, 0, 1)",    // النهاية الغامقة
      },
    },
  },
  plugins: [],
};

export default config;
