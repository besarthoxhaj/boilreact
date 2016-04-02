'use strict';

const webpack = require('webpack');

module.exports = {
    entry: [
      './src/main.js'
    ],
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
      ]
    }
}

