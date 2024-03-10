/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%);',
        'gradient-2': 'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)',
      },
      backgroundColor: {
        'reaction': '#FFF6F6',
        'memory': '#FFFBF4',
        'verbal': '#F2FCF9',
        'visual': '#F3F4FD',
        'dark-navy': '#303B59',
        'very-light-blue': '#ECF2FF'
      },
      colors: {
        'light-blue': '#CAC9FF',
        'dark-navy': '#303B59',
        'reaction': '#FF5555',
        'memory': '#FFB21E',
        'verbal': '#00BB8F',
        'visual': '#1125D6',
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
      },
      fontSize: {
        'score': ['56px', '72px'],
        'great': ['24px', '0'],
      }
    },
  },
  plugins: [],
}


