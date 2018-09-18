/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import IndividualMatch from './IndividualMatch';

describe('IndividualMatch', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {};
    wrapper = shallow(<IndividualMatch {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
