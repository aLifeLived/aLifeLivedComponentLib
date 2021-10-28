import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { Selector } from '../../../src/components/selector/Selector';

const mockOnPress = jest.fn();

const setup = ({ selectedValue = [] }: { selectedValue?: string[] }) => {
  const utils = render(
    <Selector
      title="Test title"
      onPress={mockOnPress}
      selectedValue={selectedValue}
      selectedValuePlaceholderValue="Test placeholder"
    />
  );

  return { ...utils };
};

describe('components >> Selector', () => {
  describe('Given the selector has no values selected', () => {
    beforeEach(() => mockOnPress.mockClear());
    test('Should match snapshot', () => {
      const { toJSON } = setup({});
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should display placeholder value text', () => {
      const { getByText } = setup({});
      expect(getByText('Test placeholder')).toBeDefined();
    });

    test('Should find title', () => {
      const { getByText } = setup({});
      expect(getByText('Test title')).toBeDefined();
    });

    test('Should fire on press action', () => {
      const { getByText } = setup({});
      fireEvent.press(getByText('Test placeholder'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Given the selector has multiple values selected', () => {
    beforeEach(() => mockOnPress.mockClear());
    test('Should match snapshot', () => {
      const { toJSON } = setup({ selectedValue: ['value1', 'value2'] });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should NOT display placeholder value text', () => {
      const { queryByText } = setup({ selectedValue: ['value1', 'value2'] });
      expect(queryByText('Test placeholder')).toBeNull();
    });

    test('Should NOT display extra comma', () => {
      const { queryByText } = setup({
        selectedValue: ['value1', 'value2'],
      });
      expect(queryByText('value1, value2,')).toBeNull();
    });

    test('Should find title', () => {
      const { getByText } = setup({});
      expect(getByText('Test title')).toBeDefined();
    });

    test('Should fire on press action', () => {
      const { getByText } = setup({ selectedValue: ['value1', 'value2'] });
      fireEvent.press(getByText('value1, value2'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Given the selector has only one selected value', () => {
    test('Should NOT display end comma', () => {
      const { queryByText } = setup({
        selectedValue: ['value1'],
      });
      expect(queryByText('value1,')).toBeNull();
    });
  });
});
