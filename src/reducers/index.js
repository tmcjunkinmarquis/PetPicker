import { combineReducers } from 'redux';
import { loggedIn, user } from "./userReducer";

const rootReducer = combineReducers({
  loggedIn,
  user
});

export default rootReducer;
