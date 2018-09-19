/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import * as actions from '../../actions';
import {
  fetchMatches,
  fetchSignUp,
  fetchUserData
} from '../../api_calls/api-calls';
jest.mock('../../api_calls/api-calls.js');

describe('Login', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      toggleLoggedIn: jest.fn(),
      storeUser: jest.fn(),
      history: { push: jest.fn() },
      storeMatches: jest.fn(),
      userId: 1
    };
    wrapper = shallow(<Login {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('getMatches', () => {
    it('calls fetchMatches', async () => {
      await wrapper.instance().getMatches();

      expect(fetchMatches).toHaveBeenCalledTimes(1);
    });

    it('calls storeMatches', async () => {
      await wrapper.instance().getMatches();

      expect(mockProps.storeMatches).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleChange', () => {
    it('sets state with event target name & value', () => {
      const mockEvent = { target: { name: 'role', value: 'adopter' } };
      const expected = { role: 'adopter' };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state()).toEqual(expect.objectContaining(expected));
    });
  });

  describe('handleSubmit', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      wrapper.instance().handleSubmit(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls alert if username field is empty', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      window.alert = jest.fn();

      await wrapper.instance().handleSubmit(mockEvent);

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls alert if password field is empty', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        username: 'Mock Name'
      });
      window.alert = jest.fn();

      await wrapper.instance().handleSubmit(mockEvent);

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls fetchUserData if username & password provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        username: 'Mock Name',
        password: 'Mock Password'
      });

      await wrapper.instance().handleSubmit(mockEvent);

      expect(fetchUserData).toHaveBeenCalledTimes(1);
    });

    it('calls toggleLoggedIn if username & password provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        username: 'Mock Name',
        password: 'Mock Password'
      });

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockProps.toggleLoggedIn).toHaveBeenCalledTimes(1);
    });

    it('calls storeUser if username & password provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        username: 'Mock Name',
        password: 'Mock Password'
      });

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockProps.storeUser).toHaveBeenCalledTimes(1);
    });

    it('calls history.push if username & password provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        username: 'Mock Name',
        password: 'Mock Password'
      });

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleSignUpSubmit', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls alert if newUsername field is empty', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      window.alert = jest.fn();

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls alert if newPassword field is empty', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name'
      });
      window.alert = jest.fn();

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls alert if role field is empty', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name',
        newPassword: 'Mock Password'
      });
      window.alert = jest.fn();

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls alert if description field is empty', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name',
        newPassword: 'Mock Password',
        role: 'adopter'
      });
      window.alert = jest.fn();

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls alert if pic field is empty', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name',
        newPassword: 'Mock Password',
        role: 'adopter',
        description: 'human'
      });
      window.alert = jest.fn();

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(window.alert).toHaveBeenCalledTimes(1);
    });

    it('calls fetchSignUp if all info provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name',
        newPassword: 'Mock Password',
        role: 'adopter',
        description: 'human',
        pic: 'www.pic.com'
      });

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(fetchSignUp).toHaveBeenCalledTimes(1);
    });

    it('calls toggleLoggedIn if all info provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name',
        newPassword: 'Mock Password',
        role: 'adopter',
        description: 'human',
        pic: 'www.pic.com'
      });

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(mockProps.toggleLoggedIn).toHaveBeenCalledTimes(1);
    });

    it('calls storeUser if all info provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name',
        newPassword: 'Mock Password',
        role: 'adopter',
        description: 'human',
        pic: 'www.pic.com'
      });

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(mockProps.storeUser).toHaveBeenCalledTimes(1);
    });

    it('calls history.push if username & password provided', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.setState({
        newUsername: 'Mock Name',
        newPassword: 'Mock Password',
        role: 'adopter',
        description: 'human',
        pic: 'www.pic.com'
      });

      await wrapper.instance().handleSignUpSubmit(mockEvent);

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        user: {
          id: '3242'
        }
      };
      const expected = {
        userId: '3242'
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct params on toggleLoggedIn', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.toggleLoggedIn();
      mappedProps.toggleLoggedIn();
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on storeUser', () => {
      const user = { name: 'Mock user' };
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.storeUser(user);
      mappedProps.storeUser(user);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on storeMatches', () => {
      const matchesArray = [{ name: 'Mock user' }];
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.storeMatches(matchesArray);
      mappedProps.storeMatches(matchesArray);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
