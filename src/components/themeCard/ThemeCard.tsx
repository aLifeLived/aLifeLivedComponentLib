import React from 'react';
import { SystemImage } from '../../themes/systemImage/SystemImage';
import { CardContainer } from '../../themes/card/CardContainer';
import { CardHeader } from '../../themes/card/CardHeader';
import { CardContent } from '../../themes/card/CardContent';

type ThemeCardProps = {
  title: string;
  imageUrl: string;
  onPress: () => void;
};

export const ThemeCard: React.FC<ThemeCardProps> = ({
  title,
  imageUrl,
  onPress,
}) => {
  return (
    <CardContainer onPress={onPress}>
      <CardHeader title={title} />
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
