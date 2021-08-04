import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
// Components
import { Box } from '../Box';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

export const Modal = ({ onPress, children }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <Box flex={1} width="100%" justifyContent="center">
        <Box backgroundColor="primaryHeavy" margin="s" borderRadius="medium">
          {children}
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};
