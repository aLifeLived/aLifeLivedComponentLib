import React from 'react';

// Animation
import * as Animatable from 'react-native-animatable';

// Components
import { Box } from '../../themes/Box';
import { Text } from '../../themes/Text';

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
      <Text textAlign="center">{timerSeconds}</Text>
      <Box flexDirection="row" alignItems="center">
        {isRecording ? (
          <Animatable.View animation="fadeIn" iterationCount={'infinite'}>
            <Box
              backgroundColor="primaryRed"
              width={10}
              height={10}
              borderRadius="medium"
              marginRight="s"
            />
          </Animatable.View>
        ) : null}
        <Text textAlign="center" variant="default">
          {status}
        </Text>
      </Box>
    </Box>
  );
};
