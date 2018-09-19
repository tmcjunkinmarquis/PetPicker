/* eslint-disable max-len */

import React from "react";
import { shallow } from "enzyme";
import { MobileNav, mapStateToProps, mapDispatchToProps } from "./MobileNav";
import * as actions from "../../actions";

describe("MobileNav", () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      loggedIn: false,
      resetStore: jest.fn()
    };
    wrapper = shallow(<MobileNav {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleLogOut", () => {
    it("calls resetStore", () => {
      window.localStorage = (function() {
        return {
          clear: jest.fn()
        };
      })();

      wrapper.instance().handleLogOut();

      expect(mockProps.resetStore).toHaveBeenCalledTimes(1);
    });

    it("calls localStorage.clear", () => {
      window.localStorage = (function() {
        return {
          clear: jest.fn()
        };
      })();

      wrapper.instance().handleLogOut();

      expect(window.localStorage.clear).toHaveBeenCalledTimes(1);
    });
  });

  describe("mapStateToProps", () => {
    it("maps state properties to props", () => {
      const mockState = {
        loggedIn: false
      };
      const expected = {
        loggedIn: false
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with the correct params on resetStore", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.resetStore();
      mappedProps.resetStore();
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
