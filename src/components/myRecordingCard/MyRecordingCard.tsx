import React, { useCallback } from 'react';

// UI
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Box } from '../../themes/box/Box';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import { Text } from '../../themes/text/Text';
import { Icon } from '../icon/Icon';

type MyRecordingProps = {
  title: string;
  isLoading: boolean;
  isAudioPlaying: boolean;
  deleteIconTestID?: string;
  onMediaPress: () => void;
  onDeletePress: () => void;
};

export const MyRecordingCard: React.FC<MyRecordingProps> = ({
  isLoading,
  title,
  isAudioPlaying,
  deleteIconTestID,
  onMediaPress,
  onDeletePress,
}) => {
  const handleAnimationDisplay = useCallback(() => {
    if (!isLoading && !isAudioPlaying) {
      return <Icon icon="play" color="primary" size={20} />;
    } else {
      return (
        <SystemAnimatedLottieBox
          source={
            isLoading
              ? require('../../assets/lottie/loading.json')
              : require('../../assets/lottie/music-playing.json')
          }
          autoPlay={true}
          width={25}
          height={25}
        />
      );
    }
  }, [isLoading, isAudioPlaying]);

  return (
    <SystemButton
      onPress={onMediaPress}
      disabled={isLoading}
      accessibilityState={{ disabled: isLoading, selected: isAudioPlaying }}
    >
      <Box
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="white"
        boxShadow="md"
        padding="m"
        borderRadius="large"
      >
        <Box
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Box
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            width={50}
            height={50}
          >
            {handleAnimationDisplay()}
          </Box>
          <Text variant="body">{title}</Text>
        </Box>

        <SystemButton
          onPress={onDeletePress}
          padding="m"
          testID={deleteIconTestID}
          disabled={isLoading}
        >
          <Icon
            icon={['far', 'trash-alt']}
            color="backgroundContrastMid"
            size={20}
          />
        </SystemButton>
      </Box>
    </SystemButton>
  );
};
