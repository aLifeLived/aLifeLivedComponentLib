import React from 'react';
import ProgressBar from 'react-native-animated-progress';

// UI
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Icon } from '../icon/Icon';
import { useTheme } from '../../themes/hooks/useTheme';
import { SystemPressable } from '../../themes/systemPressable/SystemPressable';

type DraftStoryCardProps = {
  title: string;
  topicTitle: string;
  recordingProgress: number;
  shouldDisplayEllipsis?: boolean;
  onPress: () => void;
  onEllipsisPress?: () => void;
};

export const DraftStoryCard: React.FC<DraftStoryCardProps> = ({
  title,
  topicTitle,
  recordingProgress,
  shouldDisplayEllipsis,
  onPress,
  onEllipsisPress,
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
            testID="pencil-icon"
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
        {shouldDisplayEllipsis ? (
          <SystemPressable
            onPress={onEllipsisPress}
            paddingTop="m"
            paddingBottom="m"
            accessibilityLabel="Draft story more options"
          >
            <Icon
              icon="ellipsis-v"
              color="primary"
              size={20}
              marginRight="m"
              testID="ellipsis-icon"
            />
          </SystemPressable>
        ) : null}
        <Box
          width="100%"
          position="absolute"
          bottom={0}
          backgroundColor="textError"
        >
          <ProgressBar
            progress={recordingProgress}
            backgroundColor={theme.colors.primary}
            trackColor={theme.colors.backgroundContrastMid}
            height={3.5}
          />
        </Box>
      </Box>
    </SystemButton>
  );
};
