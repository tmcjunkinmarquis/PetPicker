/* eslint-disable max-len */

import { createStore } from 'redux';
import rootReducer from '../';
import * as petsReducer from '../petsReducer';
import * as userReducer from '../userReducer';

const store = createStore(rootReducer);

describe('rootReducer', () => {
  it('checks that the intial state of the root reducer matches what the child reducer returns, given an empty action', () => {
    expect(store.getState().loggedIn).toEqual(userReducer.loggedIn(false, {}));
    expect(store.getState().user).toEqual(userReducer.user({}, {}));
    expect(store.getState().pets).toEqual(
      petsReducer.pets({
        petsArray: []
      }, {})
    );
    expect(store.getState().matches).toEqual(
      userReducer.matches([], {})
    );
  });
});
