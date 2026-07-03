/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#0f766e',
        ink: '#111827',
        dimGray: '#64748b',
      },
      screens: {
        xs: '512px',
      },
      boxShadow: {
        soft: '0 20px 70px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
