const intialState = {
  petsArray: []
};

export const pets = (state = intialState, action) => {
  // console.log('petState:', state);

  switch (action.type) {
    case 'PETS_ARRAY':
      return { ...state, petsArray: action.petsArray };
    case 'UPDATE_PETS': {
      const newState = { ...state }
      const petsArray = newState.petsArray.slice(1);
      return { ...newState, petsArray };
    }
    default:
      return state;
  }
};
