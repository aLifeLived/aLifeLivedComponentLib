import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';

type UserCardProps = {
  username: string;
  avatarUrl: string;
  onPress: () => void;
};

export const UserCard: React.FC<UserCardProps> = ({
  username,
  avatarUrl,
  onPress,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box flexDirection="row" alignItems="center">
        <Avatar
          iconBorderRadius="xXXlarge"
          iconHeight={50}
          iconWidth={50}
          source={{ uri: avatarUrl, priority: 'high' }}
          variant="roundAvatar"
        />
        <Box marginLeft="s" width="80%">
          <Text variant="h3" fontWeight="bold" numberOfLines={1}>
            {username}
          </Text>
        </Box>
      </Box>
    </SystemButton>
  );
};
