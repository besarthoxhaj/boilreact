import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
  ];

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
    )
  );

  store.runSaga = sagaMiddleware.run;

  return store;
};
