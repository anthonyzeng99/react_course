const path = require('path');

const publicPath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  output: {
    path: publicPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: publicPath
  }
}
