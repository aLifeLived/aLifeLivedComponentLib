import React from 'react';

// Components
import { RecorderButton } from '../recorderButton/RecorderButton';

// UI
import { Icon } from '../icon/Icon';
import { Box } from '../../themes/box/Box';

type RecorderActionBarProps = {
  recordButtonTestID?: string;
  leftIconTestID?: string;
  rightIconTestID?: string;
  isIdeal: boolean;
  isRecording: boolean;
  isRecordingPaused: boolean;
  isLoading?: boolean;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onRecorderPress: () => void;
};

export const RecorderActionBar: React.FC<RecorderActionBarProps> = ({
  isIdeal,
  isRecording,
  isRecordingPaused,
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
          icon={isIdeal ? 'folder' : ['far', 'trash-alt']}
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
        isRecording={isRecording}
        isRecordingPaused={isRecordingPaused}
      />
      <Box>
        <Icon
          icon={isIdeal ? 'cog' : 'check'}
          size={30}
          color="primary"
          testID={rightIconTestID}
          onPress={onRightIconPress}
        />
      </Box>
    </Box>
  );
};
