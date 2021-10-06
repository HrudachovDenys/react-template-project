import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const loggerMiddleware = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

const client = axios.create({
  baseURL: 'http://localhost:4000',
  responseType: 'json',
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    axiosMiddleware(client),
    thunkMiddleware,
    loggerMiddleware
  ),
);

sagaMiddleware.run(rootSaga);

export default store;