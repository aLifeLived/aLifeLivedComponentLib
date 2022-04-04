import React, { ReactNode } from 'react';

// UI
import { Box } from '../box/Box';
import { ColorThemeTokens } from '../palette';
import { SystemButton } from '../systemButton/SystemButton';

type CardContainerProps = {
  onPress: () => void;
  backgroundColor?: ColorThemeTokens;
  accessibilityLabel?: string;
  testID?: string;
  children: ReactNode;
};

export const CardContainer: React.FC<CardContainerProps> = ({
  onPress,
  backgroundColor = 'backgroundXXLow',
  accessibilityLabel,
  testID,
  children,
}) => {
  return (
    <SystemButton
      onPress={onPress}
      alignContent="space-between"
      borderRadius="large"
      backgroundColor={backgroundColor}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      <Box>{children}</Box>
    </SystemButton>
  );
};
