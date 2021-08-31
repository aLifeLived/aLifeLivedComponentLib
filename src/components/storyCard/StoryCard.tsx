import React from 'react';

// UI
import { Box } from '../../themes/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';

// Types
import { Icon } from '../icon/Icon';

type StoryCardProps = {
  onPress: () => void;
  onBookmarkPress: () => void;
  onLikePress: () => void;
  hasUserLikedStory: boolean;
  hasUserBookmarkedStory: boolean;
  story: {
    id: string;
    title: string;
    likes: number;
    duration: string;
    interviewer: {
      username: string;
    };
  };
};

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  onPress,
  onBookmarkPress,
  onLikePress,
  hasUserBookmarkedStory,
  hasUserLikedStory,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        alignSelf="center"
        width="90%"
        justifyContent="space-between"
        borderBottomWidth={0.5}
        paddingBottom="s"
        marginBottom="l"
        marginTop="s"
      >
        <Box width="80%">
          <Box>
            <Text variant="default" fontWeight="bold" numberOfLines={1}>
              {story.title}
            </Text>
          </Box>

          <Box flexDirection="row" alignItems="center" marginTop="s">
            <Box flexDirection="row" alignItems="center" width="25%">
              <Icon icon={['far', 'clock']} color="primaryContrast" />
              <Text variant="body" marginLeft="s">
                {story.duration}
              </Text>
            </Box>
            <Box flexDirection="row" alignItems="center" marginLeft="s">
              <Icon
                icon={[hasUserLikedStory ? 'fas' : 'far', 'heart']}
                color="primaryRed"
                onPress={onLikePress}
              />
              <Text variant="body" marginLeft="s">
                {story.likes}
              </Text>
            </Box>
          </Box>

          <Box
            backgroundColor="primary"
            alignSelf="flex-start"
            marginTop="s"
            padding="xs"
            borderRadius="medium"
            paddingLeft="s"
            paddingRight="s"
          >
            <Text variant="caption" color="contrastHighest">
              Children
            </Text>
          </Box>
        </Box>

        <Box flexDirection="row" alignItems="center" marginLeft="s">
          <Icon icon={'user'} color="primaryContrast" />
          <Icon
            icon={[hasUserBookmarkedStory ? 'fas' : 'far', 'bookmark']}
            marginLeft="m"
            color="primaryContrast"
            onPress={onBookmarkPress}
          />
        </Box>
      </Box>
    </SystemButton>
  );
};
