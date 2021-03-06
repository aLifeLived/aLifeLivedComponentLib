import React from 'react';

// Components
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import { Icon } from '../..';

type SelectorContainerProps = {
  onPress: () => void;
  title: string;
  selectedValue: string[];
  selectedValuePlaceholderValue: string;
  testID?: string;
};

export const Selector = ({
  onPress,
  title,
  selectedValue,
  selectedValuePlaceholderValue,
  testID,
}: SelectorContainerProps) => {
  return (
    <SystemButton onPress={() => onPress()} testID={testID}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth={1}
      >
        <Box justifyContent="center">
          <Text marginBottom="m" variant="body">
            {title}
          </Text>
          <Text marginBottom="s" variant="bodySmall" color="textContrastLow">
            {selectedValue.length <= 0
              ? selectedValuePlaceholderValue
              : selectedValue.join(', ')}
          </Text>
        </Box>
        <Icon icon="chevron-right" />
      </Box>
    </SystemButton>
  );
};
