import React from 'react';
import { render } from '../../../jest/renderUtil';

// Component
import { UserCardSkeleton } from '../../../src/themes/loadingSkeletons/UserCardSkeleton';

const setup = () => {
  const utils = render(<UserCardSkeleton />);

  return {
    ...utils,
  };
};

describe('themes >> Loading Skeleton >> UserCardSkeleton', () => {
  describe('Given User card', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
