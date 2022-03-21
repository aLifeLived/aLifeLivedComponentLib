import React, { ReactChild } from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { Text } from '../../../src/themes/text/Text';
import { SelectBox } from '../../../src/components/selectBox/SelectBox';

const mockOnPress = jest.fn();

type setupProps = {
  selectedValue: boolean;
  children?: ReactChild;
};

const setup = ({ selectedValue, children }: setupProps) => {
  const utils = render(
    <SelectBox
      title="Test title"
      onPress={mockOnPress}
      isSelected={selectedValue}
      subText="Test sub text"
    >
      {children}
    </SelectBox>
  );

  return { ...utils };
};

describe('components >> Select Box', () => {
  beforeEach(() => mockOnPress.mockClear());
  describe('Given select box is NOT selected and has no children', () => {
    const setupValues: setupProps = {
      selectedValue: false,
    };
    test('Should render snapshot correctly', () => {
      const { toJSON } = setup(setupValues);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and sub text', () => {
      const { getByText } = setup(setupValues);
      expect(getByText('Test title')).toBeDefined();
      expect(getByText('Test sub text')).toBeDefined();
    });

    test('Should fire on press', () => {
      const { getByText } = setup(setupValues);
      fireEvent.press(getByText('Test title'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Given select box IS selected and has no children', () => {
    const setupValues: setupProps = {
      selectedValue: true,
    };
    test('Should render snapshot correctly', () => {
      const { toJSON } = setup(setupValues);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and sub text', () => {
      const { getByText } = setup(setupValues);
      expect(getByText('Test title')).toBeDefined();
      expect(getByText('Test sub text')).toBeDefined();
    });

    test('Should fire on press', () => {
      const { getByText } = setup(setupValues);
      fireEvent.press(getByText('Test title'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Given select box IS selected and has children', () => {
    const setupValues: setupProps = {
      selectedValue: true,
      children: <Text>TEST CHILDREN</Text>,
    };
    test('Should render snapshot correctly', () => {
      const { toJSON } = setup(setupValues);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and sub text', () => {
      const { getByText } = setup(setupValues);
      expect(getByText('Test title')).toBeDefined();
      expect(getByText('Test sub text')).toBeDefined();
    });

    test('Should fire on press', () => {
      const { getByText } = setup(setupValues);
      fireEvent.press(getByText('Test title'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });

  describe('Given select box is NOT selected and has children', () => {
    const setupValues: setupProps = {
      selectedValue: false,
      children: <Text>TEST CHILDREN</Text>,
    };
    test('Should render snapshot correctly', () => {
      const { toJSON } = setup(setupValues);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and sub text', () => {
      const { getByText } = setup(setupValues);
      expect(getByText('Test title')).toBeDefined();
      expect(getByText('Test sub text')).toBeDefined();
    });

    test('Should fire on press', () => {
      const { getByText } = setup(setupValues);
      fireEvent.press(getByText('Test title'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });
});
