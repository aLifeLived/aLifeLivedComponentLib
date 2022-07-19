import React, { useEffect, useRef } from 'react';
import { Avatar } from '../avatar/Avatar';
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { SystemAnimatedLottieBox } from '../../themes/systemAnimatedLottieBox/SystemAnimatedLottieBox';
import AnimatedLottieView from 'lottie-react-native';

type UserCardProps = {
  username: string;
  avatarUrl: string;
  isUserSelected: boolean;
  testID?: string;
  onPress: () => void;
};

export const UserCard: React.FC<UserCardProps> = ({
  username,
  avatarUrl,
  isUserSelected,
  testID,
  onPress,
}) => {
  const lottieRef = useRef<AnimatedLottieView>(null);

  useEffect(
    () =>
      !isUserSelected
        ? lottieRef?.current?.play(100, 0)
        : lottieRef?.current?.play(0, 100),
    [isUserSelected]
  );

  return (
    <SystemButton onPress={() => onPress()} width="100%" testID={testID}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          maxWidth="70%"
        >
          <Avatar
            iconHeight={50}
            iconWidth={50}
            source={{ uri: avatarUrl, priority: 'high' }}
            variant="roundAvatar"
          />
          <Box marginLeft="s">
            <Text variant="body" numberOfLines={1}>
              {username}
            </Text>
          </Box>
        </Box>

        <SystemAnimatedLottieBox
          marginRight="m"
          ref={lottieRef}
          loop={false}
          source={require('../../assets/lottie/add-remove.json')}
          width={40}
          height={40}
          speed={2}
          autoPlay={false}
        />
      </Box>
    </SystemButton>
  );
};
