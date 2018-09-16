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
      return action.userObj;
    default:
      return state;
  }
};

export const matches = (state = [], action) => {
  switch (action.type) {
    case 'STORE_MATCHES':
      console.log('action.matchesArray: ', action.matchesArray);
      return action.matchesArray;
    default:
      return state;
  }
};

