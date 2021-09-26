import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { DraftStoryCard } from '../../../src/components/draftStoryCard/DraftStoryCard';

const onPress = jest.fn();
const defaultTitle = 'Test Title';
const defaultTopicTitle = 'This is a test topic';

const setup = () => {
  const utils = render(
    <DraftStoryCard
      title={defaultTitle}
      topicTitle={defaultTopicTitle}
      onPress={onPress}
    />
  );

  return {
    ...utils,
  };
};

describe('components >> draft story card ', () => {
  beforeEach(() => onPress.mockClear());
  test('Should match snapshot correctly', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should find title and topic text correctly', () => {
    const { getByText } = setup();
    expect(getByText(defaultTitle)).toBeDefined();
    expect(getByText(defaultTopicTitle)).toBeDefined();
  });

  test('Should fire on press action', () => {
    const { getByText } = setup();
    fireEvent.press(getByText(defaultTitle));
    expect(onPress).toBeCalledTimes(1);
  });
});
