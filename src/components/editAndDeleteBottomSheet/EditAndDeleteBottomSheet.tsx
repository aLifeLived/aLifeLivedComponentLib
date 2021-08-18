import React from 'react';
import { SystemBottomSheet } from '../../themes/systemBottomSheet/SystemBottomSheet';
import { Button } from '../button/Button';

type EditAndDeleteBottomSheetTypes = {
  isVisible: boolean;
  onRemoveStoryPress: () => void;
  onEditStoryPress: () => void;
};

export const EditAndDeleteBottomSheet: React.FC<EditAndDeleteBottomSheetTypes> =
  ({ isVisible, onRemoveStoryPress, onEditStoryPress }) => {
    return (
      <SystemBottomSheet isVisible={isVisible}>
        <Button
          title="Edit story"
          onPress={() => onEditStoryPress()}
          marginBottom="s"
        />
        <Button
          title="Remove story"
          onPress={() => onRemoveStoryPress()}
          backgroundColor="primaryRed"
        />
      </SystemBottomSheet>
    );
  };
