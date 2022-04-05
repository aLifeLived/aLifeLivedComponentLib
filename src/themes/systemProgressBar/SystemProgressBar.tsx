import React from 'react';
import ProgressBar from 'react-native-animated-progress';
import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  createRestyleComponent,
  PositionProps,
} from '@shopify/restyle';
import { Theme } from '../theme';

export type StyledProgressBarProps = typeof ProgressBar &
  PositionProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemProgressBar = createRestyleComponent<
  StyledProgressBarProps,
  Theme
>([border, backgroundColor, color], ProgressBar);
