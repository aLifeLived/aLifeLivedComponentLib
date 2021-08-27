import React from 'react';
import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  createRestyleComponent,
  spacing,
  SpacingProps,
  TextProps,
} from '@shopify/restyle';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { Theme } from '../theme';
import { ViewProps } from 'react-native';

export type StyledIconProps = TextProps<Theme> &
  Props &
  ViewProps &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> & { children?: React.ReactNode };

export const SystemIcon = createRestyleComponent<StyledIconProps, Theme>(
  [spacing, border, backgroundColor, color],
  FontAwesomeIcon
);
