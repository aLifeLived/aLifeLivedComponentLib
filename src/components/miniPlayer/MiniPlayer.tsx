import React from 'react';

// Components
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';

// UI
import { Box } from '../../themes/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { BlurLayout } from '../../themes/systemBlurLayout/SystemBlurLayout';
import { useTheme } from '../../themes/hooks/useTheme';

type MiniPlayerTypes = {
  isDisabled: boolean;
  title: string;
  username: string;
  avatar: string;
  playerState: 'idle' | 'playing' | 'paused';
  onAudioPause: () => void;
  onAudioPlay: () => void;
  onMiniPlayerPress: () => void | null;
};

export const MiniPlayer: React.FC<MiniPlayerTypes> = ({
  isDisabled,
  title,
  username,
  avatar,
  playerState,
  onAudioPause,
  onAudioPlay,
  onMiniPlayerPress,
}) => {
  const theme = useTheme();
  return (
    <SystemButton disabled={isDisabled} onPress={() => onMiniPlayerPress()}>
      <Box
        flexDirection="row"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
        marginLeft="s"
        marginRight="s"
        borderRadius="medium"
        marginBottom="s"
        padding="s"
      >
        <BlurLayout
          blurType="dark"
          blurAmount={1}
          reducedTransparencyFallbackColor={theme.colors.contrastHigh}
          borderRadius="medium"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box flexDirection="row" width="70%" alignItems="center">
          <Avatar
            source={{ uri: avatar, priority: 'normal' }}
            variant="squareAvatar"
            height={40}
            width={40}
            iconBorderRadius="medium"
          />
          <Box width="90%" marginLeft="s">
            <Text color="surface" fontWeight="bold" numberOfLines={1}>
              {title ? title : 'Nothing playing'}
            </Text>
            <Text marginTop="s" variant="caption" color="surfaceLight">
              {username}
            </Text>
          </Box>
        </Box>
        <SystemButton
          marginRight="s"
          onPress={() =>
            playerState === 'playing' ? onAudioPause() : onAudioPlay()
          }
        >
          <Icon
            icon={playerState === 'playing' ? 'pause' : 'play'}
            size={25}
            color="surface"
            testID="play-icon"
          />
        </SystemButton>
      </Box>
    </SystemButton>
  );
};
