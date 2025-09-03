/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        // Custom green color for neon effects
        'neon-green': '#00ff99',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff99, 0 0 10px #00ff99, 0 0 15px #00ff99' },
          '100%': { boxShadow: '0 0 10px #00ff99, 0 0 20px #00ff99, 0 0 30px #00ff99' },
        }
      }
    },
  },
  plugins: [],
};