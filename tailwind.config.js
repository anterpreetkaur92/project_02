module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing:{
      widest: '.10em'
    }
  },
  variants: {
    borderColor: ['responsive', 'focus'],
    cursor: ['hover', 'focus']

  },
  plugins: [],
}
