/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from './Profile';

describe('Profile', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      userId: '1',
      loggedIn: false,
      history: { push: jest.fn() }
    };
    wrapper = shallow(<Profile {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('sets state with event target name & value', () => {
      const mockEvent = { target: { name: 'status', value: 'adopter' } };
      const expected = { status: 'adopter' };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state()).toEqual(expect.objectContaining(expected));
    });
  });

  describe('componentDidMount', () => {
    it('calls history.push', () => {
      wrapper.instance().componentDidMount();

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
    });
  });
});
