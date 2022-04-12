import React from 'react';
import { Box } from '../../themes/box/Box';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Text } from '../../themes/text/Text';
import { Icon } from '../icon/Icon';

type TopicCardProps = {
  title: string;
  hasUserCompleted: boolean;
  duration: number;
  onPress: () => void;
};

export const TopicCard: React.FC<TopicCardProps> = ({
  title,
  hasUserCompleted,
  duration,
  onPress,
}) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box
        borderColor="borderColor"
        backgroundColor="white"
        borderWidth={1}
        borderRadius="large"
        boxShadow="md"
        padding="m"
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginTop="s"
          marginRight="s"
        >
          <Box marginRight="m" width="75%">
            <Text color="textContrastHigh" variant="body" numberOfLines={1}>
              {title}
            </Text>
          </Box>
          <Box>
            {hasUserCompleted ? (
              <Icon
                icon={['fas', 'check-circle']}
                color="primary"
                size={20}
                testID="checked-icon"
              />
            ) : (
              <Box flexDirection="row" alignItems="center">
                <Icon
                  icon={['far', 'clock']}
                  testID="clock-icon"
                  color="textContrastXLow"
                  marginRight="s"
                />
                <Text variant="bodyXSmall" color="textContrastXLow">
                  {duration} mins
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </SystemButton>
  );
};
