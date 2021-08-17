import React from 'react';
import { AnimatedBox } from '../../../src/themes/animatedBox/AnimatedBox';
import { render } from '../../../jest/renderUtil';
import { Text } from '../../../src/themes/text/Text';

describe('themes >> animatedBox', () => {
  describe('Should render animated box with text inside', () => {
    test('Render snapshot correctly', () => {
      const { toJSON } = render(
        <AnimatedBox>
          <Text variant="h1">H1 variant</Text>
        </AnimatedBox>
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
