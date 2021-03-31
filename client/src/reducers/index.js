import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import adReducer from './adReducer';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  adReducer,
});
