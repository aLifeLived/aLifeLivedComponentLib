import React from 'react';
import { ThemeProvider } from '../src/themes/ThemeProvider';
import { render as rtlRender } from '@testing-library/react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { iconList } from '../src/themes/systemIcon/IconList';

library.add(iconList);

function render(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything for convenience
export * from '@testing-library/react-native';

// override render method
export { render };
