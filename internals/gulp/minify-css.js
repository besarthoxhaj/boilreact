/**
 * Move imgs to another folder
 */

const { merge } = require('ramda');
const gulp = require('gulp');
const CleanCSS = require('gulp-clean-css');

module.exports = (conf) => {

  const opts = merge({
    src: './build/main.css',
    name: 'main.css',
    dest: './build'
  }, conf);

  return (done) => {
    const stream = gulp.src(opts.src)
      .pipe(CleanCSS())
      .pipe(gulp.dest(opts.dest));

    stream.on('end', done);
  };
};
