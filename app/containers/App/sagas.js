import { take } from 'redux-saga/effects';

export function* start() {
  console.log('APP - START SAGAS');
}

export default function({history}) {

  if(history === undefined) {
    throw 'Forgot to pass {history} to appSagas';
  }

  return [
    start,
  ];
}
