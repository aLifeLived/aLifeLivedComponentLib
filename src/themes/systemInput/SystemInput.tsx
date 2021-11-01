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

export const inputVariants = {
  default: {
    borderWidth: 1,
    borderRadius: 'small',
    paddingTop: 's',
    paddingBottom: 's',
    paddingLeft: 's',
  },
  underline: {
    borderBottomWidth: 1,
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
