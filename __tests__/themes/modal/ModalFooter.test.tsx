import React from 'react';
import { render } from '../../../jest/renderUtil';

// Components
import { ModalFooter } from '../../../src/themes/modal/ModalFooter';
import { Text } from '../../../src/themes/text/Text';

const setup = () => {
  const utils = render(
    <ModalFooter>
      <Text>Modal Footer!</Text>
    </ModalFooter>
  );

  return {
    ...utils,
  };
};

describe('themes >> ModalFooter', () => {
  describe('Render modal footer', () => {
    test('Should render modal footer correctly with children', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find children', () => {
      const { getByText } = setup();
      expect(getByText('Modal Footer!')).not.toBeNull();
    });
  });
});
