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
import { ScrollView, ScrollViewProps } from 'react-native';
import { Theme } from '../theme';

export type StyledScrollViewProps = ScrollViewProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemScrollView = createRestyleComponent<
  StyledScrollViewProps,
  Theme
>([spacing, layout, border, backgroundColor, color], ScrollView);
