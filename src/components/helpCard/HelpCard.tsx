import React from 'react';
import { Box } from '../../themes/Box';
import { Text } from '../../themes/Text';

export const HelpCard: React.FC<{ title: string; subText: string }> = ({
  title,
  subText,
}) => {
  return (
    <Box margin="m" borderBottomWidth={1} paddingBottom="s">
      <Text variant="h3">{title}</Text>
      <Text variant="caption" marginTop="m">
        {subText}
      </Text>
    </Box>
  );
};
