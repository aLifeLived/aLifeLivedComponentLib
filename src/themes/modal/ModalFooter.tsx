import React from 'react';
import { Box } from '../Box';

type ModalHeaderProps = {
  children: React.ReactNode;
};

export const ModalFooter: React.FC<ModalHeaderProps> = props => {
  return (
    <Box m="s" flexDirection="row">
      {props.children}
    </Box>
  );
};
