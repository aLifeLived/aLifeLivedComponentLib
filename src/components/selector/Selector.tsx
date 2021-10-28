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
};

export const Selector = ({
  onPress,
  title,
  selectedValue,
  selectedValuePlaceholderValue,
}: SelectorContainerProps) => {
  return (
    <SystemButton onPress={() => onPress()}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth={1}
      >
        <Box justifyContent="center">
          <Text marginBottom="m">{title}</Text>
          <Text marginBottom="s" variant="caption">
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
