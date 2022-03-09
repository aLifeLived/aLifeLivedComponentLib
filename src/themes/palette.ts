import { opacity } from './utils';

const palette = {
  seeThrew: 'rgba(0,0,0,.5)',

  lightCyan: '#5FD2B5',
  cyan: '#67B6A8', // primary

  yellow: '#FFCB1D',

  blue: '#00B5CD',

  red100: '#D94E69',
  red80: '#F08969', // primary
  red70: '#F7DBC6',
  red05: '#F1ECE5',

  grey100: '#282828',
  grey90: '#606060',
  grey80: '#54575A',
  grey60: '#7F8183',
  grey40: '#A9ABAD',
  grey20: '#CBCBCB',
  grey10: '#EAEAEA',
  grey05: '#FBFBFB',

  black: '#000000',
  white: '#ffffff',
};

export type ColorThemeTokens = keyof typeof ColorThemeLight;

export const ColorThemeLight = {
  primary: palette.cyan,
  primaryOverlay: opacity(palette.cyan, 0.29),
  primaryContrast: palette.grey100,

  secondary: palette.red80,
  secondaryOverlay: opacity(palette.red80, 0.16),

  borderColor: opacity(palette.grey100, 0.12),

  background: palette.grey05,
  backgroundError: palette.red100,
  backgroundContrastHigh: palette.grey100,
  backgroundContrastMid: palette.grey20,
  backgroundContrastLow: palette.white,
  backgroundHighlight: palette.red70,
  backgroundVisible: palette.seeThrew,

  textPrimary: palette.cyan,
  textSecondary: palette.red80,
  textError: palette.red100,
  textContrastHigh: palette.grey100,
  textContrastMid: palette.grey80,
  textContrastLow: palette.grey60,
  textContrastXLow: palette.grey40,
  textContrastXXLow: palette.red05,

  white: palette.white,
  blue: palette.blue,
  yellow: palette.yellow,
  black: palette.black,
  transparent: '#00000000',
};
