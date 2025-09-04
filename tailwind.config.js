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
        'xs': '360px',   // HP kecil (Android lawas)
        'sm': '480px',   // HP sedang
        'md': '720px',   // tablet portrait
        'lg': '992px',   // tablet landscape / laptop kecil
        'xl': '1280px',  // laptop standar / desktop kecil
        '2xl': '1440px', // layar lebar (full HD ke atas)
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        tenor: ['Tenor Sans', 'sans-serif'],
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

