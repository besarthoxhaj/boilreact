/**
 * Create Sass documentation
 */

const gulp = require('gulp');
const sassdoc = require('sassdoc');

module.exports = (conf) => {

  const opts = {
    dest: 'sass-docs',
    verbose: true,
    description: 'Boilreact',
    display: {
      access: ['public', 'private'],
      alias: false,
      watermark: false
    }
  };

  return () => {
    return gulp.src(conf.source)
      .pipe(sassdoc(opts));
  }
};
