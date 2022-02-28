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
import { Box } from '../box/Box';
import { Theme } from '../theme';

export const skeletonElementsVariants = {
  text: {
    width: '70%',
    height: 10,
    backgroundColor: 'backgroundContrastMid',
  },
  title: {
    width: '50%',
    height: 20,
    backgroundColor: 'backgroundContrastMid',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 'xXlarge',
    borderColor: 'backgroundContrastMid',
    borderWidth: 1,
  },
  thumbNail: {
    width: 50,
    height: 50,
  },
};

export type StyledSkeletonElementProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  VariantProps<Theme, 'skeletonElementsVariants'>;

export const SkeletonElement = createRestyleComponent<
  StyledSkeletonElementProps,
  Theme
>(
  [
    spacing,
    layout,
    border,
    backgroundColor,
    color,
    createVariant({ themeKey: 'skeletonElementsVariants' }),
  ],
  Box
);
