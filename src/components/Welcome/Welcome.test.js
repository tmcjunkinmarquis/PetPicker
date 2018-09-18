/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';
import { fetchWelcomePet } from '../../api_calls/api-calls';
jest.mock('../../api_calls/api-calls.js', () => {
  return {
    fetchWelcomePet: jest.fn()
  };
});

describe('welcome', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Welcome {...mockProps} />, {
      disableLifecycleMethods: true
    });
    jest.resetAllMocks();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('loadWelcomePet', () => {
    it('calls fetchWelcomePet', async () => {
      await wrapper.instance().loadWelcomePet();

      expect(fetchWelcomePet).toHaveBeenCalledTimes(1);
    });

    it('sets state.pet with pet ', async () => {
      const expected = {
        name: 'betsy'
      };

      console.log('fetchWelcomePet: ', fetchWelcomePet);

      fetchWelcomePet.mockImpementation(() => {
        return { name: 'betsy' };
      });

      await wrapper.instance().loadWelcomePet();

      expect(wrapper.state().pet).toEqual(expected);
    });
  });
});
