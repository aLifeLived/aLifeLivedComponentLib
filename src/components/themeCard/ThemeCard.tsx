import React from 'react';
import { SystemImage } from '../../themes/systemImage/SystemImage';
import { CardContainer } from '../../themes/card/CardContainer';
import { CardHeader } from '../../themes/card/CardHeader';
import { CardContent } from '../../themes/card/CardContent';
import { Box } from '../../themes/box/Box';

type ThemeCardProps = {
  title: string;
  imageUrl: string;
  testID?: string;
  onPress: () => void;
};

export const ThemeCard: React.FC<ThemeCardProps> = ({
  title,
  imageUrl,
  testID,
  onPress,
}) => {
  return (
    <CardContainer onPress={onPress} testID={testID}>
      <Box marginLeft="s">
        <CardHeader title={title} />
      </Box>
      <CardContent
        SVG={
          <SystemImage
            source={{ uri: imageUrl, priority: 'high' }}
            resizeMode="cover"
            width={100}
            height={100}
            borderTopLeftRadius="medium"
            borderBottomLeftRadius="medium"
          />
        }
      />
    </CardContainer>
  );
};
