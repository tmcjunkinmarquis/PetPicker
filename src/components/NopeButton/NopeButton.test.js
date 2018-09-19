/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { NopeButton, mapStateToProps, mapDispatchToProps } from './NopeButton';
import * as actions from '../../actions';
import { fetchDeletePet } from '../../api_calls/api-calls';
jest.mock('../../api_calls/api-calls.js');

describe('NopeButton', () => {
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
    wrapper = shallow(<NopeButton {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleNopeClick', () => {
    it('calls fetchDeletePet', async () => {
      await wrapper.instance().handleNopeClick();

      expect(fetchDeletePet).toHaveBeenCalledTimes(1);
    });

    it('calls updatePets', async () => {
      await wrapper.instance().handleNopeClick();

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
      const petsArray = [];
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
