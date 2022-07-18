import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { UserCard } from '../../../src/components/userCard/UserCard';

const onPress = jest.fn();
const username = 'testUsername';
let avatarUrl = '';
const setup = (isUserSelected = false) =>
  render(
    <UserCard
      username={username}
      avatarUrl={avatarUrl}
      onPress={onPress}
      isUserSelected={isUserSelected}
      testID="user-card-test-id"
    />
  );

describe('components >> user card ', () => {
  beforeEach(() => onPress.mockClear());

  describe('UserCard without profile image', () => {
    test('Should render user card correctly with no profile image', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find username', () => {
      const { getByText } = setup();
      expect(getByText(username)).toBeDefined();
    });

    test('Should fire on press action', () => {
      const { getByText } = setup();
      fireEvent.press(getByText(username));
      expect(onPress).toBeCalledTimes(1);
    });
  });

  describe('UserCard with profile image', () => {
    beforeEach(() => (avatarUrl = 'https://picsum.photos/id/237/200/300'));
    test('Should render user card correctly with profile image', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find username', () => {
      const { getByText } = setup();
      expect(getByText(username)).toBeDefined();
    });

    test('Should fire on press action', () => {
      const { getByText } = setup();
      fireEvent.press(getByText(username));
      expect(onPress).toBeCalledTimes(1);
    });
  });
});
