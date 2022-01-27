import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  BoxProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
} from '@shopify/restyle';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { Theme } from '../theme';

export type StyledSpinnerProps = ActivityIndicatorProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BoxProps<Theme> &
  BackgroundColorProps<Theme>;

export const SystemSpinner = createRestyleComponent<StyledSpinnerProps, Theme>(
  [spacing, layout, border, backgroundColor],
  ActivityIndicator
);
