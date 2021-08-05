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
import { Pressable, PressableProps } from 'react-native';
import { Theme } from '../theme';

export type StyledOpacityProps = PressableProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemPressable = createRestyleComponent<
  StyledOpacityProps,
  Theme
>([spacing, layout, border, backgroundColor, color], Pressable);
