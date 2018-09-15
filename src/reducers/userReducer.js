export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGEDIN':
      return {
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};

export const user = (state = { username: '' }, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};