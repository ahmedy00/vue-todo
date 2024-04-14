/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
      './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'Arial', 'sans'],
                display: ['Poppins', 'sans'],
            },
            colors: {
                primary: '#FF9800',
                light: {
                    background: '#FFFFFF',
                    text: '#F3F3F3'
                },
                dark: {
                    background: 'hsl(228, 15%, 15%)',
                    text: '#1A1A1A'
                }
            },
        },
    },
    plugins: [],
  }