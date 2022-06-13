import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { RecorderActionBar } from '../../../src/components/recorderActionBar/RecorderActionBar';

const onRecorderPressMock = jest.fn();
const onLeftIconPressMock = jest.fn();
const onRightIconPressMock = jest.fn();

const leftIconTestID = 'test-left-icon-id';
const rightIconTestID = 'test-right-icon-id';
const recordButtonTestID = 'test-record-button-id';
const loadingSpinnerTestID = 'loader-test-id';

const setup = ({
  isIdeal = false,
  isRecording = false,
  isPaused = false,
  isLoading = false,
}) =>
  render(
    <RecorderActionBar
      isIdeal={isIdeal}
      isRecording={isRecording}
      isRecordingPaused={isPaused}
      isLoading={isLoading}
      recordButtonTestID={recordButtonTestID}
      leftIconTestID={leftIconTestID}
      rightIconTestID={rightIconTestID}
      loaderTestID="loader-test-id"
      onRecorderPress={onRecorderPressMock}
      onRightIconPress={onRightIconPressMock}
      onLeftIconPress={onLeftIconPressMock}
    />
  );

describe('Components >> RecorderActionBar', () => {
  beforeEach(() => {
    onRecorderPressMock.mockClear();
    onRightIconPressMock.mockClear();
    onLeftIconPressMock.mockClear();
  });

  describe('Given user is NOT recording', () => {
    describe('AND app is NOT loading', () => {
      test('Should find and press left icon', () => {
        const { getByTestId } = setup({});
        fireEvent.press(getByTestId(leftIconTestID));
        expect(onLeftIconPressMock).toBeCalledTimes(1);
      });

      test('Should find and press right icon', () => {
        const { getByTestId } = setup({});
        fireEvent.press(getByTestId(rightIconTestID));
        expect(onRightIconPressMock).toBeCalledTimes(1);
      });

      test('Should find and press recording button', () => {
        const { getByTestId } = setup({});
        fireEvent.press(getByTestId(recordButtonTestID));
        expect(onRecorderPressMock).toBeCalledTimes(1);
      });
    });
  });

  describe('Given user IS recording', () => {
    describe('AND app is NOT loading', () => {
      test('Should find and press left icon', () => {
        const { getByTestId } = setup({ isRecording: true });
        fireEvent.press(getByTestId(leftIconTestID));
        expect(onLeftIconPressMock).toBeCalledTimes(1);
      });

      test('Should find and press right icon', () => {
        const { getByTestId } = setup({ isRecording: true });
        fireEvent.press(getByTestId(rightIconTestID));
        expect(onRightIconPressMock).toBeCalledTimes(1);
      });

      test('Should find and press stop button', () => {
        const { getByTestId } = setup({ isRecording: true });
        fireEvent.press(getByTestId(recordButtonTestID));
        expect(onRecorderPressMock).toBeCalledTimes(1);
      });
    });
  });

  describe('Given user IS paused', () => {
    describe('AND app is NOT recording', () => {
      test('Should find and press left icon', () => {
        const { getByTestId } = setup({ isPaused: true });
        fireEvent.press(getByTestId(leftIconTestID));
        expect(onLeftIconPressMock).toBeCalledTimes(1);
      });

      test('Should find and press right icon', () => {
        const { getByTestId } = setup({ isPaused: true });
        fireEvent.press(getByTestId(rightIconTestID));
        expect(onRightIconPressMock).toBeCalledTimes(1);
      });

      test('Should find and press recording button', () => {
        const { getByTestId } = setup({ isPaused: true });
        fireEvent.press(getByTestId(recordButtonTestID));
        expect(onRecorderPressMock).toBeCalledTimes(1);
      });
    });
  });

  describe('Given user has finished recording and app is loading', () => {
    test('Should NOT find recording button', () => {
      const { queryByTestId } = setup({ isLoading: true });
      expect(queryByTestId(recordButtonTestID)).toBeNull();
    });

    test('Should render loading spinner', () => {
      const { getByTestId } = setup({ isLoading: true });
      expect(getByTestId(loadingSpinnerTestID)).toBeDefined();
    });

    test('Should disable right icon press', () => {
      const { getByTestId } = setup({ isLoading: true });
      fireEvent.press(getByTestId(rightIconTestID));
      expect(onRightIconPressMock).toBeCalledTimes(0);
    });

    test('Should disable left icon press', () => {
      const { getByTestId } = setup({ isLoading: true });
      fireEvent.press(getByTestId(leftIconTestID));
      expect(onLeftIconPressMock).toBeCalledTimes(0);
    });
  });
});
