import React from 'react';
import { render } from '../../../jest/renderUtil';

// Components
import { SystemButton } from '../../../src/themes/systemButton/SystemButton';
import { Text } from '../../../src/themes/text/Text';

const setup = () => {
  const utils = render(
    <SystemButton>
      <Text>System button</Text>
    </SystemButton>
  );

  return {
    ...utils,
  };
};

describe('themes >> systemButton', () => {
  describe('Render system button', () => {
    test('Should render system button correctly with children', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find children', () => {
      const { getByText } = setup();
      expect(getByText('System button')).not.toBeNull();
    });
  });
});
