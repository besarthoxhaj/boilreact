'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
	port: Number(process.env.PORT) || 9000,
	routes: {
		cors: {
			origin: ['*'],
			credentials: true
		}
	}
});

server.register({
  register: require('inert')
}, err => {
  if (err) { console.log('Failed to load inert') }
});

server.route(require('./routes.js'));

server.start();

module.exports = server;
