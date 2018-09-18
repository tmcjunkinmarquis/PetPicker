/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import HaveWantPetButton from './HaveWantPetButton';

describe('HaveWantPetButton', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {};
    wrapper = shallow(<HaveWantPetButton {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
