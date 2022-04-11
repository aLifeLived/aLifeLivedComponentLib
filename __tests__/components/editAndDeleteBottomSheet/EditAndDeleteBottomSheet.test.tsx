import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';
import { EditAndDeleteBottomSheet } from '../../../src/components/editAndDeleteBottomSheet/EditAndDeleteBottomSheet';

const mockRemoveStoryPress = jest.fn();
const mockEditStoryPress = jest.fn();
const mockOnClose = jest.fn();

describe('components >> EditAndDeleteBottomSheet', () => {
  describe('Bottom sheet visible', () => {
    test('Should render bottom sheet correctly', () => {
      const { toJSON } = render(
        <EditAndDeleteBottomSheet
          onClose={mockOnClose}
          isVisible={true}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should get button titles', () => {
      const { getByText } = render(
        <EditAndDeleteBottomSheet
          onClose={mockOnClose}
          isVisible={true}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );
      expect(getByText('EDIT STORY')).not.toBeNull();
      expect(getByText('DELETE STORY')).not.toBeNull();
    });

    test('Should fire onRemoveStoryPress()', () => {
      const { getByText } = render(
        <EditAndDeleteBottomSheet
          onClose={mockOnClose}
          isVisible={true}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );

      fireEvent.press(getByText('DELETE STORY'));
      expect(mockRemoveStoryPress).toBeCalledTimes(1);
    });

    test('Should fire onEditStoryPress()', () => {
      const { getByText } = render(
        <EditAndDeleteBottomSheet
          onClose={mockOnClose}
          isVisible={true}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );

      fireEvent.press(getByText('EDIT STORY'));
      expect(mockEditStoryPress).toBeCalledTimes(1);
    });
  });

  describe('Bottom sheet should not be visible', () => {
    test('Should match snapshot', () => {
      const { toJSON } = render(
        <EditAndDeleteBottomSheet
          onClose={mockOnClose}
          isVisible={false}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
