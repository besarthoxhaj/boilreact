/**
 * TODO:
 * Improve and add documentation. More resources at:
 * - https://github.com/remy/nodemon/tree/master/test
 */

const nodemon = require('nodemon');
const notifier = require('node-notifier');

nodemon({
  script: 'tests/runner.js',
}).on('start', function () {
  // process started correctly
}).on('crash', function () {
  notifier.notify('Tests failed');
}).on('exit', function() {
  // process exit correctly with no
  // errors
});
