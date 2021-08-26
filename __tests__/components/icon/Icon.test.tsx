import React from 'react';
import { render } from './../../../jest/renderUtil';
import { library } from '@fortawesome/fontawesome-svg-core';
import { iconList } from '../../../src/themes/systemIcon/IconList';

// Component
import { Icon } from '../../../src/components/icon/Icon';

library.add(iconList);
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
