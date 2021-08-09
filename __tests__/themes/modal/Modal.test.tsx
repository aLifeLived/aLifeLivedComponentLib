import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Components
import { Modal } from '../../../src/themes/modal/Modal';
import { Text } from '../../../src/themes/text/Text';

const mockOnClose = jest.fn();

const setup = (isVisible = true) => {
  const utils = render(
    <Modal onClose={mockOnClose} isVisible={isVisible}>
      <Text>This is the children of the modal</Text>
    </Modal>
  );

  return {
    ...utils,
  };
};

describe('themes >> Modal', () => {
  describe('Render modal as visible with children', () => {
    test('Should render modal correctly with children', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find children', () => {
      const { getByText } = setup();
      expect(getByText('This is the children of the modal')).not.toBeNull();
    });

    test('Should fire onClose()', () => {
      const { getByText } = setup();
      fireEvent.press(getByText('This is the children of the modal'));
      expect(mockOnClose).toBeCalledTimes(1);
    });
  });

  describe('Should not render modal', () => {
    test('Should NOT render modal', () => {
      const { toJSON } = setup(false);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
