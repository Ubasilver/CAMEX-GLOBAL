/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d8d8dc',
          300: '#b4b4bc',
          400: '#8a8a94',
          500: '#6b6b76',
          600: '#52525b',
          700: '#3f3f47',
          800: '#27272e',
          900: '#1a1a20',
          950: '#0d0d12',
        },
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a3ff',
          500: '#3380f5',
          600: '#1d60e0',
          700: '#184bb4',
          800: '#173f8e',
          900: '#163671',
          950: '#0c2150',
        },
        accent: {
          cyan: '#22d3ee',
          green: '#25d366',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
};
