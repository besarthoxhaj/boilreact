'use strict';

import createRouteList from './create_route_list.js';
import empty from '../components/empty.js';
import splash from '../containers/splash.js';
import login from '../containers/login.js';
import overview from '../containers/overview.js';

const components = {
  splash,
  empty,
  login,
  overview
};

export default createRouteList(components);
