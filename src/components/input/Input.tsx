import React from 'react';
import { TextInputProps } from 'react-native';
import { Box } from '../../themes/box/Box';
import {
  inputVariants,
  SystemInput,
} from '../../themes/systemInput/SystemInput';
import { Text } from '../../themes/text/Text';

interface InputProps extends TextInputProps {
  variant: keyof typeof inputVariants;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ variant, label, ...rest }) => {
  return (
    <Box boxShadow="md">
      {label && <Text marginBottom="s">{label}</Text>}
      <SystemInput variant={variant} {...rest} />
    </Box>
  );
};
