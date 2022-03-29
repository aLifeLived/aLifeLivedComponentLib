import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
// Components
import { Box } from '../box/Box';

type ModalProps = {
  onClose: () => void;
  isVisible: boolean;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  onClose,
  isVisible = false,
  children,
}) => {
  return isVisible ? (
    <TouchableWithoutFeedback onPress={() => onClose()}>
      <Box
        flex={1}
        width="100%"
        justifyContent="center"
        position="absolute"
        bottom={0}
        top={0}
        zIndex="foregroundTop"
      >
        <Box
          backgroundColor="backgroundContrastHigh"
          margin="s"
          borderRadius="medium"
        >
          {children}
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  ) : null;
};
