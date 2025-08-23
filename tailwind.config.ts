import type { Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tt: ['TT Norms Std Trl Cnd', 'sans-serif'],
      },
      colors: {
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
        },
        teal: {
          1: 'var(--teal-1)',
          2: 'var(--teal-2)',
        },
        black: 'var(--black)',
        white: 'var(--white)',
        yellow: {
          1: 'var(--yellow-1)',
          2: 'var(--yellow-2)',
        },
        sky: 'var(--sky)',
      },
    },
    container: { center: true },
  },
  corePlugins: { preflight: true },
  plugins: [],
} satisfies Config;

export default config;
