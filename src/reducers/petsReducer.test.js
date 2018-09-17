import { pets } from "./petsReducer";

describe('pets', () => {

  it('should add petsArray if pass in an action type of PETS_ARRAY', () => {
    const initialState = [];
    const mockAction = {
      type: 'PETS_ARRAY',
      petsArray: [{ name: 'Space Jam' }]
    };

    const result = pets(initialState, mockAction);

    const expected = { petsArray: [{ name: 'Space Jam' }] };

    expect(result).toEqual(expected);
  });

  it('should return state if it is passed an action that does not have a type of PETS_ARRAY', () => {
    const initialState = [];
    const mockAction = {
      type: 'YTHOU',
      petsArray: [{ name: 'Space Jam' }]
    };

    const result = pets(initialState, mockAction);

    expect(result).toEqual(initialState);
  });
});