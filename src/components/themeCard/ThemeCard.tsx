import React from 'react';
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { SystemImage } from '../../themes/systemImage/SystemImage';

type ThemeCardProps = {
  title: string;
  imageUrl?: string;
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
    <SystemButton
      onPress={() => onPress()}
      borderWidth={1}
      borderRadius="medium"
      backgroundColor="white"
      borderColor="borderColor"
    >
      <Box boxShadow="md" flexDirection="row">
        {imageUrl ? (
          <SystemImage
            source={{ uri: imageUrl, priority: 'high' }}
            resizeMode="cover"
            width={70}
            height={70}
            borderTopLeftRadius="medium"
            borderBottomLeftRadius="medium"
          />
        ) : null}
        <Box
          padding="s"
          justifyContent="center"
          borderTopRightRadius="medium"
          borderBottomRightRadius="medium"
          width="80%"
        >
          <Text variant="h4" fontWeight="bold" numberOfLines={1}>
            {title}
          </Text>
          <Text variant="bodySmall" numberOfLines={1} marginTop="xs">
            {subText}
          </Text>
        </Box>
      </Box>
    </SystemButton>
  );
};
