module.exports = {
  purge: [
    './**/*.html',
    './src/**/*.jsx',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '8rem',
      },
    },
    extend: {
      boxShadow: {
        custom: '0 20px 25px -5px rgba(0,0,0,.8), 0 10px 10px -5px rgba(0,0,0,.04)',


      },
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
