/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Chicken-themed color palette
        primary: {
          50: '#fdf7ed',
          100: '#f9eed5',
          200: '#f2d9aa',
          300: '#eabe74',
          400: '#e0a246', // Main chicken/golden color
          500: '#d18b21',
          600: '#c27617',
          700: '#a15e15',
          800: '#824c17',
          900: '#6b3f16',
        },
        secondary: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fbd9d9',
          300: '#f7bdbd',
          400: '#f19292', // Accent red for spicy themes
          500: '#e76b6b',
          600: '#d44848',
          700: '#b73a3a',
          800: '#983030',
          900: '#7f2c2c',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c', // Text colors
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'], // For headings
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}