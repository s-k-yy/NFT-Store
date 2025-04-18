// module.exports = {
//     plugins: {
//       '@tailwindcss/postcss': {}, // Use the new package instead of direct tailwindcss
//       autoprefixer: {},
//     },
//   };

module.exports = {
    plugins: [
      require('@tailwindcss/postcss'),
      require('autoprefixer')
    ]
  };