import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { Button } from '../../../src/components/button/Button';

const mockOnPress = jest.fn();

const setup = ({ isDisabled = false, isLoading = false }) => {
  // Screen
  const utils = render(
    <Button
      title="Test button"
      onPress={mockOnPress}
      isDisabled={isDisabled}
      isLoading={isLoading}
    />
  );

  return {
    ...utils,
  };
};

describe('components >> button ', () => {
  describe('Enabled button', () => {
    test('Should render basic button correctly', () => {
      const { toJSON } = setup({ isDisabled: false, isLoading: false });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render title', () => {
      const { getByText } = setup({ isDisabled: false, isLoading: false });
      expect(getByText('TEST BUTTON')).not.toBeNull();
    });

    test('Should fire on press', () => {
      const { getByText } = setup({ isDisabled: false, isLoading: false });
      fireEvent.press(getByText('TEST BUTTON'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Disabled button', () => {
    beforeAll(() => mockOnPress.mockClear());
    test('Should render basic button correctly', () => {
      const { toJSON } = setup({ isDisabled: true, isLoading: false });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title', () => {
      const { getByText } = setup({ isDisabled: true, isLoading: false });
      expect(getByText('TEST BUTTON')).toBeDefined();
    });

    test('Should not be able to fire on press action', () => {
      const { getByText } = setup({ isDisabled: true, isLoading: false });
      fireEvent.press(getByText('TEST BUTTON'));
      expect(mockOnPress).toBeCalledTimes(0);
    });
  });

  describe('Loading button', () => {
    beforeAll(() => mockOnPress.mockClear());
    test('Should render button in loading state', () => {
      const { toJSON } = setup({ isDisabled: false, isLoading: true });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should NOT render title', () => {
      const { queryByText } = setup({ isDisabled: false, isLoading: true });
      expect(queryByText('TEST BUTTON')).toBeNull();
    });

    test('Should NOT fire on press', () => {
      const { getByTestId } = setup({ isDisabled: false, isLoading: true });
      fireEvent.press(getByTestId('QBYQCQ-button-spinner'));
      expect(mockOnPress).toBeCalledTimes(0);
    });
  });
});
