import { createStore } from 'redux';

import rootReducer from '../../src/reducers';

export default function configureStore(initialState = {}) {

  const store = createStore(
    rootReducer,
  );

  return store;
};
