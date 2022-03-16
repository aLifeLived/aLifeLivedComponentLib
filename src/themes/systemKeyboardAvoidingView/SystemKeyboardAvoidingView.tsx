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
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from 'react-native';
import { Theme } from '../theme';

export type StyledKeyboardAvoidingViewProps = KeyboardAvoidingViewProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemKeyboardAvoidingView = createRestyleComponent<
  StyledKeyboardAvoidingViewProps,
  Theme
>([spacing, layout, border, backgroundColor, color], KeyboardAvoidingView);
