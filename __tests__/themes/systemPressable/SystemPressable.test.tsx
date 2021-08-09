import React from 'react';
import { render } from '../../../jest/renderUtil';

// Components
import { SystemPressable } from '../../../src/themes/systemPressable/SystemPressable';
import { Text } from '../../../src/themes/text/Text';

const setup = () => {
  const utils = render(
    <SystemPressable>
      <Text>System Pressable</Text>
    </SystemPressable>
  );

  return {
    ...utils,
  };
};

describe('themes >> systemPressable', () => {
  describe('Render system pressable', () => {
    test('Should render system pressable correctly with children', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find children', () => {
      const { getByText } = setup();
      expect(getByText('System Pressable')).not.toBeNull();
    });
  });
});
