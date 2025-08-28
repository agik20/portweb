/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "certif.html"], 
  theme: {
      container: {
        center: true, 
        padding: '16px', 
      },
    extend: {
      colors: {
        primary: '#F3B696',
        secondary: '#333740',
        dark: '#0C0C0C',
        abu: '#333740',
        cokl: '#745850'
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        tenor: ['Tenor Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

