export const toggleLoggedIn = () => ({
  type: 'TOGGLE_LOGGEDIN'
});

export const storeUser = ({ username }) => ({
  type: 'STORE_USER',
  username
});