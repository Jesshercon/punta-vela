/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Helvetica, Arial, sans-serif',
      },
      colors: {
        "dark-blue": "#19232E",
      },
    },
  },
  plugins: [],
};
