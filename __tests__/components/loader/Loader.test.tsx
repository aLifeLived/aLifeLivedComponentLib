import React from 'react';
import { render } from '../../../jest/renderUtil';

// Component
import { Loader } from '../../../src/components/loader/Loader';

const setup = () => render(<Loader />);

describe('src >> components >> loader', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
