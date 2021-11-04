import React, { ReactChild } from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { Text } from '../../../src/themes/text/Text';
import { SelectBox } from '../../../src/components/selectBox/SelectBox';

const mockOnPress = jest.fn();

type setupProps = {
  selectedValue: boolean;
  variant: 'horizontal' | 'vertical';
  children?: ReactChild;
};

const setup = ({ selectedValue, variant, children }: setupProps) => {
  const utils = render(
    <SelectBox
      title="Test title"
      onPress={mockOnPress}
      isSelected={selectedValue}
      subText="Test sub text"
      variant={variant}
    >
      {children}
    </SelectBox>
  );

  return { ...utils };
};

describe('components >> Select Box', () => {
  beforeEach(() => mockOnPress.mockClear());
  describe('Given select box has a variant of horizontal', () => {
    describe('Given select box is NOT selected and has no children', () => {
      const setupValues: setupProps = {
        selectedValue: false,
        variant: 'horizontal',
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
        variant: 'horizontal',
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
        variant: 'horizontal',
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
        variant: 'horizontal',
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

  describe('Given select box has a variant of vertical', () => {
    describe('Given select box is NOT selected and has no children', () => {
      const setupValues: setupProps = {
        selectedValue: false,
        variant: 'vertical',
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
        variant: 'vertical',
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
        variant: 'vertical',
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
        variant: 'vertical',
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
});
