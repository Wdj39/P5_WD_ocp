// filepath: /c:/Users/wajih/Documents/cinkième projet/3/P5_ocp_WD-main/P5_ocp_WD-main/webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/App.jsx', // Remplacez par le point d'entrée de votre application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};