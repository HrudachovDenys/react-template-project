
import { combineReducers } from 'redux';

import exampleReducer, { STATE_KEY as EXAMPLE_STATE_KEY } from '@modules/example/exampleReducer';

export const reducers = combineReducers({
  [EXAMPLE_STATE_KEY]: exampleReducer,
});