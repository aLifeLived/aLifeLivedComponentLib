import React from 'react';
import { render } from '../../../jest/renderUtil';

// Component
import { SystemAnimatedLottieBox } from '../../../src/themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';

const setup = () =>
  render(
    <SystemAnimatedLottieBox
      source={'./../../../src/assets/lottie/record-button.json'}
    />
  );

describe('themes >> systemAnimatedLottieBox >> SystemAnimatedLottieBox', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
