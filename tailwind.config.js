const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'logo': ['Roboto-Light'],
      'body': ['Regular'],
      'inter': ['Inter'],
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
