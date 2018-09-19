/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Matches, mapStateToProps } from './Matches';

describe('Matches', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      history: { push: jest.fn() },
      matches: [{}, {}],
      loggedIn: false,
      userId: 1,
      storeMatches: jest.fn()
    };
    wrapper = shallow(<Matches {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('makeIndividualMatches', () => {
    it('returns and array of <IndividualMatch /> for each match', () => {
      const makeIndividualMatches = wrapper.instance().makeIndividualMatches();

      expect(Array.isArray(makeIndividualMatches)).toBe(true);
      expect(makeIndividualMatches).toHaveLength(2);
    });
  });

  describe('componentDidMount', () => {
    it('calls history.push', () => {
      wrapper.instance().componentDidMount();

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        loggedIn: false,
        user: {
          id: '3242'
        },
        matches: [{}]
      };
      const expected = {
        loggedIn: false,
        userId: '3242',
        matches: [{}]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
