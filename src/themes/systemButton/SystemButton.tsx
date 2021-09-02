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
  LayoutProps,
  spacing,
  SpacingProps,
} from '@shopify/restyle';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Theme } from '../theme';

export type StyledOpacityProps = TouchableOpacityProps &
  SpacingProps<Theme> &
  BoxProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemButton = createRestyleComponent<StyledOpacityProps, Theme>(
  [spacing, layout, border, backgroundColor, color],
  TouchableOpacity
);
