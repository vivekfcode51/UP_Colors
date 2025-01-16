/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '410px',
      'sm': '540px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1836px',
    },
    extend: {
      
      keyframes: {
        translateAnimation: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--x-target), var(--y-target))' },
        },
        pulseFadeOut: {
          '0%': { opacity: 1, transform: 'scale(0)' },
          '100%': { opacity: 0, transform: 'scale(1)' },
        },
      },
      animation: {
        translateAnimation: 'translateAnimation 2s ease-in-out forwards',
        'pulse-fade': 'pulseFadeOut 2s ease-in-out infinite',
      },
      fontFamily: {
        roboto: [' Verdana, sans-serif;', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '11px', 
        xsm: '13px', 
        sm: '16px',
        lg: '19px', 
      },
      colors: {
        bg1: "#F7F8FF",
        bg2: "#FC7C76",
        bg3: "#2A95F3",
        bg4: "#374992",
        yellow: "#DD9138",
        green: "#17B15E",
        voilet: "#9B48DB",
        red: "#D23838",
        gray: "#666666",
        gold: "#ff8310",
        chocolate: "#B1835A",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      }, ['responsive', 'hover'])
    }
  ],
};
