import React from 'react';
import { Box, Text } from '../..';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { SystemImage } from '../../themes/systemImage/SystemImage';

type ThemeCardProps = {
  title: string;
  imageUrl: string;
  subText: string;
  onPress: () => void;
};

export const ThemeCard: React.FC<ThemeCardProps> = ({
  title,
  imageUrl,
  subText,
  onPress,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box>
        <SystemImage source={{ uri: imageUrl, priority: 'high' }} />
        <Box>
          <Text variant="h3">{title}</Text>
          <Text variant="caption">{subText}</Text>
        </Box>
      </Box>
    </SystemButton>
  );
};
