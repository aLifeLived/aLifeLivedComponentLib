import React from 'react';
import { Box } from '../Box';
import { Text } from '../text/Text';

type ModalHeaderProps = {
  header: string;
};

export const ModalContent: React.FC<ModalHeaderProps> = props => {
  return (
    <Box m="s">
      <Text variant="h3" textAlign="center">
        {props.header}
      </Text>
    </Box>
  );
};
