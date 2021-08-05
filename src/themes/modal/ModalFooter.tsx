import React from 'react';
import { Box } from '../Box';

type ModalHeaderProps = {
  children: React.ReactNode;
};

export const ModalFooter: React.FC<ModalHeaderProps> = props => {
  return (
    <Box margin="m" flexDirection="row" alignSelf="center" flexWrap="wrap">
      {props.children}
    </Box>
  );
};
