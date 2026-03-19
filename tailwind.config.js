/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#556B2F",
        cream: "#FDF5E6",
        earth: {
          light: "#A0522D",
          DEFAULT: "#8B4513",
          dark: "#5D2E0C",
        },
        stone: {
          850: "#1C1917",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}


