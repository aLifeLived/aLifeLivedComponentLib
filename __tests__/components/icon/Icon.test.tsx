import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { Icon } from '../../../src/components/icon/Icon';

const mockOnPress = jest.fn();
const setup = (onPress = null) => {
  const utils = render(
    <Icon icon="chevron-left" onPress={onPress} testID="test-icon" />
  );

  return {
    ...utils,
  };
};

describe('component >> Icon', () => {
  describe('Default icon', () => {
    test('Should render icon correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Button icon', () => {
    test('Should render icon with button', () => {
      const { toJSON } = setup(mockOnPress);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should press icon', () => {
      const { getByTestId } = setup(mockOnPress);
      fireEvent.press(getByTestId('test-icon'));
      expect(mockOnPress).toBeCalledTimes(1);
    });
  });
});
