import React from 'react';
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
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
    <SystemButton
      onPress={() => onPress()}
      borderWidth={1}
      borderRadius="medium"
      backgroundColor="surfaceLightest"
      width="100%"
    >
      <Box boxShadow="md" flexDirection="row">
        <SystemImage
          source={{ uri: imageUrl, priority: 'high' }}
          resizeMode="cover"
          width={60}
          height={60}
          borderTopLeftRadius="medium"
          borderBottomLeftRadius="medium"
        />
        <Box
          paddingLeft="s"
          justifyContent="center"
          paddingRight="s"
          borderTopRightRadius="medium"
          borderBottomRightRadius="medium"
          width="80%"
        >
          <Text variant="h3" fontWeight="bold" numberOfLines={1}>
            {title}
          </Text>
          <Text variant="caption" numberOfLines={1}>
            {subText}
          </Text>
        </Box>
      </Box>
    </SystemButton>
  );
};
