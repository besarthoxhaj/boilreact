import * as R from 'ramda';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery } from 'redux-saga/effects';

export function* watchLocationChange() {
  yield takeEvery(
    LOCATION_CHANGE,
    function* (loc) {
      console.log('SEND EVENT TO GA');
    }
  );
}

export default [
  watchLocationChange,
];
