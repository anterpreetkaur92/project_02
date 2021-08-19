module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing:{
      widest: '.10em'
    },
    extend:{
      colors:{
        futurecolor:'#E1B668'
      }
    }
  },
  variants: {
    extend: {
      borderWidth:['hover','focus'],
      maxHeight: ['focus'],
    },
    borderColor:['hover','focus','responsive','focus-within'],
    cursor: ['hover', 'focus'],
    
  },
  plugins: [],
  
}

