import { combineReducers } from 'redux';

import authReducers from './authReducer';
import chatReducers from './chatReducers';

const rootReducers = combineReducers({
  auth: authReducers,
  chat: chatReducers,
});

export default rootReducers;
