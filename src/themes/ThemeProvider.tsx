import React from 'react';
import { ThemeProvider as _ThemeProvider } from '@shopify/restyle';
import { createTheme } from './theme';

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = createTheme();

  return <_ThemeProvider theme={theme} children={children} />;
};
