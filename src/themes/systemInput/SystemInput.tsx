import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  BoxProps,
  color,
  ColorProps,
  createRestyleComponent,
  layout,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';
import { TextInput, TextInputProps } from 'react-native';
import { Theme } from '../theme';

const baseStyles = {
  borderWidth: 1,
  borderColor: 'borderColor',
  backgroundColor: 'borderColor',
  borderRadius: 'medium',
  paddingRight: 's',
  paddingTop: 'm',
  paddingBottom: 'm',
  paddingLeft: 'm',
  color: 'textContrastHigh',
};

export const inputVariants = {
  default: baseStyles,
  error: {
    ...baseStyles,
    borderColor: 'backgroundError',
    backgroundColor: 'backgroundErrorOverlay',
  },
  success: {
    ...baseStyles,
    borderColor: 'primary',
    backgroundColor: 'primaryOverlay',
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: 'borderColor',
    paddingTop: 's',
    paddingBottom: 's',
  },
};

export type StyledInputProps = TextInputProps &
  SpacingProps<Theme> &
  BoxProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  VariantProps<Theme, 'inputVariants'>;

export const SystemInput = createRestyleComponent<StyledInputProps, Theme>(
  [
    spacing,
    layout,
    border,
    backgroundColor,
    color,
    createVariant({
      themeKey: 'inputVariants',
    }),
  ],
  TextInput
);
