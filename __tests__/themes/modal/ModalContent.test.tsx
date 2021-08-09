import React from 'react';
import { render } from '../../../jest/renderUtil';

// Components
import { ModalContent } from '../../../src/themes/modal/ModalContent';

const setup = () => {
  const utils = render(
    <ModalContent
      header="This is the modal content"
      description="This is the description of the modal content"
    />
  );

  return {
    ...utils,
  };
};

describe('themes >> Modal Content', () => {
  describe('Render modal content with header and description', () => {
    test('Should render modal correctly with header and description', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find header', () => {
      const { getByText } = setup();
      expect(getByText('This is the modal content')).not.toBeNull();
    });

    test('Should find description', () => {
      const { getByText } = setup();
      expect(
        getByText('This is the description of the modal content')
      ).not.toBeNull();
    });
  });

  describe('Render modal content with NO description ', () => {
    test('Should render modal correctly with ONLY header', () => {
      const { toJSON } = render(
        <ModalContent header="This is the modal content" />
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
