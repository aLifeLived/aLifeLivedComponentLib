import { backgroundColor } from '@shopify/restyle';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  StyledOpacityProps,
  SystemButton,
} from '../../themes/systemButton/SystemButton';
import { SystemSpinner } from '../../themes/systemSpinner/SystemSpinner';
import { Text } from '../../themes/text/Text';

interface IButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  variant?: 'cta';
  color?: string;
  isLoading?: boolean;
}

export const Button: React.FC<IButtonProps & StyledOpacityProps> = ({
  title,
  onPress,
  isDisabled,
  color,
  isLoading,
  ...rest
}) => {
  return (
    <SystemButton
      backgroundColor={isDisabled ? 'contrastLow' : 'primary'}
      onPress={() => onPress()}
      padding="m"
      borderRadius="medium"
      width="90%"
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <SystemSpinner
          size="small"
          color="white"
          testID="QBYQCQ-button-spinner"
          animating
        />
      ) : (
        <Text
          variant="default"
          fontWeight="600"
          textAlign="center"
          color={color}
        >
          {title}
        </Text>
      )}
    </SystemButton>
  );
};
