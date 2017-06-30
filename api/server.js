'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT) || 9010,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    }
  }
});

server.register([
  require('inert'),
  require('h2o2'),
  require('hapi-auth-basic'),
], err => {
  if (err) {
    console.log('Failed to load inert');
    throw err;
  }

  server.auth.strategy('simple', 'basic', {
    validateFunc: (req, username, password, callback) => {
      if(username === 'canneslion' && password === 'correct') {
        callback(undefined,true,{id:'001',name:'Bes'});
      } else {
        callback(undefined,false);
      }
    }
  });

  server.route(require('./routes.js'));
});

module.exports = server;
