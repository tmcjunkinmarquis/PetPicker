/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { IndividualMatch } from './IndividualMatch';

describe('IndividualMatch', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      match: {
        id: 10,
        name: "Ralph",
        description: "Doggo ipsum heckin angery woofer wow such tempt fl…treat waggy wags he made many woofs noodle horse.", pic: "https://static1.squarespace.com/static/53a096cce4b…6922235/Shake+Puppies-1_Mixbreed.jpg?format=1500w"
      },
      user: 1
    };
    wrapper = shallow(<IndividualMatch {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
