import React, { ReactNode } from 'react';

// UI
import { Box } from '../box/Box';

type CardContentProps = {
  SVG: ReactNode;
};

export const CardContent: React.FC<CardContentProps> = ({ SVG }) => {
  return (
    <Box alignContent="center" overflow="hidden" borderRadius="large">
      {SVG}
    </Box>
  );
};
