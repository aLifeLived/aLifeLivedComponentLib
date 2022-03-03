import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { OnboardingContent } from '../../../src/components/onboardingContent/OnboardingContent';

// UI
import { Text } from '../../../src/themes/text/Text';

const mockOnNextButtonPress = jest.fn();

const setup = () =>
  render(
    <OnboardingContent
      title="Test title"
      description="This is a test description"
      onNextPress={mockOnNextButtonPress}
      testID="testId"
      onNextButtonText="Tap next"
    >
      <Text>Test child</Text>
    </OnboardingContent>
  );

describe('components >> onBoardingContent', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Should find title correctly', () => {
    const { getByText } = setup();
    expect(getByText('Test title')).toBeDefined();
  });

  test('Should find description correctly', () => {
    const { getByText } = setup();
    expect(getByText('This is a test description')).toBeDefined();
  });

  test('Should press on next button by test id', () => {
    const { getByTestId } = setup();
    fireEvent.press(getByTestId('testId'));
    expect(mockOnNextButtonPress).toBeCalledTimes(1);
  });

  test('Should render on next button test', () => {
    const { getByText } = setup();
    expect(getByText('Tap next')).toBeDefined();
  });

  test('Should render child correctly', () => {
    const { getByText } = setup();
    expect(getByText('Test child')).toBeDefined();
  });
});
