/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tailwind scans these files for class names
  ],
  theme: {
    extend: {
      colors: {
        raisin: "#252323",
        shadow: "#70798C",
        isableine: "#F5F1ED",
        pastel: "#DAD2BC",
        grullo: "#A99985",
      },
    },
  },
  plugins: [],
};
