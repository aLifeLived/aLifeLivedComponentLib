import React from 'react';
import { TextInputProps } from 'react-native';
import { Box } from '../../themes/box/Box';
import {
  inputVariants,
  StyledInputProps,
  SystemInput,
} from '../../themes/systemInput/SystemInput';
import { Text } from '../../themes/text/Text';
import { Theme } from '../../themes/theme';

interface InputProps extends TextInputProps {
  variant: keyof typeof inputVariants;
  label?: string;
  labelVariant?: keyof Omit<Theme['textVariants'], 'defaults'>;
}

export const Input: React.FC<InputProps & StyledInputProps> = ({
  variant,
  label,
  labelVariant = 'caption',
  ...rest
}) => {
  return (
    <Box boxShadow="md">
      {label && (
        <Text marginBottom="s" variant={labelVariant}>
          {label}
        </Text>
      )}
      <SystemInput variant={variant} {...rest} />
    </Box>
  );
};
