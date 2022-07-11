import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { RecorderActionBar } from './RecorderActionBar';
import { Box } from '../../themes/box/Box';

const RecorderActionBarComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const triggerLoadingStateAndThenPause = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPaused(true);
      setIsRecording(false);
    }, 3000);
  }, []);

  const startRecording = useCallback(() => {
    setIsRecording(true);
    setIsPaused(false);
  }, []);

  return (
    <Box
      flex={1}
      alignContent="center"
      justifyContent="flex-end"
      alignItems="center"
      paddingBottom="m"
      backgroundColor={
        !isRecording && !isPaused ? 'white' : 'backgroundContrastHigh'
      }
    >
      <RecorderActionBar
        isIdeal={!isRecording && !isPaused}
        isRecording={isRecording}
        isRecordingPaused={isPaused}
        onLeftIconPress={() => (setIsRecording(false), setIsPaused(false))}
        onRightIconPress={() => (setIsRecording(false), setIsPaused(false))}
        leftIconTestID="leftIconTestId"
        rightIconTestID="rightIconTestId"
        recordButtonTestID="recordingButtonTestId"
        isLoading={isLoading}
        onRecorderPress={() =>
          isRecording ? triggerLoadingStateAndThenPause() : startRecording()
        }
      />
    </Box>
  );
};

storiesOf('Recording', module)
  .addDecorator(Story => Story())
  .add('Recording action bar', () => <RecorderActionBarComponent />);
