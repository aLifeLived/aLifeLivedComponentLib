import { createText } from '@shopify/restyle';
import { Theme } from '../theme';

export const textVariants = {
  h1: {
    fontSize: 32,
    lineHeight: 38,
    color: 'textContrastHigh',
  },
  h2: {
    fontSize: 24,
    lineHeight: 30,
    color: 'textContrastHigh',
  },
  h3: {
    fontSize: 16,
    lineHeight: 24,
    color: 'textContrastHigh',
  },
  body: {
    fontSize: 16,
    lineHeight: 20,
    color: 'textContrastHigh',
  },
  caption: {
    fontSize: 14,
    lineHeight: 18,
    color: 'textContrastLow',
  },
  default: {
    fontSize: 16,
    lineHeight: 20,
    color: 'textContrastHigh',
  },
};

export const Text = createText<Theme>();
