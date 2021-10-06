import { all, fork } from 'redux-saga/effects';

import exampleSaga from '@modules/example/exampleSaga';

export function* rootSaga() {
  yield all([
    fork(exampleSaga),
  ]);
}