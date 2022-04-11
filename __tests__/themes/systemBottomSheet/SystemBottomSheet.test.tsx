import React from 'react';
import { SystemBottomSheet } from '../../../src/themes/systemBottomSheet/SystemBottomSheet';
import { fireEvent, render } from '../../../jest/renderUtil';
import { Text } from '../../../src/themes/text/Text';

const mockOnClose = jest.fn();

describe('themes >> systemBottomSheet', () => {
  beforeEach(() => mockOnClose.mockClear());
  describe('Should render systemBottomSheet box with no children', () => {
    test('Render snapshot correctly', () => {
      const { toJSON } = render(
        <SystemBottomSheet isVisible={true} onClose={mockOnClose}>
          {}
        </SystemBottomSheet>
      );
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find close button', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true} onClose={mockOnClose}>
          {}
        </SystemBottomSheet>
      );
      expect(getByText('CLOSE')).not.toBeNull();
    });

    test('Should fire onClose()', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true} onClose={mockOnClose}>
          {}
        </SystemBottomSheet>
      );

      fireEvent.press(getByText('CLOSE'));
      expect(mockOnClose).toBeCalledTimes(1);
    });
  });

  describe('Should NOT render systemBottomSheet', () => {
    test('Should not render bottom sheet', () => {
      const { toJSON } = render(
        <SystemBottomSheet isVisible={false} onClose={mockOnClose}>
          {}
        </SystemBottomSheet>
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Should render systemBottomSheet with children', () => {
    test('Should render bottom sheet with text', () => {
      const { toJSON } = render(
        <SystemBottomSheet isVisible={true} onClose={mockOnClose}>
          <Text>Hi there</Text>
        </SystemBottomSheet>
      );
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find text', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true} onClose={mockOnClose}>
          <Text>Hi there</Text>
        </SystemBottomSheet>
      );
      expect(getByText('Hi there')).not.toBeNull();
    });

    test('Should find close button', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true} onClose={mockOnClose}>
          {}
        </SystemBottomSheet>
      );
      expect(getByText('CLOSE')).not.toBeNull();
    });

    test('Should fire onClose() with children', () => {
      const { getByText } = render(
        <SystemBottomSheet isVisible={true} onClose={mockOnClose}>
          {}
        </SystemBottomSheet>
      );

      fireEvent.press(getByText('CLOSE'));
      expect(mockOnClose).toBeCalledTimes(1);
    });
  });
});
