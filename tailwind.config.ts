import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50:  '#f2f7f3',
          100: '#e0ede2',
          200: '#c3dcc7',
          300: '#9ac4a1',
          400: '#6B9E78',
          500: '#4A7A57',
          600: '#3a6145',
          700: '#2e4d37',
          800: '#263d2d',
          900: '#1f3225',
        },
        sky: {
          soft: '#7BA7BC',
          dark: '#5A8BA0',
        },
        cream: '#FAF7F2',
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#242B26',
        },
        text: {
          primary: '#1C2B20',
          secondary: '#6B7C6E',
          'primary-dark': '#E8EDE9',
          'secondary-dark': '#9BB09E',
        },
        danger: '#D97C5A',
        warning: '#D4A843',
        success: '#4CAF7D',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(8px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
} satisfies Config
