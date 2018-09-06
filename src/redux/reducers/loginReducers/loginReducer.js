import createReducer from '@global/createReducer';
import * as constants from '@actions/loginActions/constants';

const intialState = {};
export const loginReducer = createReducer(intialState, {
  [constants.INIT_REQUEST](state) {
    return Object.assign({}, state, {});
  },
});
