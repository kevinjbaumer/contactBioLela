/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        soft: {
          blue: '#E1F5FE',      // light pastel blue
          green: '#E8F5E8',     // soft green
          beige: '#FDF6E3',     // warm beige
          lavender: '#F3E5F5',  // soft lavender
          peach: '#FFF3E0',     // pastel peach
        },
        trust: {
          blue: '#0277BD', // used for CTA buttons & highlights
          navy: '#1565C0', // used for headings & accents
          green: '#388E3C' // optional trust green for icons
        }
      },
      fontFamily: {
        heading: ['system-ui', 'sans-serif'],
        body: ['system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      }
    },
  },
  plugins: [],
};
