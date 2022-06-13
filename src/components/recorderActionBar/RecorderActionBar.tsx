import React from 'react';

// Components
import { RecorderButton } from '../recorderButton/RecorderButton';

// UI
import { Icon } from '../icon/Icon';
import { Box } from '../../themes/box/Box';
import { SystemPressable } from '../../themes/systemPressable/SystemPressable';

type RecorderActionBarProps = {
  recordButtonTestID?: string;
  leftIconTestID?: string;
  rightIconTestID?: string;
  loaderTestID?: string;
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
  loaderTestID,
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
      <SystemPressable
        onPress={onLeftIconPress}
        testID={leftIconTestID}
        disabled={isLoading}
      >
        <Icon
          icon={isIdeal ? 'folder' : ['far', 'trash-alt']}
          size={30}
          color="primary"
        />
      </SystemPressable>
      <RecorderButton
        isLoading={isLoading}
        onRecorderPress={onRecorderPress}
        testID={recordButtonTestID}
        isRecording={isRecording}
        isRecordingPaused={isRecordingPaused}
        loaderTestID={loaderTestID}
      />
      <SystemPressable
        onPress={onRightIconPress}
        testID={rightIconTestID}
        disabled={isLoading}
      >
        <Icon icon={isIdeal ? 'cog' : 'check'} size={30} color="primary" />
      </SystemPressable>
    </Box>
  );
};
