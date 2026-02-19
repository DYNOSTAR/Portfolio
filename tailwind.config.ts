import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        accent: '#7CC5FF',
        'accent-light': '#CFEAFF'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 31, 58, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
