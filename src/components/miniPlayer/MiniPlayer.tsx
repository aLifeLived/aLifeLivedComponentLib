import React from 'react';

// Components
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';

// UI
import { Box } from '../../themes/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { BlurLayout } from '../../themes/systemBlurLayout/SystemBlurLayout';
import { Text } from '../../themes/text/Text';

type PlayerStateType =
  | 'loading'
  | 'ready'
  | 'buffering'
  | 'playing'
  | 'paused'
  | 'idle'
  | 'recording';

type MiniPlayerTypes = {
  isDisabled: boolean;
  title: string;
  username: string;
  avatar: string;
  playerState: PlayerStateType;
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
  return (
    <SystemButton disabled={isDisabled} onPress={() => onMiniPlayerPress()}>
      <BlurLayout
        intensity={100}
        tint="dark"
        flexDirection="row"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
        marginLeft="s"
        marginRight="s"
        borderRadius="medium"
        marginBottom="s"
        padding="s"
        overflow="hidden"
      >
        <Box flexDirection="row" width="75%" alignItems="center">
          <Avatar
            source={{ uri: avatar, priority: 'normal' }}
            variant="squareAvatar"
            height={40}
            width={40}
            iconBorderRadius="medium"
            testID="miniPlayer-avatar"
          />
          <Box marginLeft="s">
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
      </BlurLayout>
    </SystemButton>
  );
};
