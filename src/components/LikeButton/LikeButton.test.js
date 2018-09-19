/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { LikeButton, mapStateToProps, mapDispatchToProps } from './LikeButton';
import * as actions from '../../actions';
import { fetchLikePostPet } from '../../api_calls/api-calls';
jest.mock('../../api_calls/api-calls.js');

describe('LikeButton', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      petsArray: [{}, {}],
      userId: 1,
      storeAllPets: jest.fn(),
      updatePets: jest.fn()
    };
    wrapper = shallow(<LikeButton {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleLikeClick', () => {
    it('calls fetchLikePostPet', async () => {
      await wrapper.instance().handleLikeClick();

      expect(fetchLikePostPet).toHaveBeenCalledTimes(1);
    });

    it('calls updatePets', async () => {
      await wrapper.instance().handleLikeClick();

      expect(mockProps.updatePets).toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        user: {
          id: '3242'
        },
        pets: {
          petsArray: []
        }
      };
      const expected = {
        userId: '3242',
        petsArray: []
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct params on storeAllPets', () => {
      const petsArray = [{}];
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.petsArray(petsArray);
      mappedProps.storeAllPets(petsArray);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on updatePets', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.updatePets();
      mappedProps.updatePets();
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
