import { combineReducers } from 'redux';
import userMedia from './userReducer';

const rootReducer = combineReducers({
  userMedia,
});

export default rootReducer;
