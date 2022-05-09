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
import AnimatedLottieView, {
  AnimatedLottieViewProps,
} from 'lottie-react-native';
import { Theme } from '../theme';

export type StyledSystemAnimatedLottieBox = AnimatedLottieViewProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  BoxProps<Theme> &
  ColorProps<Theme> & {
    children?: React.ReactNode;
  };

export const SystemAnimatedLottieBox = createRestyleComponent<
  StyledSystemAnimatedLottieBox,
  Theme
>([spacing, layout, border, backgroundColor, color], AnimatedLottieView);
