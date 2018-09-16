import { combineReducers } from 'redux';
import { loggedIn, user, matches } from "./userReducer";
import { pets } from "./petsReducer";

const rootReducer = combineReducers({
  loggedIn,
  user,
  pets,
  matches
});

export default rootReducer;
