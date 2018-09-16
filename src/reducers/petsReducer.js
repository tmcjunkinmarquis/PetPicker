const intialState = {
  petsArray: [],
  pet: {}
};

export const pets = (state = intialState, action) => {
  switch (action.type) {
    case 'PETS_ARRAY':
      return { ...state, petsArray: action.petsArray };
    case 'PET':
      return { ...state, pet: action.indivPetObj };
    default:
      return state;
  }
};
