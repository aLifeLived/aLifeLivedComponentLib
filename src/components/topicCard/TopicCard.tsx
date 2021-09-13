import React from 'react';
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { Icon } from '../icon/Icon';

type TopicCardProps = {
  title: string;
  hasUserCompleted: boolean;
  description: string;
  duration: string;
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
        borderColor="contrastHigh"
        backgroundColor="surfaceLightest"
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
            color="contrastHigh"
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
            <Icon icon={['far', 'clock']} />
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
          />
        )}
      </Box>
    </SystemButton>
  );
};
