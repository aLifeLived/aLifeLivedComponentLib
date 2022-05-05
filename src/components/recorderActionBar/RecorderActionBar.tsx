import React from 'react';

// Components
import { RecorderButton } from '../recorderButton/RecorderButton';

// UI
import { Icon } from '../icon/Icon';
import { Box } from '../../themes/box/Box';

type RecorderActionBarProps = {
  playerState: 'recording' | 'ideal' | 'paused';
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onRecorderPress: () => void;
  recordButtonTestId: string;
  leftIconTestId: string;
  rightIconTestId: string;
};

export const RecorderActionBar: React.FC<RecorderActionBarProps> = ({
  onRecorderPress,
  playerState,
  onLeftIconPress,
  onRightIconPress,
  leftIconTestId,
  rightIconTestId,
  recordButtonTestId,
}) => {
  return (
    <Box
      flexDirection="row"
      alignContent="center"
      alignItems="center"
      justifyContent="space-around"
      width="100%"
    >
      <Box>
        {playerState === 'ideal' ? (
          <Icon
            icon="folder"
            size={30}
            color="primary"
            testID={leftIconTestId}
            onPress={onLeftIconPress}
          />
        ) : (
          <Icon
            icon={['far', 'trash-alt']}
            size={30}
            color="primary"
            testID={leftIconTestId}
            onPress={onLeftIconPress}
          />
        )}
      </Box>
      <RecorderButton
        onRecorderPress={onRecorderPress}
        testID={recordButtonTestId}
        isRecording={playerState === 'recording'}
      />
      <Box>
        {playerState === 'ideal' ? (
          <Icon
            icon="cog"
            size={30}
            color="primary"
            testID={rightIconTestId}
            onPress={onRightIconPress}
          />
        ) : (
          <Icon
            icon="check"
            size={30}
            color="primary"
            testID={rightIconTestId}
            onPress={onLeftIconPress}
          />
        )}
      </Box>
    </Box>
  );
};
