import React from 'react';
import { SystemBottomSheet } from '../../themes/systemBottomSheet/SystemBottomSheet';
import { Button } from '../button/Button';
import { Box } from '../../themes/box/Box';

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
        <Box width="100%" marginLeft="m" marginRight="m">
          <Button
            title="Edit story"
            onPress={() => onEditStoryPress()}
            marginBottom="s"
            backgroundColor="backgroundContrastXLow"
          />
          <Button
            title="Delete story"
            onPress={() => onRemoveStoryPress()}
            backgroundColor="backgroundError"
            color="textContrastHigh"
          />
        </Box>
      </SystemBottomSheet>
    );
  };
