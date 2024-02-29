/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        forum: ["Forum", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "dark-blue": "#19232E",
      },
    },
  },
  plugins: [],
};
