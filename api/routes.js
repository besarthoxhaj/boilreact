'use strict';

var handlers = require('./handlers.js');

module.exports = [
	{
		method: 'GET',
		path: '/{filepath*}',
		handler: {
      directory: {
        path: 'public'
      }
    }
	},
	{
		method: 'GET',
		path: '/assets/{filepath*}',
		handler: {
      directory: {
        path: 'assets'
      }
    }
	}
];
