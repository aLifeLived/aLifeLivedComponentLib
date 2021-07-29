import React from 'react';
import { ThemeProvider } from '../themes/ThemeProvider';

export const ThemeDecorator = getStory => (
  <ThemeProvider>{getStory()}</ThemeProvider>
);
