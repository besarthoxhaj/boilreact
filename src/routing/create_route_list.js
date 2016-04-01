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
    'home': {
      component: components.home,
      config: {
        sidebar: true,
        header: true
      }
    }
  });
};
