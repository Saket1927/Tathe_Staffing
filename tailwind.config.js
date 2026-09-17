/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'site': '1560px',
      },
      colors: {
        navy: {
          950: '#031426', // Dark Navy
          900: '#061B30', // Deep Navy
          850: '#0A2540',
          800: '#0E3054',
          700: '#133D69',
        },
        brand: {
          green: '#20E66B',      // Bright Green
          greenHover: '#18CC5C',
          greenLight: '#E8FDF0',
          darkNavy: '#031426',
          deepNavy: '#061B30',
        },
        tathe: {
          blue: '#00A3FF',
          yellow: '#FBBF24',
          orange: '#F97316',
          red: '#EF4444',
          green: '#20E66B',
          navy: '#031426',
        },
        client: {
          red: '#E31837',     // Mahindra / DHL
          blue: '#005A9C',    // Tata / Godrej
          teal: '#00838F',    // Connectwell
          amber: '#F59E0B',   // Logistics / FMCG
          gold: '#C5A059',    // Arihant
          purple: '#7C3AED',  // IT / Digital
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        script: ['Caveat', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
        'glow-green': '0 0 25px rgba(32, 230, 107, 0.35)',
        'glow-orange': '0 0 25px rgba(249, 115, 22, 0.35)',
        'glow-navy': '0 15px 40px rgba(3, 20, 38, 0.4)',
      }
    },
  },
  plugins: [],
}
