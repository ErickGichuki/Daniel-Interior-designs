/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue':'#000235',
        'skyblue':'#84fa0',
        'lightLavender':'#a18cd1',
        'pastelPink':'#fbc2eb',
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        move: 'move 0.3s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
