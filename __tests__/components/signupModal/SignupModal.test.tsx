import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { SignupModal } from '../../../src/components/signupModal/SignupModal';

const mockOnClose = jest.fn();
const mockOnSignupPress = jest.fn();
const mockOnLoginPress = jest.fn();

const setup = (isVisible = true) => {
  // Screen
  const utils = render(
    <SignupModal
      isVisible={isVisible}
      onClose={mockOnClose}
      onLoginPress={mockOnLoginPress}
      onSignupPress={mockOnSignupPress}
    />
  );

  return {
    ...utils,
  };
};

describe('component >> signupModal', () => {
  describe('Modal is visible', () => {
    test('Should render signup modal correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render correct text', () => {
      const { getByText } = setup();
      expect(getByText('Welcome! 👋')).not.toBeNull();
      expect(
        getByText('To access all of A Life Lived please login or signup')
      ).not.toBeNull();
    });

    test('Should fire modal close', () => {
      const { getByText } = setup();
      fireEvent.press(getByText('X'));
      expect(mockOnClose).toBeCalledTimes(1);
    });

    test('Should fire onSignupPress()', () => {
      const { getByText } = setup();
      fireEvent.press(getByText('Signup'));
      expect(mockOnSignupPress).toBeCalledTimes(1);
    });

    test('Should fire onLoginPress()', () => {
      const { getByText } = setup();
      fireEvent.press(getByText('Login'));
      expect(mockOnLoginPress).toBeCalledTimes(1);
    });
  });

  describe('Modal is NOT visible', () => {
    test('not render modal', () => {
      const { toJSON } = setup(false);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
