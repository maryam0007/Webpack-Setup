const path = require('path');

module.exports = {
    mode: 'development', // Set the mode to 'development' or 'production'
    // Rest of your webpack configuration...
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};