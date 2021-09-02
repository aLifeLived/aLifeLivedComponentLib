import React from 'react';
import { Priority } from 'react-native-fast-image';
import { render } from './../../../jest/renderUtil';

// Component
import { Avatar } from '../../../src/components/avatar/Avatar';

const setup = (
  source: {
    uri: string;
    priority: Priority;
  },
  variant: 'roundAvatar' | 'squareAvatar',
  iconBorderRadius?: 'medium' | 'xXXlarge',
  iconHeight = 50,
  iconWidth = 50,
  iconSize = 30
) => {
  // Screen
  const utils = render(
    <Avatar
      source={source}
      resizeMode="center"
      variant={variant}
      iconBorderRadius={iconBorderRadius}
      iconHeight={iconHeight}
      iconWidth={iconWidth}
      iconSize={iconSize}
    />
  );

  return {
    ...utils,
  };
};

describe('components >> avatar ', () => {
  describe('Round avatar', () => {
    test('Should render round avatar correctly', () => {
      const { toJSON } = setup(
        { uri: 'https://picsum.photos/id/237/200/300', priority: 'normal' },
        'roundAvatar'
      );
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render icon correctly when no source', () => {
      const { toJSON } = setup(
        { uri: null, priority: 'normal' },
        'roundAvatar',
        'xXXlarge'
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Square avatar', () => {
    test('Should render square avatar correctly', () => {
      const { toJSON } = setup(
        { uri: 'https://picsum.photos/id/237/200/300', priority: 'normal' },
        'squareAvatar'
      );
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should render icon correctly when no source', () => {
      const { toJSON } = setup(
        { uri: null, priority: 'normal' },
        'squareAvatar',
        'medium'
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
