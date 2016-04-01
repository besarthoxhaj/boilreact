'use strict';

module.exports = function (components) {
  return  ({
    'splash': {
      component: components.splash,
      config: {
        sidebar: components.empty,
        header: components.empty
      },
      auth: false,
    },
    'login': {
      component: components.login,
      config: {
        sidebar: components.empty,
        header: components.empty
      },
      auth: false,
    },
  });
};
