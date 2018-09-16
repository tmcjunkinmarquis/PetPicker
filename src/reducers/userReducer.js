export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGEDIN':
      return !state.loggedIn;
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_USER':
      console.log(action.userObj);
      return action.userObj
    default:
      return state;
  }
};
