import React from 'react';

// UI
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Icon } from '../icon/Icon';

type DraftStoryCardProps = {
  title: string;
  topicTitle: string;
  onPress: () => void;
};

export const DraftStoryCard: React.FC<DraftStoryCardProps> = ({
  title,
  topicTitle,
  onPress,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box
        borderColor="borderColor"
        backgroundColor="backgroundContrastLow"
        borderWidth={1}
        borderRadius="medium"
        margin="m"
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="md"
      >
        <Box marginLeft="s" marginBottom="s" width="80%">
          <Text
            color="textContrastHigh"
            variant="h3"
            marginTop="s"
            fontWeight="bold"
            numberOfLines={1}
            marginRight="m"
          >
            {title}
          </Text>
          <Box
            backgroundColor="primary"
            alignSelf="flex-start"
            marginTop="s"
            padding="xs"
            borderRadius="medium"
            paddingLeft="s"
            paddingRight="s"
          >
            <Text variant="caption" color="textContrastHigh" numberOfLines={1}>
              {topicTitle}
            </Text>
          </Box>
        </Box>
        <Icon
          icon="chevron-right"
          color="textContrastHigh"
          size={20}
          marginRight="m"
        />
      </Box>
    </SystemButton>
  );
};
