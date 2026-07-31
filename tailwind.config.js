/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          base: '#050905',
          surface: '#0d160d',
          card: '#111a11',
          raised: '#162016',
        },
        lime: {
          accent: '#a3e635',
          glow: '#84cc16',
          dim: '#4d7c0f',
          muted: '#1a2e05',
        },
        green: {
          accent: '#22c55e',
          soft: '#86efac',
          muted: '#166534',
        },
        text: {
          primary: '#f0fdf4',
          secondary: '#d1fae5',
          muted: '#6b7280',
          faint: '#374151',
        }
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'marquee2': 'marquee2 28s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #a3e63530, 0 0 60px #a3e63510' },
          '50%': { boxShadow: '0 0 40px #a3e63560, 0 0 100px #a3e63525' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'lime': '0 0 30px #a3e63530, 0 0 80px #a3e63515',
        'lime-sm': '0 0 15px #a3e63520',
        'lime-lg': '0 0 60px #a3e63540, 0 0 120px #a3e63520',
        'green': '0 0 30px #22c55e25',
      }
    },
  },
  plugins: [],
}
