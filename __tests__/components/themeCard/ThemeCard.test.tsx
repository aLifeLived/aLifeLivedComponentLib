import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { ThemeCard } from '../../../src/components/themeCard/ThemeCard';

const onPress = jest.fn();
const defaultTitle = 'Test Title';
const defaultSubText = 'This is a test of sub text';
const defaultImageUrl = 'https://picsum.photos/id/237/200/300';

const setup = ({ imageUrl }: { imageUrl: string }) => {
  const utils = render(
    <ThemeCard
      title={defaultTitle}
      imageUrl={imageUrl}
      subText={defaultSubText}
      onPress={onPress}
    />
  );

  return {
    ...utils,
  };
};

describe('components >> theme card ', () => {
  beforeEach(() => onPress.mockClear());

  describe('Given there is no image url the component still renders', () => {
    test('Should match snapshot correctly', () => {
      const { toJSON } = setup({ imageUrl: null });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and sub text correctly', () => {
      const { getByText } = setup({ imageUrl: null });
      expect(getByText(defaultTitle)).toBeDefined();
      expect(getByText(defaultSubText)).toBeDefined();
    });

    test('Should fire on press action', () => {
      const { getByText } = setup({ imageUrl: null });
      fireEvent.press(getByText(defaultTitle));
      expect(onPress).toBeCalledTimes(1);
    });
  });

  describe.only('Given there is a image the component still renders correctly', () => {
    test('Should match snapshot correctly', () => {
      const { toJSON } = setup({ imageUrl: defaultImageUrl });
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and sub text correctly', () => {
      const { getByText } = setup({ imageUrl: defaultImageUrl });
      expect(getByText(defaultTitle)).toBeDefined();
      expect(getByText(defaultSubText)).toBeDefined();
    });

    test('Should fire on press action', () => {
      const { getByText } = setup({ imageUrl: defaultImageUrl });
      fireEvent.press(getByText(defaultTitle));
      expect(onPress).toBeCalledTimes(1);
    });
  });
});
