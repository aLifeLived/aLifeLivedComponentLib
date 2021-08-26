import React from 'react';
import { render } from './../../../jest/renderUtil';

// Component
import { Icon } from '../../../src/components/icon/Icon';

const setup = () => {
  const utils = render(<Icon icon="chevron-left" />);

  return {
    ...utils,
  };
};

describe('component >> Icon', () => {
  test('Should render icon correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
