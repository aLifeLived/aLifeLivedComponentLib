import React from 'react';
import { render } from '../../../jest/renderUtil';
import { CardContent } from '../../../src/themes/card/CardContent';
import COVIDThemeSVG from '../../../src/assets/svg/covid-theme.svg';

const setup = () => render(<CardContent SVG={<COVIDThemeSVG />} />);
describe('src >> themes >> card', () => {
  test('Should match snapshot and render SVG', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
