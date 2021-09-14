import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { Box } from '../box/Box';
import { SystemPressable } from '../systemPressable/SystemPressable';

type ModalHeaderProps = {
  onHeaderPress: () => void;
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onHeaderPress }) => {
  return (
    <Box m="s" alignContent="flex-start" alignItems="flex-start">
      <SystemPressable onPress={() => onHeaderPress()}>
        <Icon icon="times" color="surface" testID="modal-close-icon" />
      </SystemPressable>
    </Box>
  );
};
