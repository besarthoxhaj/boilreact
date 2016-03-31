'use strict';

import * as types from '../action_types.js';

export const changeRoute = newRoute => ({type:types.CHANGE_ROUTE,newRoute});
export const navigateTo = nextRoute => dispatch => dispatch(changeRoute(nextRoute));
