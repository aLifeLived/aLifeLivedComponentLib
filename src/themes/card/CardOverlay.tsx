import React from 'react';

// UI
import { BlurLayout } from '../systemBlurLayout/SystemBlurLayout';
import { Text } from '../text/Text';

type CardOverlayProps = {
  title: string;
};

export const CardOverlay: React.FC<CardOverlayProps> = ({ title }) => {
  return (
    <BlurLayout
      tint="dark"
      intensity={80}
      backgroundColor="blue"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      padding="s"
      borderRadius="large"
      overflow="hidden"
    >
      <Text textAlign="center" color="textContrastXXLow" variant="h4">
        {title}
      </Text>
    </BlurLayout>
  );
};
