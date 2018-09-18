/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { LikeButton } from './LikeButton';

describe('LikeButton', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {};
    wrapper = shallow(<LikeButton {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
