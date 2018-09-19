/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Pets, mapStateToProps, mapDispatchToProps } from './Pets';
import * as actions from '../../actions';
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

  describe('loadAllPets', () => {
    it('calls fetchPets if loggedIn', async () => {
      const petsArray = [{ name: 'Fido' }];
      mockProps.loggedIn = true;
      wrapper = shallow(<Pets {...mockProps} />, {
        disableLifecycleMethods: true
      });

      fetchPets.mockImplementation(() => Promise.resolve(petsArray));

      await wrapper.instance().loadAllPets();

      expect(fetchPets).toHaveBeenCalledTimes(1);
    });

    it('calls alert if loggedIn', async () => {
      const petsArray = [];
      mockProps.loggedIn = true;
      wrapper = shallow(<Pets {...mockProps} />, {
        disableLifecycleMethods: true
      });
      window.alert = jest.fn();

      fetchPets.mockImplementation(() => Promise.resolve(petsArray));

      await wrapper.instance().loadAllPets();

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls storeAllPets if loggedIn', async () => {
      const petsArray = [{ name: 'Fido' }];
      mockProps.loggedIn = true;
      wrapper = shallow(<Pets {...mockProps} />, {
        disableLifecycleMethods: true
      });

      fetchPets.mockImplementation(() => Promise.resolve(petsArray));

      await wrapper.instance().loadAllPets();

      expect(mockProps.storeAllPets).toHaveBeenCalledTimes(1);
    });

    it('calls history.push if not loggedIn', async () => {
      await wrapper.instance().loadAllPets();

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
    });
  });

  describe('loadPet', () => {
    it('calls loadAllPets if no petsArray is empty', () => {
      mockProps.petsArray = [];
      wrapper = shallow(<Pets {...mockProps} />, {
        disableLifecycleMethods: true
      });
      const loadAllPets = (wrapper.instance().loadAllPets = jest.fn());

      wrapper.instance().loadPet();

      expect(loadAllPets).toHaveBeenCalledTimes(1);
    });
  });

  describe('componentDidMount', () => {
    it('calls loadAllPets', async () => {
      const loadAllPets = (wrapper.instance().loadAllPets = jest.fn());

      await wrapper.instance().componentDidMount();

      expect(loadAllPets).toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        loggedIn: false,
        user: {
          id: '3242'
        },
        pets: {
          petsArray: []
        }
      };
      const expected = {
        loggedIn: false,
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
  });
});
