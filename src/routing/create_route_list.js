'use strict';

module.exports = function (components) {
  return  ({
    'splash': {
      component: components.splash,
      config: {
        sidebar: false,
        header: false
      }
    },
    'login': {
      component: components.login,
      config: {
        sidebar: false,
        header: false
      }
    },
    'overview': {
      component: components.overview,
      config: {
        sidebar: true,
        header: true
      }
    }
  });
};
