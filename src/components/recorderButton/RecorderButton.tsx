import React, { useMemo, useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import { Loader } from '../loader/Loader';
import AnimatedLottieView from 'lottie-react-native';

// UI
import { Box } from '../../themes/box/Box';

type RecorderButtonProps = {
  isRecording: boolean;
  isRecordingPaused: boolean;
  testID?: string;
  loaderTestID?: string;
  isLoading?: boolean;
  onRecorderPress: () => void;
};

export const RecorderButton: React.FC<RecorderButtonProps> = ({
  isRecording,
  isRecordingPaused,
  onRecorderPress,
  isLoading,
  testID,
  loaderTestID,
}) => {
  const lottieRef = useRef<AnimatedLottieView>(null);

  useMemo(
    () =>
      !isRecording || isRecordingPaused
        ? lottieRef?.current?.reset()
        : lottieRef?.current?.play(),
    [isRecording, isRecordingPaused]
  );

  return isLoading ? (
    <Box
      width={110}
      height={110}
      alignContent="center"
      alignItems="center"
      justifyContent="center"
    >
      <Loader testID={loaderTestID} />
    </Box>
  ) : (
    <TouchableWithoutFeedback
      onPress={onRecorderPress}
      testID={testID}
      disabled={isLoading}
    >
      <SystemAnimatedLottieBox
        ref={lottieRef}
        source={require('../../assets/lottie/record-button.json')}
        loop={false}
        autoPlay={false}
        width={115}
        height={115}
      />
    </TouchableWithoutFeedback>
  );
};
