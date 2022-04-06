import React from 'react';
import ProgressBar from 'react-native-animated-progress';

// UI
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Icon } from '../icon/Icon';
import { useTheme } from '../../themes/hooks/useTheme';

type DraftStoryCardProps = {
  title: string;
  topicTitle: string;
  storyProgress: number;
  onPress: () => void;
};

export const DraftStoryCard: React.FC<DraftStoryCardProps> = ({
  title,
  topicTitle,
  storyProgress,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <SystemButton onPress={onPress}>
      <Box
        borderColor="borderColor"
        backgroundColor="backgroundContrastXLow"
        borderWidth={1}
        borderRadius="medium"
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="sm"
        paddingBottom="s"
        overflow="hidden"
      >
        <Box
          marginLeft="s"
          marginBottom="s"
          flexDirection="row"
          paddingTop="s"
          alignItems="center"
        >
          <Box
            padding="s"
            marginRight="m"
            backgroundColor="backgroundContrastLow"
            borderRadius="large"
          >
            <Icon icon="pencil-alt" color="primary" />
          </Box>
          <Box>
            <Text color="textContrastHigh" variant="intro" numberOfLines={1}>
              {topicTitle}
            </Text>

            <Text
              variant="bodyXSmall"
              color="textContrastHigh"
              numberOfLines={1}
            >
              {title}
            </Text>
          </Box>
        </Box>
        <Icon icon="chevron-right" color="primary" size={20} marginRight="m" />
        <Box
          width="100%"
          position="absolute"
          bottom={0}
          backgroundColor="textError"
        >
          <ProgressBar
            progress={storyProgress}
            backgroundColor={theme.colors.primary}
            trackColor={theme.colors.backgroundContrastMid}
            height={3.5}
          />
        </Box>
      </Box>
    </SystemButton>
  );
};
