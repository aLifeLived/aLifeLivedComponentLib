import React, { ReactNode } from 'react';

// UI
import { Box } from '../box/Box';

type CardContentProps = {
  SVG: ReactNode;
};

export const CardContent: React.FC<CardContentProps> = ({ SVG }) => {
  return (
    <Box alignContent="center" margin="xs">
      {SVG}
    </Box>
  );
};
