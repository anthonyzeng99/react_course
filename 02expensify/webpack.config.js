const path = require('path');

const publicPath = path.join(__dirname, 'public');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
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
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }]
    },
    devtool: isProduction ? 'source-map': 'cheap-module-eval-source-map',
    devServer: {
      contentBase: publicPath,
      historyApiFallback: true
    }
  }
};
