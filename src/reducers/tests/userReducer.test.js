/* eslint-disable max-len */

import { loggedIn, user, matches } from '../userReducer';

describe('loggedIn', () => {
  it('should return default state when no action passed', () => {
    expect(loggedIn(false, {})).toEqual(false);
  });

  it('toggles boolean if passed in an action type of TOGGLE_LOGGEDIN', () => {
    const initialState = false;

    const mockAction = {
      type: 'TOGGLE_LOGGEDIN'
    };

    const result = loggedIn(initialState, mockAction);

    const expected = true;

    expect(result).toEqual(expected);
  });
});

describe('user', () => {
  it('should return default state when no action passed', () => {
    expect(user({}, {})).toEqual({});
  });

  it('returns userObj if passed in an action type of STORE_USER', () => {
    const initialState = {};

    const mockAction = {
      type: 'STORE_USER',
      userObj: { user: 'Mock user' }
    };

    const result = user(initialState, mockAction);

    const expected = { user: 'Mock user' };

    expect(result).toEqual(expected);
  });
});

describe('matches', () => {
  it('should return default state when no action passed', () => {
    expect(matches([], {})).toEqual([]);
  });

  it('returns matchesArray if passed in an action type of STORE_MATCHES', () => {
    const initialState = {};

    const mockAction = {
      type: 'STORE_MATCHES',
      matchesArray: [{ matches: 'Mock matches' }]
    };

    const result = matches(initialState, mockAction);

    const expected = [{ matches: 'Mock matches' }];

    expect(result).toEqual(expected);
  });
});
