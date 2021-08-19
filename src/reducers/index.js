import { combineReducers } from 'redux';

import global from './globalReducer';

const reducer = () =>
  combineReducers({
    global,
  });

export default reducer;
