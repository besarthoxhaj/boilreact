'use strict';

import createRouteList from './create_route_list.js';
// components
import empty from '../components/_empty.js';
// containers
import splash from '../containers/splash.js';

const components = {
  splash,
  empty
};

export default createRouteList(components);
