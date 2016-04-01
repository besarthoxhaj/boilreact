'use strict';

import createRouteList from './create_route_list.js';
import empty from '../components/empty.js';
import splash from '../containers/splash.js';
import login from '../containers/login.js';
import home from '../containers/home.js';

const components = {
  splash,
  empty,
  login,
  home
};

export default createRouteList(components);
