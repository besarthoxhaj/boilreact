var path = require('path');
var webpack = require('webpack');
var cheerio = require('cheerio');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    './app/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false
    }),
    new webpack.DefinePlugin({
      '_TEST_': false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      templateContent: templateContent(),
    })
  ]
};

function templateContent() {

  const svgSymbols = require('fs').readFileSync(
    require('path').resolve(process.cwd(), 'assets/svg-symbols.html')
  ).toString();

  const html = [
    '<!doctype html>',
    '<html>',
    '  <head>',
    '    <link href="/main.css" rel="stylesheet">',
    '  </head>',
    '  <body>',
    '    <div id="root"></div>',
    '  </body>',
    '</html>',
  ].join('\n');

  const doc = cheerio(html);
  const head = doc.find('head');
  const body = doc.find('body');
  body.prepend(`<div class="[ u-hidden ]">${svgSymbols}</div>`);
  return doc.toString();
}
