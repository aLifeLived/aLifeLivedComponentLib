import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { TopicCard } from '../../../src/components/topicCard/TopicCard';

const onPress = jest.fn();
const defaultTitle = 'Test Title';
const description = 'This is a test description';

const setup = (hasUserCompleted = false) => {
  const utils = render(
    <TopicCard
      title={defaultTitle}
      hasUserCompleted={hasUserCompleted}
      description={description}
      duration={25}
      onPress={onPress}
    />
  );

  return {
    ...utils,
  };
};

describe('components >> topic card ', () => {
  beforeEach(() => onPress.mockClear());
  describe('User has not completed', () => {
    test('Should render component correctly', () => {
      const { toJSON } = setup();
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title, description and duration', () => {
      const { getByText } = setup();
      expect(getByText(defaultTitle)).not.toBeNull();
      expect(getByText(description)).not.toBeNull();
      expect(getByText('25 mins')).not.toBeNull();
    });

    test('Should fire on press', () => {
      const { getByText } = setup();
      fireEvent.press(getByText(defaultTitle));
      expect(onPress).toBeCalledTimes(1);
    });

    test('Should find icon', () => {
      const { getByTestId } = setup();
      expect(getByTestId('clock-icon')).not.toBeNull();
    });
  });

  describe('User HAS completed', () => {
    const hasUserCompletedTopic = true;
    test('Should render component correctly', () => {
      const { toJSON } = setup(hasUserCompletedTopic);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title, description and duration', () => {
      const { getByText } = setup(hasUserCompletedTopic);
      expect(getByText(defaultTitle)).not.toBeNull();
      expect(getByText(description)).not.toBeNull();
      expect(getByText('25 mins')).not.toBeNull();
    });

    test('Should fire on press', () => {
      const { getByText } = setup(hasUserCompletedTopic);
      fireEvent.press(getByText(defaultTitle));
      expect(onPress).toBeCalledTimes(1);
    });

    test('Should find icons', () => {
      const { getByTestId } = setup(hasUserCompletedTopic);
      expect(getByTestId('checked-icon')).not.toBeNull();
      expect(getByTestId('clock-icon')).not.toBeNull();
    });
  });
});
