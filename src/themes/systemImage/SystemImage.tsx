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
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { Theme } from '../theme';

export const imageVariants = {
  squareAvatar: {
    width: 50,
    height: 50,
    borderRadius: 'medium',
    border: 'red',
    borderWidth: 1,
  },
  roundAvatar: {
    width: 50,
    height: 50,
    borderRadius: 'xXXlarge',
  },
};

export type StyledImageProps = FastImageProps &
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
  FastImage
);
