export const toggleLoggedIn = () => ({
  type: 'TOGGLE_LOGGEDIN'
});

export const storeUser = (userObj) => ({
  type: 'STORE_USER',
  userObj
});