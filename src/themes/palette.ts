import { opacity } from './utils';

const palette = {
  yellow900: '#322e00',
  yellow800: '#645c00',
  yellow700: '#968b00',
  yellow600: '#c8b900',
  yellow500: '#fae700', // primary
  yellow400: '#fbec33',
  yellow300: '#fcf166',
  yellow200: '#fdf599',
  yellow100: '#fefacc',

  green900: '#206C5A',
  green800: '#268978',
  green700: '#2A9A87',
  green600: '#2FAB99',
  green500: '#34BAA7',
  green400: '#42C6B6',
  green300: '#60D2C5',
  green200: '#8DE0D6', // Primary
  green100: '#BAEBE6',
  green050: '#E3F7F6',

  blue900: '#003e86', // Primary
  blue800: '#005aa2',
  blue700: '#006ab3',
  blue600: '#007bc4',
  blue500: '#0088d0',
  blue400: '#3297d3',
  blue300: '#5fa8d6',
  blue200: '#8dc0e0',
  blue100: '#b8d8c',

  grey900: '#292d31', // Primary
  grey800: '#3e4246',
  grey700: '#54575a',
  grey600: '#696c6f',
  grey500: '#7f8183',
  grey400: '#a9abad',
  grey300: '#bfc0c1',
  grey200: '#d4d5d6',
  grey100: '#eaeaea',
  grey050: '#f4f5f5',

  white: '#ffffff',
  black: '#000000',
};

export type ColorThemeTokens = keyof typeof ColorThemeLight;

export const ColorThemeLight = {
  primary: palette.green200,
  primaryLight: opacity(palette.green200, 0.16),
  primaryMedium: opacity(palette.green200, 0.32),
  primaryHeavy: opacity(palette.green200, 0.64),
  primaryContrast: palette.black,

  surface: palette.grey050,
  surfaceLight: palette.grey200,
  surfaceHeavy: palette.grey300,

  contrastHighest: palette.black,
  contrastHigh: palette.grey900,
  contrastMedium: palette.grey800,
  contrastLow: palette.grey700,
  contrastLowest: palette.grey600,
  transparent: '#00000000',
};

export const ColorThemeDark = {
  primary: palette.green200,
  primaryLight: opacity(palette.green200, 0.16),
  primaryMedium: opacity(palette.green200, 0.32),
  primaryHeavy: opacity(palette.green200, 0.64),
  primaryContrast: palette.black,

  surface: palette.grey900,
  surfaceLight: palette.grey800,
  surfaceHeavy: palette.grey700,

  contrastHighest: palette.white,
  contrastHigh: palette.grey100,
  contrastMedium: palette.grey200,
  contrastLow: palette.grey300,
  contrastLowest: palette.grey400,
  transparent: '#00000000',
};
