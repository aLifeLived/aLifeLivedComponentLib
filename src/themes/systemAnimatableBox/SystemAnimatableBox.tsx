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
import { View, AnimatableProperties } from 'react-native-animatable';
import { Theme } from '../theme';

export type StyledSystemAnimatableProps = AnimatableProperties<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  BoxProps<Theme> &
  ColorProps<Theme> & {
    children?: React.ReactNode;
  };

export const SystemAnimatableBox = createRestyleComponent<
  StyledSystemAnimatableProps,
  Theme
>([spacing, layout, border, backgroundColor, color], View);
