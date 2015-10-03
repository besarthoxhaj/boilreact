'use strict';

if (!Function.prototype.bind) {
    /*eslint no-extend-native: 0*/
    Function.prototype.bind = require('function-bind');
}

var context = require.context('./test/front', true, /\.test\.js$/);
context.keys().forEach(context);

