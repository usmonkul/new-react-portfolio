/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#020c1b',
        'navy': '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        'dark-slate': '#495670',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
        'pink': '#f57dff',
        'blue': '#57cbff',
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'SFMono-Regular', 'JetBrains Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xxs': '12px',
        'xs': '13px',
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        'xxl': '22px',
        'heading': '32px',
      },
      spacing: {
        'nav-height': '100px',
        'nav-scroll-height': '70px',
        'tab-height': '42px',
        'tab-width': '120px',
        'hamburger-width': '30px',
      },
      borderRadius: {
        'custom': '4px',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      transitionDuration: {
        'custom': '0.25s',
      },
    },
  },
}
