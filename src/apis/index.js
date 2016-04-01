'use strict';

// if true -> browser enviorment
// else false -> node enviorment
if (global.window) {
  module.exports = {
    localStorage:window.localStorage
  };
} else {
  module.exports = {
    localStorage:require('./local_storage.js')
  };
}
