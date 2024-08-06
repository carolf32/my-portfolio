/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,ts,jsx,tsc}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-color": "#016494",
        "second-main-color": "#247BA0",
        "third-main-color": "#1C99E0",
        "main-grey": "#b8b7b8",
        "main-bg-light": "#f4f5f6",
        "main-bg-dark": "#313638",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
