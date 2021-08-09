import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Components
import { ModalHeader } from '../../../src/themes/modal/ModalHeader';

const mockOnHeaderPress = jest.fn();

const setup = () => {
  const utils = render(<ModalHeader onHeaderPress={mockOnHeaderPress} />);

  return {
    ...utils,
  };
};

describe('themes >> ModalHeader', () => {
  describe('Render modal header', () => {
    test('Should render modal header correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should fire onHeaderPress()', () => {
      const { getByText } = setup();
      fireEvent.press(getByText('X'));
      expect(mockOnHeaderPress).toBeCalledTimes(1);
    });
  });
});
