export const toggleLoggedIn = () => ({
  type: 'TOGGLE_LOGGEDIN'
});

export const storeUser = (userObj) => ({
  type: 'STORE_USER',
  userObj
});

export const storeMatches = (matchesArray) => ({
  type: 'STORE_MATCHES',
  matchesArray
});

export const petsArray = (petsArray) => ({
  type: 'PETS_ARRAY',
  petsArray
});

export const updatePets = () => ({
  type: 'UPDATE_PETS'
});