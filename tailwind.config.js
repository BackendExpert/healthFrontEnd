// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your file paths
  ],
  theme: {
    extend: {
      // Custom scrollbar utilities
      // You can define custom class names here or use the `@apply` directive in your CSS file
    },
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
