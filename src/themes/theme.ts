import { createTheme as _createTheme } from '@shopify/restyle';
import { ColorThemeLight } from './palette';
import { textVariants } from './text/Text';
import { imageVariants } from './systemImage/SystemImage';
import { inputVariants } from './systemInput/SystemInput';
import { skeletonElementsVariants } from './loadingSkeletons/SkeletonElement';

export type Theme = ReturnType<typeof createTheme>;
export const createTheme = () =>
  _createTheme({
    colors: ColorThemeLight,
    spacing: {
      xs: 2,
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
      xxl: 60,
      bottomNavBar: 160,
    },
    breakpoints: {
      phone: 0,
      tablet: 768,
    },
    borderRadii: {
      small: 4,
      medium: 8,
      large: 16,
      xlarge: 24,
      xXlarge: 48,
      xXXlarge: 96,
    },
    shadows: {
      md: {
        shadowColor: 'primaryContrast',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 2,
      },
      mdHeavy: {
        shadowColor: 'primaryContrast',
        shadowOpacity: 0.2,
        shadowOffset: { width: 40, height: 40 },
        shadowRadius: 10,
        elevation: 4,
      },
    },
    textVariants,
    imageVariants,
    inputVariants,
    skeletonElementsVariants,
    zIndices: {
      foregroundTop: 100,
      foregroundMiddle: 90,
      foregroundBottom: 80,
      middleGroundTop: 70,
      middleGroundMiddle: 60,
      middleGroundBottom: 50,
      backgroundTop: 40,
      backgroundMiddle: 30,
      backgroundBottom: 20,
    },
  });
