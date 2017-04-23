const path = require('path');
const webpack = require('webpack');
const cheerio = require('cheerio');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    templateContent: templateContent(),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    children: true,
    minChunks: 2,
    async: true,
  }),
];

module.exports = require('./webpack.base.babel')({
  performance: { hints: false },
  entry: [
    path.join(process.cwd(), 'app/app.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  // Add development plugins
  plugins: plugins,
  // Tell babel that we want to hot-reload
  babelQuery: {
    // require.resolve solves the issue of relative presets when dealing with
    // locally linked packages. This is an issue with babel and webpack.
    // See https://github.com/babel/babel-loader/issues/149 and
    // https://github.com/webpack/webpack/issues/1866
    presets: ['babel-preset-react-hmre'].map(require.resolve),
  },
  // Emit a source map for easier debugging
  devtool: 'cheap-module-eval-source-map',
});

function templateContent() {
  const html = require('fs').readFileSync(
    path.resolve(process.cwd(), 'app/index.html')
  ).toString();

  const svgSymbols = require('fs').readFileSync(
    path.resolve(process.cwd(), 'app/svg-symbols.html')
  ).toString();

  const doc = cheerio(html);
  const head = doc.find('head');
  const body = doc.find('body');
  head.append('<link rel="stylesheet" href="/static/tmp/style.css">');
  body.prepend(`<div class="[ u-hidden ]">${svgSymbols}</div>`);
  return doc.toString();
}
