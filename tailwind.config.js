/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js, jsx, ts, tsx}',
    './index.html',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkMode: {
          primary: '#313e51',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
