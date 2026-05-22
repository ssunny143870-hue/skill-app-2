export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 30px 80px rgba(59, 130, 246, 0.16)',
        card: '0 20px 40px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 40%), radial-gradient(circle at right, rgba(96,165,250,0.14), transparent 25%)'
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#dbeeff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        }
      }
    }
  },
  plugins: []
};
