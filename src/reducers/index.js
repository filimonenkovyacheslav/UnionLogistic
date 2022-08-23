import {combineReducers} from 'redux';

import {signInReducer} from './user';


export default combineReducers({
  auth: signInReducer
});
