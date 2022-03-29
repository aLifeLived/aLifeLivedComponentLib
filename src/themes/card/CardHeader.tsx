import React from 'react';

// UI
import { Box } from '../box/Box';
import { Text } from '../text/Text';

type CardHeaderProps = {
  title: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ title }) => {
  return (
    <Box paddingRight="m" paddingTop="s" alignSelf="flex-end">
      <Text variant="h4">{title}</Text>
    </Box>
  );
};
