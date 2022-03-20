import React from 'react';

// Animation
import * as Animatable from 'react-native-animatable';

// Components
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';

interface RecordingTimerProps {
  timerSeconds: string;
  isRecording: boolean;
  status: string;
}

export const RecordingTimer: React.FC<RecordingTimerProps> = ({
  timerSeconds,
  isRecording,
  status,
}) => {
  return (
    <Box>
      <Text textAlign="center" variant="intro">
        {timerSeconds}
      </Text>
      <Box flexDirection="row" alignItems="center">
        {isRecording ? (
          <Animatable.View animation="fadeIn" iterationCount={'infinite'}>
            <Box
              backgroundColor="backgroundError"
              width={10}
              height={10}
              borderRadius="medium"
              marginRight="s"
            />
          </Animatable.View>
        ) : null}
        <Text textAlign="center" variant="body">
          {status}
        </Text>
      </Box>
    </Box>
  );
};
