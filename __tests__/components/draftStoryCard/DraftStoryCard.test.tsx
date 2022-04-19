import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { DraftStoryCard } from '../../../src/components/draftStoryCard/DraftStoryCard';

const onPress = jest.fn();
const onEllipsisPress = jest.fn();
const defaultTitle = 'Test Title';
const defaultTopicTitle = 'This is a test topic';

const setup = (storyProgress = 0, shouldDisplayEllipsis = true) =>
  render(
    <DraftStoryCard
      onEllipsisPress={onEllipsisPress}
      shouldDisplayEllipsis={shouldDisplayEllipsis}
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

  describe('Given ellipsis is NOT displayed', () => {
    test('Should NOT render ellipsis icon if FALSE', () => {
      const { queryByTestId } = setup(0, false);
      expect(queryByTestId('ellipsis-icon')).toBeNull();
    });

    test('Should NOT render ellipsis icon if NULL', () => {
      const { queryByTestId } = setup(0, null);
      expect(queryByTestId('ellipsis-icon')).toBeNull();
    });
  });

  describe('Given ellipsis icon SHOULD be displayed', () => {
    test('Should render icon', () => {
      const { getByTestId } = setup(0, true);
      expect(getByTestId('ellipsis-icon')).toBeDefined();
    });
  });
});
