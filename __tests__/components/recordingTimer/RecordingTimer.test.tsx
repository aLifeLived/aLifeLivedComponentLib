import React from 'react';
import { render } from '../../../jest/renderUtil';

// Component
import { RecordingTimer } from '../../../src/components/recordingTimer/RecordingTimer';
const setup = (timerSeconds: string, isRecording: boolean, status: string) => {
  const utils = render(
    <RecordingTimer
      timerSeconds={timerSeconds}
      isRecording={isRecording}
      status={status}
    />
  );

  return { ...utils };
};
describe('Components >> Recording timer', () => {
  describe('Loading state', () => {
    test('Should successfully render recording timer in loading state', () => {
      const { toJSON } = setup('0:00', false, 'Loading please wait...');
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully render loading status and time', () => {
      const { getByText } = setup('0:00', false, 'Loading please wait...');
      expect(getByText('Loading please wait...')).not.toBeNull();
      expect(getByText('0:00')).not.toBeNull();
    });
  });

  describe('Ready state', () => {
    test('Should successfully render recording timer in ready state', () => {
      const { toJSON } = setup('0:00', false, 'Ready');
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully render ready status and time', () => {
      const { getByText } = setup('0:00', false, 'Ready');
      expect(getByText('Ready')).not.toBeNull();
      expect(getByText('0:00')).not.toBeNull();
    });
  });

  describe('Buffering state', () => {
    test('Should successfully render recording timer in buffering state', () => {
      const { toJSON } = setup('0:00', false, 'Buffering...');
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully render buffering status and time', () => {
      const { getByText } = setup('0:00', false, 'Buffering...');
      expect(getByText('Buffering...')).not.toBeNull();
      expect(getByText('0:00')).not.toBeNull();
    });
  });

  describe('Recording state', () => {
    test('Should successfully render recording timer in recording state', () => {
      const { toJSON } = setup('0:00', true, 'Recording');
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully render recording status and time', () => {
      const { getByText } = setup('1:40', true, 'Recording');
      expect(getByText('Recording')).not.toBeNull();
      expect(getByText('1:40')).not.toBeNull();
    });
  });

  describe('Playing state', () => {
    test('Should successfully render recording timer in playing state', () => {
      const { toJSON } = setup('0:00', true, 'Audio Playing');
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully render playing status and time', () => {
      const { getByText } = setup('1:40', false, 'Audio playing');
      expect(getByText('Audio playing')).not.toBeNull();
      expect(getByText('1:40')).not.toBeNull();
    });
  });

  describe('Stopped state', () => {
    test('Should successfully render recording timer in stopped state', () => {
      const { toJSON } = setup('0:00', true, 'Audio playing');
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should successfully render stopped status and time', () => {
      const { getByText } = setup('1:40', false, 'Audio stopped');
      expect(getByText('Audio stopped')).not.toBeNull();
      expect(getByText('1:40')).not.toBeNull();
    });
  });
});
