var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      "./src/js/main.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
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
    },
    devtool: 'source-map',
}

