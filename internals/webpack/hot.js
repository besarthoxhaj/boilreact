/**
 * TODO
 * Explain what's going on here.
 *
 * Resources:
 * - https://webpack.js.org/configuration/dev-server/
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3010',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './app/index.js',
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'dist'),

    publicPath: '/static/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new webpack.DefinePlugin({
      '__TEST__': true,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
      },
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 3010,
    compress: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/app/index.html' }
      ]
    },
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
