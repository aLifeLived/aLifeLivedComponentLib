import React from 'react';
import { Box } from '../Box';
import { SystemPressable } from '../systemPressable/SystemPressable';
import { Text } from '../text/Text';

type ModalHeaderProps = {
  onHeaderPress: () => void;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onHeaderPress }) => {
  return (
    <Box m="s" alignContent="flex-start" alignItems="flex-start">
      <SystemPressable onPress={() => onHeaderPress()}>
        <Text variant="h3" fontWeight="bold">
          X
        </Text>
      </SystemPressable>
    </Box>
  );
};
