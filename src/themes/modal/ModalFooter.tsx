import React from 'react';
import { Box } from '../Box';

type ModalHeaderProps = {
  children: React.ReactNode;
};

export const ModalFooter: React.FC<ModalHeaderProps> = props => {
  return (
    <Box
      margin="m"
      flexDirection="row"
      alignContent="center"
      alignItems="center"
      alignSelf="center"
    >
      {props.children}
    </Box>
  );
};
