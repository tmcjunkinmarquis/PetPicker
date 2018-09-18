/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Pets } from './Pets';
import { fetchPets } from '../../api_calls/api-calls';
jest.mock('../../api_calls/api-calls.js');

describe('Pets', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      loggedIn: false,
      userId: 1,
      petsArray: [{}, {}],
      storeAllPets: jest.fn(),
      history: { push: jest.fn() }
    };
    wrapper = shallow(<Pets {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('loadAllPets', async () => {
    it('calls fetchPets if loggedIn', () => {
      const petsArray = [{ name: 'Fido' }];
      mockProps.loggedIn = true;
      wrapper = shallow(<Pets {...mockProps} />, {
        disableLifecycleMethods: true
      });
      fetchPets.mockImplementation(() => Promise.resolve(petsArray));
      expect();
    });
  });
});
