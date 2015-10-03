var webpack = require('webpack')

module.exports = {
    entry: [
      './src/js/main.js'
    ],
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.scss$/, loader: 'style!css!myth!sass'},
        { test: /\.json$/, loader: 'json-loader'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    externals: {
      fs: '{}',
      tls: '{}',
      net: '{}',
      console: '{}'
    }
}

