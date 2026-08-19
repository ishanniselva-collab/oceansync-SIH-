/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ocean: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce7ff',
          300: '#8ed7ff',
          400: '#59c0f7',
          500: '#33a3e6',
          600: '#1f84cc',
          700: '#1a6aa8',
          800: '#1c5688',
          900: '#1c476e',
          950: '#112d49',
        },
        teal: {
          50: '#effcfb',
          100: '#c8f7f3',
          200: '#92eee8',
          300: '#56ddd8',
          400: '#28c3c1',
          500: '#13a7a8',
          600: '#0d8588',
          700: '#0f6a6e',
          800: '#105458',
          900: '#114649',
        },
        aqua: {
          50: '#ecfff9',
          100: '#c6fff2',
          200: '#8effe7',
          300: '#4dffd7',
          400: '#16f5bd',
          500: '#00d9a3',
          600: '#00a984',
          700: '#00876a',
          800: '#046a55',
          900: '#065647',
        },
        ink: {
          50: '#f6f8fb',
          100: '#eef2f7',
          200: '#dde5ef',
          300: '#c2cfdc',
          400: '#9fabbd',
          500: '#72859b',
          600: '#586a80',
          700: '#47566a',
          800: '#3a4759',
          900: '#1f2a3a',
          950: '#101a2b',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(51, 163, 230, 0.45)',
        card: '0 10px 40px -12px rgba(28, 71, 110, 0.18)',
        'card-hover': '0 24px 60px -18px rgba(28, 71, 110, 0.28)',
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #1c476e 0%, #1a6aa8 35%, #13a7a8 70%, #00d9a3 100%)',
        'ocean-soft': 'linear-gradient(135deg, #eef9ff 0%, #effcfb 50%, #ffffff 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(10px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'wave-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'wave-move': 'wave-move 18s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
