/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,scss,html}',
    './components/**/*.{js,jsx,ts,tsx,scss,html}',
    './styles/*.scss'
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
        '3xl': { max: '1920px' }
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      },
      colors: {
        primary: '#6419e6',
        royalblue: '#4169e1',
        transparent: 'transparent',
        categoryGray: '#4a4a4a',
        gray: '#808080'
      },
      fontFamily: {
        frizon: 'Frizon',
        jetbrains: 'Jetbrains Mono',
        namu: 'Namu'
      }
    }
  },
  plugins: []
}
