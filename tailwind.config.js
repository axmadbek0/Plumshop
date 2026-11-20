/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#e2c9db',   // eng och fon, kartochka fonlari, hover fon
          100: '#d8a3c1',
          200: '#c77cb3',
          300: '#b0579b',
          400: '#9e2e76',
          500: '#8c1b5e',   // ASOSIY brend rangi
          600: '#6a0c4f',   // hover, bosilgan
          700: '#4c0b3a',
          800: '#3a0a28',
          900: '#290818',   // matn, footer, eng to'q fon
        },
        surface: {
          light: '#faf5f8', // sahifa foni
          section: '#f4e9f0', // bo'limlar foni
          card: '#ffffff',
          border: '#e2c9db',
        }
      },
      borderRadius: {
        'card': '16px',
        'btn': '12px',
        'input': '12px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(140, 27, 94, 0.08)',
        'card': '0 2px 12px rgba(41, 8, 24, 0.06)',
        'card-hover': '0 12px 28px -4px rgba(140, 27, 94, 0.16)',
        'elevated': '0 20px 35px -5px rgba(41, 8, 24, 0.18)',
      }
    },
  },
  plugins: [],
}
