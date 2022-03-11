import React from 'react';
import { TextInputProps } from 'react-native';
import { Theme } from '../../themes/theme';

// Hooks
import { useTheme } from '../../themes/hooks/useTheme';

// UI
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import { Icon } from '../icon/Icon';
import {
  inputVariants,
  StyledInputProps,
  SystemInput,
} from '../../themes/systemInput/SystemInput';

interface InputProps extends TextInputProps {
  variant: keyof typeof inputVariants;
  label?: string;
  labelVariant?: keyof Omit<Theme['textVariants'], 'defaults'>;
}

const handleVariantState = (variant: keyof typeof inputVariants) => {
  if (variant === 'error') {
    return <ErrorIconAdornment />;
  } else if (variant === 'success') {
    return <SuccessIconAdornment />;
  } else {
    return null;
  }
};

export const Input: React.FC<InputProps & StyledInputProps> = ({
  variant,
  label,
  labelVariant = 'caption',
  ...rest
}) => {
  const endAdornmentComponent = handleVariantState(variant);
  return (
    <Box boxShadow="md">
      {label && (
        <Text marginBottom="s" variant={labelVariant}>
          {label}
        </Text>
      )}

      <Box flexDirection="row">
        <SystemInput variant={variant} {...rest} flex={1} />
        {endAdornmentComponent ? (
          <InputIconAdornment>{endAdornmentComponent}</InputIconAdornment>
        ) : null}
      </Box>
    </Box>
  );
};

const InputIconAdornment: React.FC = React.memo(({ children }) => {
  const { spacing } = useTheme();
  return (
    <Box
      position="absolute"
      right={spacing.m}
      top={0}
      height="100%"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
    >
      {children}
    </Box>
  );
});

const ErrorIconAdornment: React.FC = () => {
  return <Icon icon="exclamation-circle" color="backgroundError" size={20} />;
};

const SuccessIconAdornment: React.FC = () => {
  return <Icon icon="check-circle" color="primary" size={20} />;
};
