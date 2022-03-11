import React from 'react';
import { render } from './../../../jest/renderUtil';

// Component
import { Input } from '../../../src/components/input/Input';

const mockOnPress = jest.fn();

const setup = ({ label, variant }) => {
  const utils = render(
    <Input
      placeholder="Test placeholder"
      label={label}
      variant={variant}
      onPressIn={mockOnPress}
    />
  );

  return {
    ...utils,
  };
};

describe('component >> Input', () => {
  describe('Given input has variant of default', () => {
    describe('Given input has label', () => {
      test('Should render input with label correctly', () => {
        const { toJSON } = setup({
          label: 'This is a test label',
          variant: 'default',
        });
        expect(toJSON()).toMatchSnapshot();
      });

      test('Should find label correctly', () => {
        const { getByText } = setup({
          label: 'This is a test label',
          variant: 'default',
        });
        expect(getByText('This is a test label')).toBeDefined();
      });
    });

    describe('Given input has NO label', () => {
      test('Should render input with label correctly', () => {
        const { toJSON } = setup({
          label: undefined,
          variant: 'default',
        });
        expect(toJSON()).toMatchSnapshot();
      });

      test('Should NOT find label correctly', () => {
        const { queryByText } = setup({
          label: undefined,
          variant: 'default',
        });
        expect(queryByText('This is a test label')).toBeNull();
      });
    });

    test('Should NOT find icon', () => {
      const { queryByTestId } = setup({
        label: 'This is a test label',
        variant: 'default',
      });
      expect(queryByTestId('E7P0M-success-icon')).toBeNull();
      expect(queryByTestId('O4G7U-error-icon')).toBeNull();
    });
  });

  describe('Given input has variant SUCCESS', () => {
    test('Should match snapshot correctly', () => {
      const { toJSON } = setup({
        label: 'Success variant',
        variant: 'success',
      });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find icon', () => {
      const { getByTestId } = setup({
        label: 'Success variant',
        variant: 'success',
      });
      expect(getByTestId('E7P0M-success-icon')).toBeDefined();
    });

    test('Should find label', () => {
      const { getByText } = setup({
        label: 'Success variant',
        variant: 'success',
      });
      expect(getByText('Success variant')).toBeDefined();
    });
  });

  describe('Given input has variant ERROR', () => {
    test('Should match snapshot correctly', () => {
      const { toJSON } = setup({
        label: 'Error variant',
        variant: 'error',
      });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find icon', () => {
      const { getByTestId } = setup({
        label: 'Error variant',
        variant: 'error',
      });
      expect(getByTestId('O4G7U-error-icon')).toBeDefined();
    });

    test('Should find label', () => {
      const { getByText } = setup({
        label: 'Error variant',
        variant: 'error',
      });
      expect(getByText('Error variant')).toBeDefined();
    });
  });

  describe('Given input has variant underline', () => {
    describe('Given input has label', () => {
      test('Should render input with label correctly', () => {
        const { toJSON } = setup({
          label: 'This is a test label',
          variant: 'underline',
        });
        expect(toJSON()).toMatchSnapshot();
      });

      test('Should find label correctly', () => {
        const { getByText } = setup({
          label: 'This is a test label',
          variant: 'underline',
        });
        expect(getByText('This is a test label')).toBeDefined();
      });
    });

    describe('Given input has NO label', () => {
      test('Should render input with label correctly', () => {
        const { toJSON } = setup({
          label: undefined,
          variant: 'underline',
        });
        expect(toJSON()).toMatchSnapshot();
      });

      test('Should NOT find label correctly', () => {
        const { queryByText } = setup({
          label: undefined,
          variant: 'underline',
        });
        expect(queryByText('This is a test label')).toBeDefined();
      });
    });
  });
});
