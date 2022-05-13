import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { RecorderActionBar } from './RecorderActionBar';
import { Box } from '../../themes/box/Box';

const RecorderActionBarComponent = () => {
  const [playerState, setPlayerState] = useState<
    'recording' | 'ideal' | 'paused'
  >('ideal');
  return (
    <Box
      flex={1}
      alignContent="center"
      justifyContent="flex-end"
      alignItems="center"
      paddingBottom="m"
      backgroundColor={
        playerState === 'ideal' ? 'white' : 'backgroundContrastHigh'
      }
    >
      <RecorderActionBar
        playerState={playerState}
        onLeftIconPress={() => setPlayerState('ideal')}
        onRightIconPress={() => setPlayerState('ideal')}
        leftIconTestID="leftIconTestId"
        rightIconTestID="rightIconTestId"
        recordButtonTestID="recordingButtonTestId"
        onRecorderPress={() =>
          playerState === 'recording'
            ? setPlayerState('paused')
            : setPlayerState('recording')
        }
      />
    </Box>
  );
};

storiesOf('Recording', module)
  .addDecorator(Story => Story())
  .add('Recording action bar', () => <RecorderActionBarComponent />);
