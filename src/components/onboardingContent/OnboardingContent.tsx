import React, { ReactChild } from 'react';
import { Pressable } from 'react-native';

// Components
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';

type OnboardingProps = {
  title: string;
  description: string;
  onNextPress: () => void;
  testID?: string;
  children: ReactChild;
};

export const OnboardingContent: React.FC<OnboardingProps> = ({
  title,
  description,
  onNextPress,
  testID,
  children,
}) => {
  return (
    <Box
      flex={1}
      justifyContent="space-evenly"
      alignContent="center"
      alignItems="center"
    >
      <Box width="100%" alignItems="center" justifyContent="center" flex={2}>
        {children}
      </Box>

      <Box alignItems="center" flex={1} width="100%">
        <Text variant="h2" marginTop="xl">
          {title}
        </Text>
        <Text
          variant="h3"
          marginTop="m"
          paddingHorizontal="m"
          textAlign="center"
        >
          {description}
        </Text>
        <Box alignSelf="flex-end">
          <Pressable onPress={() => onNextPress()} testID={testID}>
            <Text variant="caption" fontStyle="italic" padding="xl">
              Tap next
            </Text>
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
};
