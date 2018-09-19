/* eslint-disable max-len */

import React from "react";
import { shallow } from "enzyme";
import { IndividualMatch } from "./IndividualMatch";
import { fetchPostMakeMatch } from "../../api_calls/api-calls";
jest.mock("../../api_calls/api-calls.js");

describe("IndividualMatch", () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      match: {
        id: 10,
        name: "Ralph",
        description:
          "Doggo ipsum heckin angery woofer wow such tempt fl…treat waggy wags he made many woofs noodle horse.",
        pic:
          "https://static1.squarespace.com/static/53a096cce4b…6922235/Shake+Puppies-1_Mixbreed.jpg?format=1500w"
      },
      user: 1
    };
    wrapper = shallow(<IndividualMatch {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it("matches the snapshot when match is an not an owner", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("matches the snapshot when match is an owner", () => {
    mockProps.match.owner = true;
    wrapper = shallow(<IndividualMatch {...mockProps} />, {
      disableLifecycleMethods: true
    });

    expect(wrapper).toMatchSnapshot();
  });
});
