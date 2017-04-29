import * as c from './constants';

const initialState = {};

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case 'ONE':
      return {
        ...state,
        one: 'ONE'
      };
    default:
      return {
        ...state
      };
  }
}
