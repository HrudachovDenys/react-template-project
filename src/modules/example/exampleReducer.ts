import { get, set, clone } from 'lodash';

import { IAction } from '@common/models/redux.model';
import { getRestPayload } from '@common/utils/redux.helpers';

import { TEST_ACTION } from './exampleActions';

export const STATE_KEY = 'example';

export interface IState {
  data: string
}

const initialState: IState = {
  data: '',
};

const exampleReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    /**
     * Example use axios action.
     * 
     * case `${EXAMPLE_AXIOS}_SUCCESS`:
     * case `${EXAMPLE_AXIOS}_FAIL`:
     */
    case TEST_ACTION: {
      return set(clone(state), 'data', getRestPayload(action));
    }
    default:
      return state;
  }
};

export const getExampleData = (state: { [STATE_KEY]: IState }) => get(state, [STATE_KEY, 'data']);

export default exampleReducer;