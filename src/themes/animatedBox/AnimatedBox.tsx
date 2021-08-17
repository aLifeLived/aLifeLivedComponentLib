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
import { Animated, ViewProps } from 'react-native';
import { Theme } from '../theme';

export type StyledOpacityProps = Animated.AnimatedProps<ViewProps> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const AnimatedBox = createRestyleComponent<StyledOpacityProps, Theme>(
  [spacing, layout, border, backgroundColor, color],
  Animated.View
);
