/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { NopeButton } from './NopeButton';

describe('NopeButton', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {};
    wrapper = shallow(<NopeButton {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
