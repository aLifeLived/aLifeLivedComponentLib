import React from 'react';
import { ThemeProvider } from '../themes/ThemeProvider';

export const ThemeDecorator = (getStory: any) => (
  <ThemeProvider>{getStory()}</ThemeProvider>
);
