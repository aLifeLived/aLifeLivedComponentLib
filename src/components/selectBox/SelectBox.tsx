import React, { ReactChild } from 'react';

// Components
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';

type SelectBoxType = {
  variant: 'horizontal' | 'vertical';
  title: string;
  subText: string;
  isSelected: boolean;
  onPress: () => void;
  children?: ReactChild;
};

export const SelectBox: React.FC<SelectBoxType> = ({
  variant,
  title,
  subText,
  isSelected,
  onPress,
  children,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box
        flexDirection={variant === 'horizontal' ? 'row' : 'column'}
        alignContent="center"
        alignItems="center"
        borderWidth={1}
        borderColor="borderColor"
        borderRadius="medium"
        backgroundColor={isSelected ? 'primary' : 'white'}
        boxShadow="md"
      >
        <Box margin="s">{children}</Box>
        <Box margin="s" alignContent="center" width="80%" flexWrap="nowrap">
          <Text
            variant="h3"
            fontWeight="bold"
            color="textContrastHigh"
            textAlign={variant === 'horizontal' ? 'left' : 'center'}
          >
            {title}
          </Text>
          <Text
            textAlign={variant === 'horizontal' ? 'left' : 'center'}
            marginTop="s"
            color="textContrastHigh"
            variant="caption"
          >
            {subText}
          </Text>
        </Box>
      </Box>
    </SystemButton>
  );
};
