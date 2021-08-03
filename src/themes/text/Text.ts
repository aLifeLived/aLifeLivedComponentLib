import { createText } from '@shopify/restyle';
import { Theme } from '../theme';

export const textVariants = {
  h1: {
    fontSize: 32,
    lineHeight: 38,
    color: 'contrastHighest',
  },
  h2: {
    fontSize: 24,
    lineHeight: 30,
    color: 'contrastHighest',
  },
  h3: {
    fontSize: 16,
    lineHeight: 24,
    color: 'contrastHighest',
  },
  body: {
    fontSize: 16,
    lineHeight: 20,
    color: 'contrastHighest',
  },
  caption: {
    fontSize: 14,
    lineHeight: 18,
    color: 'contrastLow',
  },
  default: {
    fontSize: 16,
    lineHeight: 20,
    color: 'contrastHighest',
  },
};

export const Text = createText<Theme>();
