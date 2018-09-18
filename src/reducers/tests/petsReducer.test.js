/* eslint-disable max-len */

import { pets } from '../petsReducer';

describe('Pets', () => {
  it('should return default state when no action passed', () => {
    expect(pets([], {})).toEqual([]);
  });

  it('returns petsArray if passed in an action type of PETS_ARRAY', () => {
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

  it('should return petsArray if pass in an action type of UPDATE_PETS', () => {
    const initialState = {
      petsArray: [{ name: 'Puppy' }, { name: 'Doodle' }]
    };

    const mockAction = {
      type: 'UPDATE_PETS'
    };

    const expected = { petsArray: [{ name: 'Doodle' }] };

    const result = pets(initialState, mockAction);

    expect(result).toEqual(expected);
  });
});
