module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia']
    },
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#A855F7',
        secondary: '#64748B',
        dark: '#0F172A'
      },
      screen: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
 