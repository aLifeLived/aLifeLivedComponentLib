import React from 'react';
import { render } from '../../../jest/renderUtil';

// Component
import { SkeletonElement } from '../../../src/themes/loadingSkeletons/SkeletonElement';

const setup = (variant: 'text' | 'title' | 'avatar' | 'thumbNail') => {
  const utils = render(<SkeletonElement variant={variant} />);

  return {
    ...utils,
  };
};

describe('themes >> Loading Skeleton >> Skeleton Element', () => {
  describe('Given skeleton element has a variant of text', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup('text');
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Given skeleton element has a variant of title', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup('title');
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Given skeleton element has a variant of avatar', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup('avatar');
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Given skeleton element has a variant of thumbNail', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup('thumbNail');
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
