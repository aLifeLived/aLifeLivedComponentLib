import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box } from '../../themes/Box';
import { Text } from '../../themes/text/Text';
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';

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
  return (
    <TouchableOpacity disabled={isDisabled} onPress={() => onMiniPlayerPress()}>
      <Box
        flexDirection="row"
        backgroundColor="contrastHigh"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row" width="70%" alignItems="center">
          <Avatar source={{ uri: avatar, priority: 'normal' }} />
          <Box width="90%">
            <Text
              color="surface"
              fontWeight="bold"
              marginLeft="s"
              numberOfLines={1}
            >
              {title ? title : 'Nothing playing'}
            </Text>
            <Text marginLeft="s" variant="caption">
              {username}
            </Text>
          </Box>
        </Box>

        <Box flexDirection="row" alignContent="center">
          <TouchableOpacity
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
          </TouchableOpacity>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
