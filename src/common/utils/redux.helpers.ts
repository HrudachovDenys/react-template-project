import { get } from 'lodash';

import { IAction } from '../models/redux.model';

export const getRestPayload = (action: IAction) => get(action, ['payload', 'data']);