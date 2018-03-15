module.exports = {
  initialize: (id,otps) => {
    // global.testEmitter.emit('GA.INIT');
  },
  pageview: (...args) => {
    global.testEmitter.emit('GA.PAGEVIEW', ...args);
  },
  event: (...args) => {
    global.testEmitter.emit('GA.EVENT', ...args);
  }
};
