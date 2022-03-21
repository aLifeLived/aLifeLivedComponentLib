import React, { ReactChild } from 'react';
import { Pressable } from 'react-native';

// Components
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';

type OnboardingProps = {
  title: string;
  description: string;
  onNextPress: () => void;
  buttonTestID?: string;
  textTestID?: string;
  onNextButtonText: 'Tap next' | 'Finish';
  children: ReactChild;
};

export const OnboardingContent: React.FC<OnboardingProps> = ({
  title,
  description,
  onNextPress,
  buttonTestID,
  textTestID,
  onNextButtonText,
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
        <Text variant="h3" marginTop="xl" testID={textTestID}>
          {title}
        </Text>
        <Text
          variant="bodyXSmall"
          marginTop="m"
          paddingHorizontal="s"
          textAlign="center"
        >
          {description}
        </Text>
        <Box alignSelf="flex-end">
          <Pressable onPress={() => onNextPress()} testID={buttonTestID}>
            <Text variant="bodyXSmall" fontStyle="italic" padding="xl">
              {onNextButtonText}
            </Text>
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
};
