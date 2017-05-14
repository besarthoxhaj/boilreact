/**
 * Crate style
 */

const { merge } = require('ramda');
const gulp = require('gulp');
const Sass = require('gulp-sass');
const rename = require('gulp-rename');

module.exports = (conf) => {

  const opts = merge({
    src: './sass/entry.scss',
    name: 'main.css',
    dest: './build'
  }, conf);

  return (done) => {
    const stream = gulp.src(opts.src)
      .pipe(Sass().on('error', Sass.logError))
      .pipe(rename(opts.name))
      .pipe(gulp.dest(opts.dest));

    stream.on('end', done);
  };
};
