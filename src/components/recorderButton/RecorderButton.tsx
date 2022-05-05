import React, { useMemo, useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import AnimatedLottieView from 'lottie-react-native';

type RecorderButtonProps = {
  isRecording: boolean;
  onRecorderPress: () => void;
};

export const RecorderButton: React.FC<RecorderButtonProps> = ({
  isRecording,
  onRecorderPress,
}) => {
  const lottieRef = useRef<AnimatedLottieView>(null);

  useMemo(
    () =>
      !isRecording ? lottieRef?.current?.reset() : lottieRef?.current?.play(),
    [isRecording]
  );

  return (
    <TouchableWithoutFeedback onPress={onRecorderPress}>
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