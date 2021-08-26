import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { NoCtaModal } from '../../../src/components/noCtaModal/NoCtaModal';

const mockOnClose = jest.fn();

const setup = (isVisible = true) => {
  const utils = render(
    <NoCtaModal
      isVisible={isVisible}
      onClose={mockOnClose}
      header="Welcome to the no cta modal!"
      description="This is a modal that has no cta buttons and is just text!"
    />
  );

  return {
    ...utils,
  };
};

describe('component >> noCtaModal', () => {
  describe('Modal is visible', () => {
    test('Should render no cta modal correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render correct text', () => {
      const { getByText } = setup();
      expect(getByText('Welcome to the no cta modal!')).not.toBeNull();
      expect(
        getByText('This is a modal that has no cta buttons and is just text!')
      ).not.toBeNull();
    });

    test('Should fire modal close', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId('modal-close-icon'));
      expect(mockOnClose).toBeCalledTimes(1);
    });
  });

  describe('Modal is NOT visible', () => {
    test('not render modal', () => {
      const { toJSON } = setup(false);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
