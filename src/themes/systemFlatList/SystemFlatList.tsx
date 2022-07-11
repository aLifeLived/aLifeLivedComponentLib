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
  spacing,
  SpacingProps,
} from '@shopify/restyle';
import React from 'react';
import { FlatListProps, FlatList } from 'react-native';
import { Theme } from '../theme';

export type StyledOpacityProps = FlatListProps<unknown> &
  SpacingProps<Theme> &
  BoxProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemFlatList = createRestyleComponent<StyledOpacityProps, Theme>(
  [spacing, layout, border, backgroundColor, color],
  FlatList
);
