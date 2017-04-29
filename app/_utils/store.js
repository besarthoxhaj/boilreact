import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers';

export default function configureStore(injectParams = {}) {

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(injectParams.history)
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
