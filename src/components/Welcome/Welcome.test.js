/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';
import { fetchWelcomePet } from '../../api_calls/api-calls';
jest.mock('../../api_calls/api-calls.js');

describe('welcome', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {};
    wrapper = shallow(<Welcome {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('loadWelcomePet', () => {
    it('calls fetchWelcomePet', async () => {
      await wrapper.instance().loadWelcomePet();

      expect(fetchWelcomePet).toHaveBeenCalledTimes(1);
    });

    it('sets state.pet', async () => {
      await wrapper.instance().loadWelcomePet();

      expect(wrapper.state().pet).toEqual(undefined);
    });
  });

  describe('componentDidMount', () => {
    it('calls loadWelcomePet', async () => {
      const loadWelcomePet = (wrapper.instance().loadWelcomePet = jest.fn());

      await wrapper.instance().componentDidMount();

      expect(loadWelcomePet).toHaveBeenCalledTimes(1);
    });
  });
});
