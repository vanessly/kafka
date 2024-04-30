/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee-bg': "url('/src/assets/images/coffee-bg.jpg)",
        'dialogue': "url('/src/assets/images/dialogue.png)"
      },
      animation: {
        slideLeft: 'slideLeft 1s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
        slideRight: 'slideRight 1s cubic-bezier(0.22, 0.61, 0.36, 1) forwards'
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-10%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        slideRight: {
          '0%': { transform: 'translateX(10%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}

