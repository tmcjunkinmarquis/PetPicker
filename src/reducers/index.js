import { combineReducers } from 'redux';
import { loggedIn, user } from "./userReducer";
import { pets } from "./petsReducer";

const rootReducer = combineReducers({
  loggedIn,
  user,
  pets
});

export default rootReducer;
