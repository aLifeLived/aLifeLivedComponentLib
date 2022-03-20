import React from 'react';
import { render } from '../../../jest/renderUtil';

// Components
import { SystemKeyboardAvoidingView } from '../../../src/themes/systemKeyboardAvoidingView/SystemKeyboardAvoidingView';

const setup = () => render(<SystemKeyboardAvoidingView flex={1} />);

describe('themes >> systemKeyboardAvoidingView', () => {
  describe('Given style has been applied to avoiding view', () => {
    test('Should match snapshot with flex of 1', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
