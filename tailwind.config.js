/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryCol: "#145DA0",
        darkShade: "#0C2D48",
        lightShade: "#2E8BC0",
        primaryGrey: "#333",
      },
    },
  },
  plugins: [],
};
