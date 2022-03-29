import React from 'react';
import { render } from '../../../jest/renderUtil';
import { CardOverlay } from '../../../src/themes/card/CardOverlay';

const setup = () => render(<CardOverlay title="Test title" />);
describe('src >> themes >> card', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should find title correctly', () => {
    const { getByText } = setup();
    expect(getByText('Test title')).toBeDefined();
  });
});
