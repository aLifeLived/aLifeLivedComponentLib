import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { TopicCard } from '../../../src/components/topicCard/TopicCard';

const onPress = jest.fn();
const defaultTitle = 'Test Title';

const setup = (hasUserCompleted = false) =>
  render(
    <TopicCard
      title={defaultTitle}
      hasUserCompleted={hasUserCompleted}
      duration={25}
      onPress={onPress}
    />
  );

describe('components >> topic card ', () => {
  beforeEach(() => onPress.mockClear());
  describe('User has NOT completed', () => {
    test('Should render component correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and duration', () => {
      const { getByText } = setup();
      expect(getByText(defaultTitle)).toBeDefined();
      expect(getByText('25 mins')).toBeDefined();
    });

    test('Should fire on press', () => {
      const { getByText } = setup();
      fireEvent.press(getByText(defaultTitle));
      expect(onPress).toBeCalledTimes(1);
    });

    test('Should find clock icon', () => {
      const { getByTestId } = setup();
      expect(getByTestId('clock-icon')).toBeDefined();
    });
  });

  describe('User HAS completed', () => {
    const hasUserCompletedTopic = true;
    test('Should render component correctly', () => {
      const { toJSON } = setup(hasUserCompletedTopic);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title', () => {
      const { getByText } = setup(hasUserCompletedTopic);
      expect(getByText(defaultTitle)).not.toBeNull();
    });

    test('Should fire on press', () => {
      const { getByText } = setup(hasUserCompletedTopic);
      fireEvent.press(getByText(defaultTitle));
      expect(onPress).toBeCalledTimes(1);
    });

    test('Should find icons', () => {
      const { getByTestId } = setup(hasUserCompletedTopic);
      expect(getByTestId('checked-icon')).not.toBeNull();
    });
  });
});
