import React from 'react';

// Components
import { RecorderButton } from '../recorderButton/RecorderButton';

// UI
import { Icon } from '../icon/Icon';
import { Box } from '../../themes/box/Box';

type RecorderActionBarProps = {
  playerState: 'recording' | 'ideal' | 'paused';
  recordButtonTestID?: string;
  leftIconTestID?: string;
  rightIconTestID?: string;
  isLoading?: boolean;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onRecorderPress: () => void;
};

export const RecorderActionBar: React.FC<RecorderActionBarProps> = ({
  playerState,
  leftIconTestID,
  rightIconTestID,
  recordButtonTestID,
  isLoading,
  onRecorderPress,
  onLeftIconPress,
  onRightIconPress,
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
        <Icon
          icon={playerState === 'ideal' ? 'folder' : ['far', 'trash-alt']}
          size={30}
          color="primary"
          testID={leftIconTestID}
          onPress={onLeftIconPress}
        />
      </Box>
      <RecorderButton
        isLoading={isLoading}
        onRecorderPress={onRecorderPress}
        testID={recordButtonTestID}
        isRecording={playerState === 'recording'}
      />
      <Box>
        <Icon
          icon={playerState === 'ideal' ? 'cog' : 'check'}
          size={30}
          color="primary"
          testID={rightIconTestID}
          onPress={onRightIconPress}
        />
      </Box>
    </Box>
  );
};
