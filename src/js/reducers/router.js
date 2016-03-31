'use strict';

import {
  CHANGE_ROUTE,
  RESET_NAVIGATION,
} from '../action_types.js';

const initialRoute = {name:'splash'};

export const initialState = {
  route: initialRoute
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROUTE:
      if (action.newRoute.name !== state.route.name) {
        return {route: action.newRoute,};
      } else {
        return {...state};
      }
    case RESET_NAVIGATION:
      return {
        ...initialState
      };
    default:
      return {
        ...state
      };
  }
}
