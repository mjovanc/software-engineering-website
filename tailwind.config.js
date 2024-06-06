/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        secondary: '#16181c', // Gray
        accent: '#4a5568', // Light Gray
        background: '#000000', // Light Background
        textPrimary: '#E8E9EA', // Light Text
        textSecondary: '#d2d3d3', // Slightly Darker Text
        borderGray: '#151515', // Border Gray
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'stars': "url('/stars.png')",
      },
    },
  },
  plugins: [],
}

