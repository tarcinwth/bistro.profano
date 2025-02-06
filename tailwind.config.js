/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dende': '#FFD700',
        'laranja-queimado': '#D35400',
        'azul-ceu': '#87CEEB',
        'verde-jardim': '#2E8B57',
        'preto-bahia': '#1A1A1A',
        'bege-claro': '#E0D7C6',
        'terroso': '#F8F5F0',
        'marrom-escuro': '#2D2A22'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'renda': "url('https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2070')"
      }
    }
  },
  plugins: []
};