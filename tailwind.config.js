/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A09',        // primary background — near-black
        inkRaised: '#141412',   // card / surface background
        inkRaised2: '#1C1C19',  // slightly lighter surface, for nested elements
        fg: '#F2F0E9',          // primary text — soft off-white, not pure white
        fgDim: '#8F8C84',        // secondary / muted text
        line: '#242420',         // hairline dividers on dark
        silver: {
          DEFAULT: '#C9C6BC',   // accent — warm silver
          light: '#E9E7DF',
          dark: '#93908A',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
