/**
 *
 */

 const { merge } = require('ramda');
 const gulp = require('gulp');
 const Sass = require('gulp-sass');
 const autoprefixer = require('gulp-autoprefixer');

module.exports = (conf) => {

  const opts = merge({
    src: './build/main.css',
    dest: './build'
  }, conf);

  return () => {
    return gulp.src(opts.src)
    .pipe(Sass().on('error', Sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(opts.dest));
  };
};
