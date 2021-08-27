import React from 'react';
import StorybookUIRoot from './src/storybook';
import { ThemeProvider } from './src/themes/ThemeProvider';
import { library } from '@fortawesome/fontawesome-svg-core';
import { iconList } from './src/themes/systemIcon/IconList';

library.add(iconList);

const Root = () => (
  <ThemeProvider>
    <StorybookUIRoot />
  </ThemeProvider>
);

export default Root;
