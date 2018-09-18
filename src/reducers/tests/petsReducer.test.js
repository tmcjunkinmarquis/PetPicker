import { pets } from "../petsReducer";

describe('pets', () => {

  it('should add petsArray if pass in an action type of PETS_ARRAY', () => {
    const initialState = {
      petsArray: []
    };
    const mockAction = {
      type: 'PETS_ARRAY',
      petsArray: [{ name: 'Pupper' }]
    };

    const result = pets(initialState, mockAction);

    const expected = { petsArray: [{ name: 'Pupper' }] };

    expect(result).toEqual(expected);
  });

  it('should return state if it is passed an action that does not have a type of PETS_ARRAY', () => {
    const initialState = {
      petsArray: []
    };
    const mockAction = {
      type: 'YTHOU',
      petsArray: [{ name: 'Pupper' }]
    };

    const result = pets(initialState, mockAction);

    expect(result).toEqual(initialState);
  });

  it('should add petsArray if pass in an action type of UPDATE_PETS', () => {
    const initialState = {
      petsArray: []
    };
    const newMockState = { ...initialState };
    const mockAction = {
      type: 'UPDATE_PETS',
      petsArray: [{ name: 'Pupper' }]
    };

    const result = pets(newMockState, mockAction);

    const expected = { petsArray: [{ name: 'Pupper' }] };

    expect(result).toEqual(expected);
  });
});