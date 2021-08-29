import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  createRestyleComponent,
  createVariant,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';
import React from 'react';
import { Image, ImageProps } from 'react-native';
import { Theme } from '../theme';

export const imageVariants = {
  square: {},
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: 'contrastHighest',
  },
};

export type StyledImageProps = ImageProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  VariantProps<Theme, 'imageVariants'> & {
    children?: React.ReactNode;
  };

export const SystemImage = createRestyleComponent<StyledImageProps, Theme>(
  [
    spacing,
    layout,
    border,
    backgroundColor,
    color,
    createVariant({ themeKey: 'imageVariants' }),
  ],
  Image
);
