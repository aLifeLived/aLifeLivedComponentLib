import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { DirectionButton } from '../../../src/components/directionButton/DirectionButton';

const mockOnPress = jest.fn();
const buttonTitle = 'Test button';
const setup = ({ isDisabled = false, leftIconName = undefined }) =>
  render(
    <DirectionButton
      title={buttonTitle}
      onPress={mockOnPress}
      isDisabled={isDisabled}
      leftIconName={leftIconName}
    />
  );

describe('components >> directionButton ', () => {
  describe('Given direction button has a left icon', () => {
    test('Should render direction button correctly', () => {
      const { toJSON } = setup({
        isDisabled: false,
        leftIconName: 'microphone',
      });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render button with left icon', () => {
      const { getByTestId } = setup({
        isDisabled: false,
        leftIconName: 'microphone',
      });
      expect(getByTestId('direction-button-left-icon')).toBeDefined();
    });
  });

  describe('Given direction button is enabled', () => {
    test('Should render direction button correctly', () => {
      const { toJSON } = setup({ isDisabled: false });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render title', () => {
      const { getByText } = setup({ isDisabled: false });
      expect(getByText(buttonTitle)).toBeDefined();
    });

    test('Should fire on press', () => {
      const { getByText } = setup({ isDisabled: false });
      fireEvent.press(getByText(buttonTitle));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Given direction button is disabled', () => {
    beforeAll(() => mockOnPress.mockClear());
    test('Should find title', () => {
      const { getByText } = setup({ isDisabled: true });
      expect(getByText(buttonTitle)).toBeDefined();
    });

    test('Should NOT be able to fire on press action', () => {
      const { getByText } = setup({ isDisabled: true });
      fireEvent.press(getByText(buttonTitle));
      expect(mockOnPress).toBeCalledTimes(0);
    });
  });
});
