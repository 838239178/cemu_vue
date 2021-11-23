module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
        '1/2': '50%'
      },
      width: {
        'fit': 'fit-content',
        '7/10': '70%'
      },
      height: {
        'fit': 'fit-content',
        '7-5': '30px'
      },
      fontSize: {
        's2b': '15px'
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
      animation: ['active'],
      scale: ['active'],
      borderBottomWidth: ['focus'],
      ringColor: ['active'],
      ringWidth: ['active'],
    },
  },
  plugins: [],
}
