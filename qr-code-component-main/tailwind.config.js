/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(212, 45%, 89%)',
      'grayish-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218, 44%, 22%)',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
}

