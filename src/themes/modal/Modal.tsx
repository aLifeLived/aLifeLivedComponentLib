import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
// Components
import { Box } from '../Box';

type Props = {
  onClose: () => void;
  isVisible: boolean;
  children: React.ReactNode;
};

export const Modal = ({ onClose, isVisible = false, children }: Props) => {
  return isVisible ? (
    <Box
      flex={1}
      width="100%"
      justifyContent="center"
      position="absolute"
      bottom={0}
      top={0}
      zIndex="foregroundTop"
    >
      <TouchableWithoutFeedback onPress={() => onClose()}>
        <Box backgroundColor="contrastHigh" margin="s" borderRadius="medium">
          {children}
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  ) : null;
};