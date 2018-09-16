export const pets = (state = {}, action) => {
  switch (action.type) {
    case 'PETS_ARRAY':
      return action.userObj
    default:
      return state;
  }
};
