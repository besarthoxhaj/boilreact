/**
 * TODO:
 * Improve and add documentation. More resources at:
 * - https://github.com/remy/nodemon/tree/master/test
 */

const nodemon = require('nodemon');
const notifier = require('node-notifier');

nodemon({
  script: 'tests/runner.js',
  ignore: 'tests/_snapshots/*',
}).on('start', function () {
  // process started correctly
}).on('restart', function() {
  // process restarted
}).on('crash', function () {
  notifier.notify('Tests failed');
}).on('exit', function() {
  // process exit correctly with no
  // errors
});
