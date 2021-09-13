import React from 'react';
import { Box } from '../box/Box';
import { Text } from '../text/Text';

type ModalHeaderProps = {
  header: string;
  description?: string;
};

export const ModalContent: React.FC<ModalHeaderProps> = ({
  header,
  description,
}) => {
  return (
    <Box m="m" paddingBottom="s" alignContent="center" alignItems="center">
      <Text variant="h2" fontWeight="bold" textAlign="center" color="surface">
        {header}
      </Text>
      {description && (
        <Text variant="body" marginTop="m" textAlign="center" color="surface">
          {description}
        </Text>
      )}
    </Box>
  );
};
