import { useTheme as reUseTheme } from '@shopify/restyle';

import { Theme } from '../theme';

export const useTheme = () => {
  const theme = reUseTheme<Theme>();
  return theme;
};
