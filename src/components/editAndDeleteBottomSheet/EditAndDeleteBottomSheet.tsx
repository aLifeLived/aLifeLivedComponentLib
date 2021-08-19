import React from 'react';
import { SystemBottomSheet } from '../../themes/systemBottomSheet/SystemBottomSheet';
import { Button } from '../button/Button';

type EditAndDeleteBottomSheetTypes = {
  isVisible: boolean;
  onRemoveStoryPress: () => void;
  onEditStoryPress: () => void;
  onClose: () => void;
};

export const EditAndDeleteBottomSheet: React.FC<EditAndDeleteBottomSheetTypes> =
  ({ isVisible, onRemoveStoryPress, onEditStoryPress, onClose }) => {
    return (
      <SystemBottomSheet isVisible={isVisible} onClose={() => onClose()}>
        <Button
          title="Edit story"
          onPress={() => onEditStoryPress()}
          marginBottom="s"
          backgroundColor="surface"
        />
        <Button
          title="Delete story"
          onPress={() => onRemoveStoryPress()}
          backgroundColor="surface"
          color="primaryRed"
        />
      </SystemBottomSheet>
    );
  };
