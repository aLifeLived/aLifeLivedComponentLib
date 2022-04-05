import React from 'react';
import ProgressBar from 'react-native-animated-progress';
// UI
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Icon } from '../icon/Icon';
import { SystemProgressBar } from '../../themes/systemProgressBar/SystemProgressBar';

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
    <SystemButton onPress={onPress}>
      <Box
        borderColor="borderColor"
        backgroundColor="backgroundContrastXLow"
        borderWidth={1}
        borderRadius="medium"
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        justifyContent="space-around"
        boxShadow="sm"
        paddingBottom="s"
        overflow={'hidden'}
      >
        <Box
          marginLeft="s"
          marginRight="s"
          backgroundColor="backgroundContrastLow"
          padding="s"
          borderRadius="large"
        >
          <Icon icon="pencil-alt" color="primary" />
        </Box>
        <Box marginLeft="s" marginBottom="s" width="80%">
          <Text
            color="textContrastHigh"
            variant="intro"
            marginTop="s"
            numberOfLines={1}
            marginRight="m"
          >
            {topicTitle}
          </Text>

          <Text variant="bodyXSmall" color="textContrastHigh" numberOfLines={1}>
            {title}
          </Text>
        </Box>
        <Icon icon="chevron-right" color="primary" size={20} marginRight="m" />
        <Box width="100%" position="absolute" bottom={0}>
          <SystemProgressBar
            progress={100}
            backgroundColor="primary"
            height={4}
          />
        </Box>
      </Box>
    </SystemButton>
  );
};
