/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '.3rem',
      sm: '.35rem',
      base: '.4rem',
      lg: '.5rem',
      xl: '.55rem',
      "2xl": '.6rem'
    },
    extend: {},
  },
  plugins: [],
}

