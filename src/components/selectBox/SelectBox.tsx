import React, { ReactChild } from 'react';

// Components
import { Box } from '../../themes/box/Box';
import { ColorThemeTokens } from '../../themes/palette';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';

type SelectBoxType = {
  title: string;
  subText: string;
  isSelected: boolean;
  onPress: () => void;
  backgroundColor?: ColorThemeTokens;
  borderColor?: ColorThemeTokens;
  children?: ReactChild;
};

export const SelectBox: React.FC<SelectBoxType> = ({
  title,
  subText,
  isSelected,
  onPress,
  backgroundColor,
  borderColor,
  children,
}) => {
  return (
    <SystemButton onPress={onPress}>
      <Box
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        borderRadius="medium"
        backgroundColor={isSelected ? 'primary' : backgroundColor}
        borderWidth={1}
        borderColor={borderColor ? borderColor : 'transparent'}
        padding="s"
      >
        <Box margin="s">{children}</Box>
        <Box margin="s" alignContent="center" width="70%" flexWrap="nowrap">
          <Text variant="intro" color="textContrastHigh" textAlign="left">
            {title}
          </Text>
          <Text
            textAlign="left"
            marginTop="s"
            color="textContrastHigh"
            variant="bodyXSmall"
          >
            {subText}
          </Text>
        </Box>
      </Box>
    </SystemButton>
  );
};
