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

server.route(require('./routes.js'));

server.start();

module.exports = server;
