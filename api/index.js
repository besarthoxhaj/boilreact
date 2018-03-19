'use strict';

const Hapi = require('hapi');
const Glue = require('glue');

const init = async () => {

  const server = await Glue.compose({
    server: {
      port: Number(process.env.PORT) || 9010,
      host: 'localhost'
    },
    register: {
      plugins: [
        require('inert'),
        require('h2o2'),
        require('hapi-auth-basic')
      ]
    }
  });

  server.auth.strategy('simple', 'basic', {
    validate: (req, username, pass, h) => {
      return {
        isValid: (username === 'canneslion' && pass === 'correct'),
        credentials: {}
      };
    }
  });
  server.auth.default('simple');
  server.route(require('./routes.js'));

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
