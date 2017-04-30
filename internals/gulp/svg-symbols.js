/**
 * Svg-Symbols pipeline.
 * It converts a bunch of svg files to a single svg
 * file containing each one as a symbol.
 * For more details check:
 * - https://css-tricks.com/svg-symbol-good-choice-icons/
 */

const R = require('ramda');
const gulp = require('gulp');
const svgSymbols = require('gulp-svg-symbols');
const rename = require('gulp-rename');

module.exports = (config) => {

  const opts = R.merge({
    source: './assets/svg/*.svg',
    outputDir: './assets/',
    outputName: 'svg-symbols.html',
  },config);

  return () => {
    return gulp.src(opts.source)
      .pipe(svgSymbols({templates:['default-svg']}))
      .pipe(rename(opts.outputName))
      .pipe(gulp.dest(opts.outputDir))
  }
};
