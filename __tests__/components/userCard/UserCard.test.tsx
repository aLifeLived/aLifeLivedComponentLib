import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { UserCard } from '../../../src/components/userCard/UserCard';

const onPress = jest.fn();
const firstName = 'John';
const lastName = 'Smith';
const username = 'testUsername';
let avatarUrl = '';
const setup = () => {
  const utils = render(
    <UserCard
      username={username}
      firstName={firstName}
      lastName={lastName}
      avatarUrl={avatarUrl}
      onPress={onPress}
    />
  );

  return {
    ...utils,
  };
};

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

    test('Should find first name and last name', () => {
      const { getByText } = setup();
      expect(getByText(`${firstName} ${lastName}`)).toBeDefined();
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

    test('Should find first name and last name', () => {
      const { getByText } = setup();
      expect(getByText(`${firstName} ${lastName}`)).toBeDefined();
    });

    test('Should fire on press action', () => {
      const { getByText } = setup();
      fireEvent.press(getByText(username));
      expect(onPress).toBeCalledTimes(1);
    });
  });
});
