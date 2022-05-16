import React from 'react';
import { render, fireEvent } from '../../../jest/renderUtil';

// Component
import { MyRecordingCard } from '../../../src/components/myRecordingCard/MyRecordingCard';

const onMediaPressMock = jest.fn();
const onDeletePressMock = jest.fn();

const setup = ({ isLoading = false, isAudioPlaying = false }) =>
  render(
    <MyRecordingCard
      title="Test title"
      isLoading={isLoading}
      isAudioPlaying={isAudioPlaying}
      onMediaPress={onMediaPressMock}
      onDeletePress={onDeletePressMock}
      deleteIconTestID="delete-icon"
    />
  );

describe('src >> components >> myRecordingCard', () => {
  describe('Given a user is listening back to existing recordings', () => {
    beforeEach(
      () => (onMediaPressMock.mockClear(), onDeletePressMock.mockClear())
    );
    describe('AND the user has not clicked on any recordings', () => {
      test('Should render component that is NOT in loading state and NOT playing audio', () => {
        const { toJSON } = setup({});
        expect(toJSON()).toMatchSnapshot();
      });

      test('Should find title', () => {
        const { getByText } = setup({});
        expect(getByText('Test title')).toBeDefined();
      });
      test('Should fire onMediaPress', () => {
        const { getByText } = setup({});
        fireEvent.press(getByText('Test title'));
        expect(onMediaPressMock).toBeCalledTimes(1);
      });

      describe('Given user deletes recording', () => {
        test('Should fire onDeletePress', () => {
          const { getByTestId } = setup({});
          fireEvent.press(getByTestId('delete-icon'));
          expect(onDeletePressMock).toBeCalledTimes(1);
        });
      });
    });

    describe('AND the user presses on a recording card', () => {
      test('Should render component that IS loading', () => {
        const { toJSON } = setup({ isLoading: true, isAudioPlaying: false });
        expect(toJSON()).toMatchSnapshot();
      });

      test('Should find title', () => {
        const { getByText } = setup({ isLoading: true, isAudioPlaying: false });
        expect(getByText('Test title')).toBeDefined();
      });

      test('Should not pressable when in loading state', () => {
        const { getByText } = setup({ isLoading: true, isAudioPlaying: false });
        fireEvent.press(getByText('Test title'));
        expect(onMediaPressMock).toBeCalledTimes(0);
      });

      describe('Given a user deletes recording', () => {
        test('Should not fire onDeletePress when in loading state', () => {
          const { getByTestId } = setup({
            isLoading: true,
            isAudioPlaying: false,
          });
          fireEvent.press(getByTestId('delete-icon'));
          expect(onDeletePressMock).toBeCalledTimes(0);
        });
      });
    });

    describe('AND the user starts listening to a recording', () => {
      test('Should render component that IS playing', () => {
        const { toJSON } = setup({ isLoading: false, isAudioPlaying: true });
        expect(toJSON()).toMatchSnapshot();
      });
      test('Should find title', () => {
        const { getByText } = setup({
          isLoading: false,
          isAudioPlaying: true,
        });
        expect(getByText('Test title')).toBeDefined();
      });
      test('Should fire onMediaPress', () => {
        const { getByText } = setup({
          isLoading: false,
          isAudioPlaying: true,
        });
        fireEvent.press(getByText('Test title'));
        expect(onMediaPressMock).toBeCalledTimes(1);
      });

      describe('Given user deletes recording', () => {
        test('should first fire onDeletePress', () => {
          const { getByTestId } = setup({
            isLoading: false,
            isAudioPlaying: true,
          });
          fireEvent.press(getByTestId('delete-icon'));
          expect(onDeletePressMock).toBeCalledTimes(1);
        });
      });
    });
  });
});
