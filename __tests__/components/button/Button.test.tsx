import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { Button } from '../../../src/components/button/Button';

const mockOnPress = jest.fn();

const setup = (isDisabled = false) => {
  // Screen
  const utils = render(
    <Button title="Test button" onPress={mockOnPress} isDisabled={isDisabled} />
  );

  return {
    ...utils,
  };
};

describe('components >> button ', () => {
  describe('Enabled button', () => {
    test('Should render basic button correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render title', () => {
      const { getByText } = setup();
      expect(getByText('Test button')).not.toBeNull();
    });

    test('Should fire on press', () => {
      const { getByText } = setup();
      fireEvent.press(getByText('Test button'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Disabled button', () => {
    beforeAll(() => mockOnPress.mockClear());
    test('Should render basic button correctly', () => {
      const { toJSON } = setup(true);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should not be able to fire on press action', () => {
      const { getByText } = setup(true);
      fireEvent.press(getByText('Test button'));
      expect(mockOnPress).toBeCalledTimes(0);
    });
  });
});
