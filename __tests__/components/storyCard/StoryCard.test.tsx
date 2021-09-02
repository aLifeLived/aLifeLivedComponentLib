import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { StoryCard } from '../../../src/components/storyCard/StoryCard';

const onStoryCardPress = jest.fn();
const onBookmarkPress = jest.fn();
const onLikePress = jest.fn();
const defaultTitle = 'Test Title';
const defaultDuration = '20:00';
const defaultTopic = 'Test topic';
const bookmarkTestId = 'story-card-bookmark-icon';
const heartTestId = 'story-card-heart-icon';

const setup = (
  hasUserBookmarkedStory = false,
  hasUserLikedStory = false,
  title = defaultTitle,
  avatar = 'https://picsum.photos/id/237/200/300'
) => {
  const utils = render(
    <StoryCard
      onPress={onStoryCardPress}
      onBookmarkPress={onBookmarkPress}
      onLikePress={onLikePress}
      hasUserBookmarkedStory={hasUserBookmarkedStory}
      hasUserLikedStory={hasUserLikedStory}
      story={{
        id: 'testId',
        title: title,
        likes: 15,
        duration: defaultDuration,
        avatar: avatar,
        topic: defaultTopic,
      }}
    />
  );

  return {
    ...utils,
  };
};

describe('components >> story card ', () => {
  beforeEach(
    () => (
      onStoryCardPress.mockClear(),
      onBookmarkPress.mockClear(),
      onLikePress.mockClear()
    )
  );

  describe('Story card NOT liked and NOT bookmarked', () => {
    test('Should render story card ', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully find text', () => {
      const { getByText } = setup();
      expect(getByText(defaultTitle)).not.toBeNull();
      expect(getByText(defaultDuration)).not.toBeNull();
      expect(getByText(defaultTopic)).not.toBeNull();
    });

    test('Should fire on presses', () => {
      const { getByText, getByTestId } = setup();

      fireEvent.press(getByText(defaultTitle));
      fireEvent.press(getByTestId(bookmarkTestId));
      fireEvent.press(getByTestId(heartTestId));

      expect(onStoryCardPress).toBeCalledTimes(1);
      expect(onBookmarkPress).toBeCalledTimes(1);
      expect(onLikePress).toBeCalledTimes(1);
    });
  });

  describe('Story card IS liked and IS bookmarked ', () => {
    test('Should render story card correctly', () => {
      const { toJSON } = setup(true, true);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully find text', () => {
      const { getByText } = setup(true, true);
      expect(getByText(defaultTitle)).not.toBeNull();
      expect(getByText(defaultDuration)).not.toBeNull();
      expect(getByText(defaultTopic)).not.toBeNull();
    });

    test('Should fire on presses', () => {
      const { getByText, getByTestId } = setup(true, true);

      fireEvent.press(getByText(defaultTitle));
      fireEvent.press(getByTestId(bookmarkTestId));
      fireEvent.press(getByTestId(heartTestId));

      expect(onStoryCardPress).toBeCalledTimes(1);
      expect(onBookmarkPress).toBeCalledTimes(1);
      expect(onLikePress).toBeCalledTimes(1);
    });
  });

  describe('Story card with profile image', () => {
    test('Should render story card correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully find text', () => {
      const { getByText } = setup();
      expect(getByText(defaultTitle)).not.toBeNull();
      expect(getByText(defaultDuration)).not.toBeNull();
      expect(getByText(defaultTopic)).not.toBeNull();
    });

    test('Should fire on presses', () => {
      const { getByText, getByTestId } = setup();

      fireEvent.press(getByText(defaultTitle));
      fireEvent.press(getByTestId(bookmarkTestId));
      fireEvent.press(getByTestId(heartTestId));

      expect(onStoryCardPress).toBeCalledTimes(1);
      expect(onBookmarkPress).toBeCalledTimes(1);
      expect(onLikePress).toBeCalledTimes(1);
    });
  });

  describe('Story card with NO profile image and render icon', () => {
    test('Should render story card correctly', () => {
      const { toJSON } = setup(undefined, undefined, undefined, '');
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully find text', () => {
      const { getByText } = setup(undefined, undefined, undefined, '');
      expect(getByText(defaultTitle)).not.toBeNull();
      expect(getByText(defaultDuration)).not.toBeNull();
      expect(getByText(defaultTopic)).not.toBeNull();
    });

    test('Should fire on presses', () => {
      const { getByText, getByTestId } = setup(
        undefined,
        undefined,
        undefined,
        ''
      );

      fireEvent.press(getByText(defaultTitle));
      fireEvent.press(getByTestId(bookmarkTestId));
      fireEvent.press(getByTestId(heartTestId));

      expect(onStoryCardPress).toBeCalledTimes(1);
      expect(onBookmarkPress).toBeCalledTimes(1);
      expect(onLikePress).toBeCalledTimes(1);
    });
  });
});
