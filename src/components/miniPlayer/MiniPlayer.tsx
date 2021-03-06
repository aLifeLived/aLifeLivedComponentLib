import React from 'react';

// Components
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';

// UI
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { BlurLayout } from '../../themes/systemBlurLayout/SystemBlurLayout';
import { Text } from '../../themes/text/Text';

type MiniPlayerTypes = {
  isDisabled: boolean;
  title: string;
  username: string;
  avatar: string;
  mediaControlIcon: 'play' | 'pause';
  mediaControlAction: () => void;
  onMiniPlayerPress: () => void | null;
};

export const MiniPlayer: React.FC<MiniPlayerTypes> = ({
  isDisabled,
  title,
  username,
  avatar,
  mediaControlIcon,
  onMiniPlayerPress,
  mediaControlAction,
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
        borderTopRightRadius="large"
        borderTopLeftRadius="large"
        padding="s"
        overflow="hidden"
      >
        <Box flexDirection="row" width="75%" alignItems="center">
          <Avatar
            source={{ uri: avatar, priority: 'normal' }}
            variant="roundAvatar"
            height={40}
            width={40}
            testID="miniPlayer-avatar"
          />
          <Box marginLeft="s">
            <Text variant="body" numberOfLines={1} color="white">
              {title ? title : 'Nothing playing'}
            </Text>
            <Text marginTop="s" variant="bodySmall" color="white">
              {username}
            </Text>
          </Box>
        </Box>
        <SystemButton
          disabled={isDisabled}
          marginRight="s"
          onPress={() => mediaControlAction()}
        >
          <Icon
            icon={mediaControlIcon}
            size={25}
            color="white"
            testID="mediaControl-icon"
          />
        </SystemButton>
      </BlurLayout>
    </SystemButton>
  );
};
