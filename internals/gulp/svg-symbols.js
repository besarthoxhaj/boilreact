/**
 * Svg-Symbols pipeline.
 * It converts a bunch of svg files to a single svg
 * file containing each one as a symbol.
 * For more details check:
 * - https://css-tricks.com/svg-symbol-good-choice-icons/
 *
 * It takes `./assets/svg/*.svg` and saves all of them
 * in `./assets/svg-symbols.html`
 */

const R = require('ramda');
const gulp = require('gulp');
const svgSymbols = require('gulp-svg-symbols');
const rename = require('gulp-rename');

module.exports = (config) => {

  const opts = R.merge({
    src: './assets/svg/*.svg',
    dest: './assets/',
    name: 'svg-symbols.html',
  }, config);

  return () => {
    return gulp.src(opts.src)
      .pipe(svgSymbols({templates:['default-svg']}))
      .pipe(rename(opts.name))
      .pipe(gulp.dest(opts.dest))
  }
};
