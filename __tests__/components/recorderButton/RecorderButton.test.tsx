import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { RecorderButton } from '../../../src/components/recorderButton/RecorderButton';

const onRecorderPressMock = jest.fn();
const testID = 'recorder-test-id';
const loaderTestID = 'loader-test-id';

const setup = ({
  isRecording = false,
  isLoading = false,
  isRecordingPaused = false,
}) =>
  render(
    <RecorderButton
      isLoading={isLoading}
      isRecording={isRecording}
      isRecordingPaused={isRecordingPaused}
      testID={testID}
      loaderTestID={loaderTestID}
      onRecorderPress={onRecorderPressMock}
    />
  );

describe('Components >> RecorderButton', () => {
  beforeEach(() => onRecorderPressMock.mockClear());
  describe('Given user is NOT recording', () => {
    describe('AND app is NOT loading', () => {
      test('Should trigger onRecording press', () => {
        const { getByTestId } = setup({});
        fireEvent.press(getByTestId(testID));
        expect(onRecorderPressMock).toBeCalledTimes(1);
      });

      test('Should match snapshot', () => {
        const { toJSON } = setup({});
        expect(toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('Given user IS recording', () => {
    describe('AND app is NOT loading', () => {
      test('Should trigger onRecording press', () => {
        const { getByTestId } = setup({ isRecording: true });
        fireEvent.press(getByTestId(testID));
        expect(onRecorderPressMock).toBeCalledTimes(1);
      });

      test('Should match snapshot', () => {
        const { toJSON } = setup({ isRecording: true });
        expect(toJSON()).toMatchSnapshot();
      });
    });

    describe('AND app IS loading', () => {
      test('Should trigger onRecording press', () => {
        const { getByTestId } = setup({ isLoading: true, isRecording: true });
        expect(getByTestId(loaderTestID)).toBeDefined();
      });

      test('Should match snapshot', () => {
        const { toJSON } = setup({ isLoading: true, isRecording: true });
        expect(toJSON()).toMatchSnapshot();
      });
    });
  });
});
