/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        lightMode: {
          primary: "#6366F1",
          bg: "#FAFBFD",
          foreground: "#334155",
          text: "#334155"
        },
        darkMode: {
          primary: "#38BDF8",
          bg: "#0F172A",
          foreground: "#E2E8F0",
          text: "#94A3B8"
        }
      },
    },
    plugins: [],
  }
}