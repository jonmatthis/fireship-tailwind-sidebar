/** @type {import('tailwindcss').Config} */
const colors= require('tailwindcss/colors')
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#2c3e50',
        accent: '#b514d9',
        gray: colors.netral,
        blue: colors.blue,
        red: colors.red,
        green: colors.green,
        yellow: colors.yellow,
        pink: colors.pink,
        purple: colors.purple,
      }
    },
  },
  plugins: [],
}

