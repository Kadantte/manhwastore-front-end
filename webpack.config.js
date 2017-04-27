const Webpack = require('webpack');
const path    = require('path');

const HtmlWebpackPlugin       = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath       = path.resolve(__dirname, 'public', 'dist');
const mainPath        = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    mainPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader'  },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [HtmlWebpackPluginConfig, new Webpack.HotModuleReplacementPlugin()]
}
