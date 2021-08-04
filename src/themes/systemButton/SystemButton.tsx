import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
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
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemButton = createRestyleComponent<StyledOpacityProps, Theme>(
  [spacing, layout, border, backgroundColor, color],
  TouchableOpacity
);
