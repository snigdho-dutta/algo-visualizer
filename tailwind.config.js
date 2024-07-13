/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wall: {
          '0%': { opacity: '0.5', scale: 0.7 },
          '100%': { opacity: '1', scale: 1 },
        },
        traversed: {
          '0%': {
            transform: 'scale(0.3)',
            backgroundColor: '#9333eabf',
            borderRadius: '100%',
          },
          '50%': { backgroundColor: '#4f46e5bf' },
          '75%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', backgroundColor: '#22d3ee' },
        },
        path: {
          '0%': {
            transform: 'scale(0.3)',
            backgroundColor: '#e11d48bf',
            borderRadius: '100%',
          },
          '50%': { backgroundColor: '#ea580cbf' },
          '75%': { transform: 'scale(1.2)', backgroundColor: '#fb923cbf' },
          '90%': { transform: 'scale(0.8)', backgroundColor: '#fde68a' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        wall: 'wall 0.3s cubic-bezier(0.4,0,0,0.2)',
        traversed: 'traversed 0.5s cubic-bezier(0,0,0.2,1)',
        path: 'path 1.5s cubic-bezier(0,0,0.2,1)',
      },
    },
  },
  plugins: [],
}
