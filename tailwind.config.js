module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary-red': '#BF1313',
        'primary-gray':'#B8B6B4',
        'primary-black':'#171A21',
        'dark-white': '#F9F9F9',
        'light-dark': '#303237'
      },
      minHeight: {
        '9/10': '90%',
        '4/5': '80%',
        '7/10': '70%',
        '1/2': '50%',
        '1/3': '33.333%',
        '44': '11rem',
        '32': '8rem',
        '28': '7rem'
      },
      padding: {
        '0.7': '3px'
      },
      minWidth: {
        '44': '11rem'
      },
      width: {
        'fit': 'fit-content',
        '7/10': '70%'
      },
      inset: {
        '-100': '-25rem',
        '-120': '-30rem',
        '-124': '-32rem'
      },
      height: {
        'fit': 'fit-content',
        '7-5': '30px'
      },
      fontSize: {
        's2b': '15px',
        'xxs': ['10px', '10px']
      },
      blur: {
        'xs': '2px'
      }
    },
    backgroundImage: {
      'background': "url('https://cdn.jsdelivr.net/gh/838239178/PicgoBed@main/img/backgroud.png')",
      'pub-score': "url('https://cdn.jsdelivr.net/gh/838239178/PicgoBed@main/img/public_score.png')",
      'media-score': "url('https://cdn.jsdelivr.net/gh/838239178/PicgoBed@main/img/media_score.png')"
    }
  },
  variants: {
    extend: {
      fontWeight:['responsive', 'hover', 'focus'],
      fontSize: ['responsive', 'hover', 'active'],
      backgroundColor: ['active'],
      animation: ['active','group-hover'],
      scale: ['active'],
      borderBottomWidth: ['focus'],
      ringColor: ['active'],
      ringWidth: ['active'],
      translate: ['active']
    },
  },
  plugins: [],
}
