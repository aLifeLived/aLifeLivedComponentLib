import React from 'react';
import { Box } from '../Box';
import { Text } from '../text/Text';

type ModalHeroProps = {
  header: string;
};

export const ModalHero: React.FC<ModalHeroProps> = props => {
  return (
    <Box m="s">
      <Text variant="h3">{props.header}</Text>
    </Box>
  );
};
