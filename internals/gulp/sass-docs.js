/**
 * Create Sass documentation
 */

const { merge } = require('ramda');
const gulp = require('gulp');
const sassdoc = require('sassdoc');

module.exports = (conf) => {

  const opts = merge({
    dest: 'sass-docs',
    verbose: true,
    description: 'Boilreact',
    display: {
      access: ['public', 'private'],
      alias: false,
      watermark: false
    }
  },conf);

  return () => {
    return gulp.src(conf.source)
      .pipe(sassdoc(opts));
  }
};
