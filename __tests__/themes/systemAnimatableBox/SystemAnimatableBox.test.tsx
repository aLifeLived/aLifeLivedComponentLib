import React from 'react';
import { render } from '../../../jest/renderUtil';

// Component
import { SystemAnimatableBox } from '../../../src/themes/systemAnimatableBox/SystemAnimatableBox';

const setup = () => {
  const utils = render(<SystemAnimatableBox />);

  return {
    ...utils,
  };
};

describe('themes >> systemAnimatableBox >> SystemAnimatableBox', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
