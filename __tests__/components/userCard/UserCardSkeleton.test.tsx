import React from 'react';
import { render } from '../../../jest/renderUtil';

// Component
import { UserCardSkeleton } from '../../../src/components/userCard/UserCardSkeleton';

const setup = ({ testID }: { testID?: string }) => {
  const utils = render(<UserCardSkeleton testID={testID} />);

  return {
    ...utils,
  };
};

describe('themes >> Loading Skeleton >> UserCardSkeleton', () => {
  describe('Given User card', () => {
    test('Should match snapshot', () => {
      const { toJSON } = setup({});
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Given user card skeleton has a test id', () => {
    test('Should find testID', () => {
      const { getByTestId } = setup({ testID: 'user-card-skeleton-id' });
      expect(getByTestId('user-card-skeleton-id')).toBeDefined();
    });
  });
});
