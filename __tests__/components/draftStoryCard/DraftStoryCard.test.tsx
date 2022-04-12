import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { DraftStoryCard } from '../../../src/components/draftStoryCard/DraftStoryCard';

const onPress = jest.fn();
const onEllipsisPress = jest.fn();
const defaultTitle = 'Test Title';
const defaultTopicTitle = 'This is a test topic';

const setup = (storyProgress = 0) =>
  render(
    <DraftStoryCard
      onEllipsisPress={onEllipsisPress}
      recordingProgress={storyProgress}
      title={defaultTitle}
      topicTitle={defaultTopicTitle}
      onPress={onPress}
    />
  );

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

  test('Should find pencil icon', () => {
    const { getByTestId } = setup();
    expect(getByTestId('pencil-icon')).toBeDefined();
  });

  describe('Given user wants to delete draft', () => {
    test('Should fire onEllipsisPress', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId('ellipsis-icon'));
      expect(onEllipsisPress).toBeCalledTimes(1);
    });
  });

  describe('Given user has progressed through 50% of recording', () => {
    test('Should render progress bar of half way', () => {
      const { toJSON } = setup(50);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
