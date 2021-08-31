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
    <SystemButton onPress={onPress}>
      <Box
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        alignSelf="center"
        width="90%"
        justifyContent="space-between"
        borderBottomWidth={0.5}
        paddingBottom="s"
        marginBottom="m"
      >
        <Box>
          <Box width="90%">
            <Text variant="h3" fontWeight="bold" numberOfLines={1}>
              {story.title}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center" marginTop="s">
            <Icon
              icon={[hasUserLikedStory ? 'fas' : 'far', 'heart']}
              color="primaryRed"
              onPress={onLikePress}
            />
            <Text variant="body" marginLeft="s" marginRight="s">
              {story.likes}
            </Text>
            <Icon icon={['far', 'clock']} color="primaryContrast" />
            <Text variant="body" marginLeft="s">
              {story.duration}
            </Text>
          </Box>
        </Box>
        <Icon
          icon={[hasUserBookmarkedStory ? 'fas' : 'far', 'bookmark']}
          marginLeft="m"
          color="primaryContrast"
          onPress={onBookmarkPress}
        />
      </Box>
    </SystemButton>
  );
};
