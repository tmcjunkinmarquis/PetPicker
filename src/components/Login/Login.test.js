/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Pets } from './Pets';

describe('Pets', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {};
    wrapper = shallow(<Pets {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
