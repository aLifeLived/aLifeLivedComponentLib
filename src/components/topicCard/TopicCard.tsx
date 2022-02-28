import React from 'react';
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { Icon } from '../icon/Icon';

type TopicCardProps = {
  title: string;
  hasUserCompleted: boolean;
  description: string;
  duration: number;
  onPress: () => void;
};

export const TopicCard: React.FC<TopicCardProps> = ({
  title,
  hasUserCompleted,
  description,
  duration,
  onPress,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box
        borderColor="borderColor"
        backgroundColor="white"
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
          <Text marginTop="s" variant="caption" numberOfLines={1}>
            {description}
          </Text>
          <Box flexDirection="row" marginTop="s" alignItems="center">
            <Icon icon={['far', 'clock']} testID="clock-icon" />
            <Text color="primary" variant="caption" marginLeft="s">
              {duration} mins
            </Text>
          </Box>
        </Box>

        {hasUserCompleted && (
          <Icon
            icon={['fas', 'check-circle']}
            color="primary"
            marginRight="m"
            size={20}
            testID="checked-icon"
          />
        )}
      </Box>
    </SystemButton>
  );
};
