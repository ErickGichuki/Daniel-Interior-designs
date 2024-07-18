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
      }
    },
  },
  plugins: [],
}

