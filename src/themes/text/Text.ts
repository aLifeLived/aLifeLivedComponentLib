import { createText, ResponsiveValue } from '@shopify/restyle';
import { ColorThemeTokens } from '../palette';
import { Theme } from '../theme';
import { ValueOf } from '../../ts/utils';

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
  | 'bodyXSmall';

type TextVariant = {
  fontFamily: ValueOf<typeof FontFamilies>;
  fontSize: number | ResponsiveValue<number, Theme>;
  lineHeight?: number | string;
  color: ColorThemeTokens;
};

export const textVariants: Record<TextVariantToken, TextVariant> = {
  h1: {
    fontSize: 52,
    lineHeight: 52,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextBold,
  },
  h2: {
    fontSize: 32,
    lineHeight: 40,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextBold,
  },
  h3: {
    fontSize: 24,
    lineHeight: 28.8,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextBold,
  },
  h4: {
    fontSize: 20,
    lineHeight: 24,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextRegular,
  },
  intro: {
    fontSize: 16,
    lineHeight: 24,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiTextSemiBold,
  },
  body: {
    fontSize: 18,
    lineHeight: 20,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiDisplayRegular,
  },
  bodySmall: {
    fontSize: 16,
    lineHeight: 20,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiDisplayRegular,
  },
  bodyXSmall: {
    fontSize: 14,
    lineHeight: 20,
    color: 'textContrastHigh',
    fontFamily: FontFamilies.sfUiDisplayRegular,
  },
};

export const Text = createText<Theme>();
