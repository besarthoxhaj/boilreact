'use strict';

import createRouteList from './create_route_list.js';
// components
import empty from '../components/empty.js';
// containers
import splash from '../containers/splash.js';
import login from '../containers/login.js';

const components = {
  splash,
  empty,
  login
};

export default createRouteList(components);
