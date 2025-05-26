/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
        },
        gray: {
          100: "#f3f4f6",
          600: "#4b5563",
        },
      },
    },
  },
  plugins: [],
};
