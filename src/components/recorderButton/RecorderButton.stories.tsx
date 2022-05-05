import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { RecorderButton } from './RecorderButton';
import { Box } from '../../themes/box/Box';

const RecorderButtonComponent = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <Box
      flex={1}
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
    >
      <RecorderButton
        isRecording={isRecording}
        onRecorderPress={() => setIsRecording(!isRecording)}
      />
    </Box>
  );
};

storiesOf('Recorder Button', module)
  .addDecorator(Story => Story())
  .add('Ideal state', () => <RecorderButtonComponent />);
