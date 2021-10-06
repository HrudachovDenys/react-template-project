import { all, takeLatest } from 'redux-saga/effects';

import { TEST_ACTION } from './exampleActions';

function* helloSaga() {
  yield console.log('Hello Saga!!!');
}

function* exampleSaga() {
  yield all([
    takeLatest(TEST_ACTION, helloSaga)
  ])
}

export default exampleSaga;