import { createText, ResponsiveValue } from '@shopify/restyle';
import { ColorThemeTokens } from '../palette';
import { Theme } from '../theme';

const FontFamilies = {
  sfUiTextBold: 'SFUIText-Bold',
  sfUiTextRegular: 'SFUIText-Regular',
  sfUiTextSemiBold: 'SFUIText-Semibold',
  sfUiDisplayRegular: 'SFUIDisplay-Regular',
};

type TextVariantToken =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'intro'
  | 'body'
  | 'bodySmall'
  | 'bodyXSmall'
  | 'default';

type TextVariant = {
  fontFamily: keyof typeof FontFamilies;
  fontSize: number | ResponsiveValue<number, Theme>;
  lineHeight?: number | string;
  color: ColorThemeTokens;
};

export const textVariants: Record<TextVariantToken, TextVariant> = {
  h1: {
    fontSize: 52,
    lineHeight: 52,
    color: 'textContrastHigh',
    fontFamily: 'sfUiTextBold',
  },
  h2: {
    fontSize: 32,
    lineHeight: 30,
    color: 'textContrastHigh',
    fontFamily: 'sfUiTextBold',
  },
  h3: {
    fontSize: 24,
    lineHeight: 24,
    color: 'textContrastHigh',
    fontFamily: 'sfUiTextRegular',
  },
  h4: {
    fontSize: 20,
    lineHeight: 24,
    color: 'textContrastHigh',
    fontFamily: 'sfUiTextRegular',
  },
  intro: {
    fontSize: 16,
    lineHeight: 24,
    color: 'textContrastHigh',
    fontFamily: 'sfUiTextSemiBold',
  },
  body: {
    fontSize: 18,
    lineHeight: 20,
    color: 'textContrastHigh',
    fontFamily: 'sfUiDisplayRegular',
  },
  bodySmall: {
    fontSize: 16,
    lineHeight: 20,
    color: 'textContrastHigh',
    fontFamily: 'sfUiDisplayRegular',
  },
  bodyXSmall: {
    fontSize: 14,
    lineHeight: 20,
    color: 'textContrastHigh',
    fontFamily: 'sfUiDisplayRegular',
  },
  default: {
    fontSize: 18,
    lineHeight: 20,
    color: 'textContrastHigh',
    fontFamily: 'sfUiDisplayRegular',
  },
};

export const Text = createText<Theme>();
