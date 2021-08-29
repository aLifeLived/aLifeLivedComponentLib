import { createTheme as _createTheme } from '@shopify/restyle';
import { ColorThemeLight, ColorThemeDark } from './palette';
import { textVariants } from './text/Text';
import { imageVariants } from './systemImage/SystemImage';

export type Theme = ReturnType<typeof createTheme>;
export const createTheme = (theme: 'light' | 'dark') =>
  _createTheme({
    colors: theme === 'light' ? ColorThemeLight : ColorThemeDark,
    spacing: {
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
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
    },
    textVariants,
    imageVariants,
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
