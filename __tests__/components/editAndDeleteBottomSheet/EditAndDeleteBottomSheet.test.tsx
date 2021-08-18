import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';
import { EditAndDeleteBottomSheet } from '../../../src/components/editAndDeleteBottomSheet/EditAndDeleteBottomSheet';

const mockRemoveStoryPress = jest.fn();
const mockEditStoryPress = jest.fn();

describe('components >> EditAndDeleteBottomSheet', () => {
  describe('Bottom sheet visible', () => {
    test('Should render bottom sheet correctly', () => {
      const { toJSON } = render(
        <EditAndDeleteBottomSheet
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
          isVisible={true}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );
      expect(getByText('Edit story')).not.toBeNull();
      expect(getByText('Remove story')).not.toBeNull();
    });

    test('Should fire onRemoveStoryPress()', () => {
      const { getByText } = render(
        <EditAndDeleteBottomSheet
          isVisible={true}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );

      fireEvent.press(getByText('Remove story'));
      expect(mockRemoveStoryPress).toBeCalledTimes(1);
    });

    test('Should fire onEditStoryPress()', () => {
      const { getByText } = render(
        <EditAndDeleteBottomSheet
          isVisible={true}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );

      fireEvent.press(getByText('Edit story'));
      expect(mockEditStoryPress).toBeCalledTimes(1);
    });
  });

  describe('Bottom sheet should not be visible', () => {
    test('Should match snapshot', () => {
      const { toJSON } = render(
        <EditAndDeleteBottomSheet
          isVisible={false}
          onRemoveStoryPress={mockRemoveStoryPress}
          onEditStoryPress={mockEditStoryPress}
        />
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
