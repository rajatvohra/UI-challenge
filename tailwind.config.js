
module.exports = {
  theme: {
    extend: {
      height: theme => ({
        'screen-90': '90vh',
        'screen-10': '10vh',
        '97':'97%',
      }),
      fontFamily: {
        'poppins': ['Poppins'],
     },
     inset: {
     '1/5': '20%',
     '16':'16%',
     '3/7': '42.85%',
     '1/33': '36%',
     '46':'46%',
     '60':'60%',
    }
    ,
    margin: {
      '62':'28px',

     },

    }
  },
  variants: { display: ['responsive', 'hover', 'focus'] },
  plugins: []
}