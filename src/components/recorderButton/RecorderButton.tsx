import React, { useMemo, useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import AnimatedLottieView from 'lottie-react-native';

type RecorderButtonProps = {
  isRecording: boolean;
  isRecordingPaused: boolean;
  testID?: string;
  isLoading?: boolean;
  onRecorderPress: () => void;
};

export const RecorderButton: React.FC<RecorderButtonProps> = ({
  isRecording,
  isRecordingPaused,
  onRecorderPress,
  isLoading,
  testID,
}) => {
  const lottieRef = useRef<AnimatedLottieView>(null);

  useMemo(
    () =>
      !isRecording || isRecordingPaused
        ? lottieRef?.current?.reset()
        : lottieRef?.current?.play(),
    [isRecording, isRecordingPaused]
  );

  return (
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
        width={100}
        height={100}
      />
    </TouchableWithoutFeedback>
  );
};
