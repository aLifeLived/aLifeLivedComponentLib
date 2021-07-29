import React from 'react';
import StorybookUIRoot from './src/storybook';
import { ThemeProvider } from './src/themes/ThemeProvider';

const Root = () => (
  <ThemeProvider>
    <StorybookUIRoot />
  </ThemeProvider>
);
export default Root;
