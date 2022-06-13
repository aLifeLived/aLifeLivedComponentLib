import React, { useCallback, useState } from 'react';

// UI
import { Box } from '../../themes/box/Box';
import { SystemPressable } from '../../themes/systemPressable/SystemPressable';
import { Text } from '../../themes/text/Text';
import { Icon } from '../icon/Icon';

type FaqCardProps = {
  header: string;
  content: string;
};

export const FaqCard: React.FC<FaqCardProps> = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnPress = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  return (
    <SystemPressable
      borderColor={isOpen ? 'primary' : 'backgroundContrastLow'}
      borderWidth={1}
      borderRadius="medium"
      onPress={() => handleOnPress()}
    >
      <Box
        backgroundColor={isOpen ? 'white' : 'backgroundContrastLow'}
        borderTopLeftRadius="medium"
        borderTopRightRadius="medium"
        paddingVertical="m"
        paddingHorizontal="s"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text variant="h4">{header}</Text>
        <Icon
          icon={isOpen ? 'chevron-down' : 'chevron-right'}
          color={isOpen ? 'primary' : 'backgroundContrastHigh'}
        />
      </Box>
      {isOpen && (
        <Box padding="s" marginTop="s">
          <Text variant="bodySmall">{content}</Text>
        </Box>
      )}
    </SystemPressable>
  );
};
