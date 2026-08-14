/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ['Syncopate', 'Orbitron', 'sans-serif'],
        orbitron: ['Orbitron', 'Space Grotesk', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
      },
      animation: {
        'spin-slow': 'spinSlow 12s linear infinite',
        marquee: 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'glow': 'glow 2s infinite',
        'terminal-blink': 'terminalBlink 1s step-start infinite',
        flicker: 'flicker 3s linear infinite',
        scan: 'scan 4s linear infinite',
        typing: 'typing 3.5s steps(40, end)',
        'cursor-blink': 'cursorBlink 0.75s step-end infinite',
      },
      keyframes: {
        spinSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { transform: 'translateY(30px)', opacity: 0 }, to: { transform: 'translateY(0)', opacity: 1 } },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(0, 255, 204, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(0, 255, 204, 0.5), 0 0 30px rgba(0, 255, 204, 0.3)' },
          '100%': { textShadow: '0 0 5px rgba(0, 255, 204, 0.3)' },
        },
        terminalBlink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 1 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.8 },
        },
        scan: { '0%': { top: '0' }, '100%': { top: '100%' } },
        typing: { from: { width: 0 }, to: { width: '100%' } },
        cursorBlink: { 'from, to': { borderColor: 'transparent' }, '50%': { borderColor: '#00ffcc' } },
      },
      boxShadow: {
        'brutalist': '6px 6px 0px 0px #ffffff',
        'brutalist-sm': '4px 4px 0px 0px #ffffff',
        'brutalist-lg': '10px 10px 0px 0px #ffffff',
      }
    },
  },
  plugins: [],
}
