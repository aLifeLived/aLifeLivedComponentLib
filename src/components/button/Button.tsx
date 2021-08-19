import React from 'react';
import {
  StyledOpacityProps,
  SystemButton,
} from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';

interface IButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  variant?: 'cta';
  color?: string;
}

export const Button: React.FC<IButtonProps & StyledOpacityProps> = ({
  title,
  onPress,
  isDisabled,
  color,
  ...rest
}) => {
  return (
    <SystemButton
      backgroundColor={isDisabled ? 'contrastLow' : 'primary'}
      onPress={() => onPress()}
      padding="m"
      width="90%"
      borderRadius="medium"
      disabled={isDisabled}
      {...rest}
    >
      <Text variant="default" fontWeight="600" textAlign="center" color={color}>
        {title}
      </Text>
    </SystemButton>
  );
};
