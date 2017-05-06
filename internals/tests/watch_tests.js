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
  // Only clear the console if it's an interactive terminal.
  if (process.stdout.isTTY) {
    process.stdout.write('\u001b[2J');
    process.stdout.write('\u001b[1;1H');
    process.stdout.write('\u001b[3J');
  }

  console.log('RESTARTING TESTS\n');
}).on('crash', function () {
  notifier.notify('Tests failed');
}).on('exit', function() {
  // process exit correctly with no
  // errors
});
