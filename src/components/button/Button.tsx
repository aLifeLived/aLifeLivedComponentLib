import React from 'react';
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
      backgroundColor={isDisabled ? 'backgroundContrastMid' : 'primary'}
      onPress={() => onPress()}
      padding="m"
      borderRadius="medium"
      width="100%"
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <SystemSpinner
          size="small"
          color="white"
          testID="QBYQCQ-button-spinner"
          animating
          hidesWhenStopped={true}
        />
      ) : (
        <Text variant="intro" textAlign="center" color={color}>
          {title.toUpperCase()}
        </Text>
      )}
    </SystemButton>
  );
};
