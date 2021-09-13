import React from 'react';
import {
  createBox,
  createVariant,
  createRestyleComponent,
  VariantProps,
  BoxProps,
  RestyleFunctionContainer,
} from '@shopify/restyle';
import { ViewProps } from 'react-native';
import { Theme } from '../theme';

const variant = createVariant<Theme>({
  property: 'boxShadow',
  themeKey: 'shadows',
}) as RestyleFunctionContainer<
  VariantProps<Theme, 'shadows', 'boxShadow'>,
  Theme,
  'boxShadow',
  'shadows'
>;

export type StyledBoxProps = BoxProps<Theme> &
  ViewProps &
  VariantProps<Theme, 'shadows', 'boxShadow'> & {
    children?: React.ReactNode;
  };

export const Box = createRestyleComponent<StyledBoxProps, Theme>(
  [variant],
  createBox<Theme>()
);
