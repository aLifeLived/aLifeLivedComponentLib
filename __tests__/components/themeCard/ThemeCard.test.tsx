import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { ThemeCard } from '../../../src/components/themeCard/ThemeCard';

const onPress = jest.fn();
const defaultTitle = 'Test Title';
const defaultImageUrl = 'https://picsum.photos/id/237/200/300';

const setup = ({ imageUrl }: { imageUrl: string }) =>
  render(
    <ThemeCard title={defaultTitle} imageUrl={imageUrl} onPress={onPress} />
  );

describe('components >> theme card ', () => {
  beforeEach(() => onPress.mockClear());

  test('Should match snapshot correctly', () => {
    const { toJSON } = setup({ imageUrl: defaultImageUrl });
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should find title text correctly', () => {
    const { getByText } = setup({ imageUrl: defaultImageUrl });
    expect(getByText(defaultTitle)).toBeDefined();
  });

  test('Should fire on press action', () => {
    const { getByText } = setup({ imageUrl: defaultImageUrl });
    fireEvent.press(getByText(defaultTitle));
    expect(onPress).toBeCalledTimes(1);
  });
});
