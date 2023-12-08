const path = require('path');

module.exports = {
  entry: './thor-gutenberg-blocks.js',
  output: {
    filename: 'block.build.js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
