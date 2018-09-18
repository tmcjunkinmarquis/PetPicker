import { combineReducers } from 'redux';
import { loggedIn, user, matches } from "./userReducer";
import { pets } from "./petsReducer";

const appReducer = combineReducers({
  loggedIn,
  user,
  pets,
  matches
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;