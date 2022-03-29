import React from 'react';
import { render } from '../../../jest/renderUtil';
import { CardHeader } from '../../../src/themes/card/CardHeader';

const setup = () => render(<CardHeader title="Test title" />);
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
