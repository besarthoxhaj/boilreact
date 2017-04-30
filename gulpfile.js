/**
 * Main project gulpfile
 */

const gulp = require('gulp');
const SassDocs = require('./internals/gulp/sass-docs');
const SvgSymbols = require('./internals/gulp/svg-symbols');

const paths = {
  sass: './sass/**/*.scss',
  svgs: './assets/svg/*.svg',
};

gulp.task('sass-docs', SassDocs({source: paths.sass}));
gulp.task('svg-symbols', SvgSymbols({source: paths.svgs}));

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass-docs']);
  gulp.watch(paths.svgs, ['svg-symbols']);
});

gulp.task('default', [
  'sass-docs',
  'svg-symbols',
  'watch'
]);
