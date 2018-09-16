export const toggleLoggedIn = () => ({
  type: 'TOGGLE_LOGGEDIN'
});

export const storeUser = (userObj) => ({
  type: 'STORE_USER',
  userObj
});

export const petsArray = (petsArray) => ({
  type: 'PETS_ARRAY',
  petsArray
});

export const indivPet = (indivPetObj) => ({
  type: 'PET',
  indivPetObj
});