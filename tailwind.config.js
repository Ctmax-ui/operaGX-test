/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '5xl': '2000px',
      },
      width: {
        '1500': '1500px',
      },
    },
  },
  plugins: [],
}

