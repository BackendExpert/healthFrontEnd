export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your file paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Safari and Chrome */
        }
      }, ['responsive', 'hover']);
    }
  ],
};
