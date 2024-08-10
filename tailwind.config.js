/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#27292D",
        customBlack: "#191920",
        lightGray: "#6B6C70",
        customBorderColor: "#35373B",
        customWhite: "#C5C7CA",
        lightBlue: "#4A96FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
