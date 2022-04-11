import React from 'react';
import { Box } from '../box/Box';
import { Button } from '../../components/button/Button';

type BottomSheetType = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const SystemBottomSheet: React.FC<BottomSheetType> = ({
  isVisible,
  onClose,
  children,
}) => {
  return isVisible ? (
    <Box
      position="absolute"
      right={0}
      left={0}
      bottom={0}
      top={0}
      justifyContent="flex-end"
      backgroundColor="backgroundVisible"
      zIndex="foregroundTop"
    >
      <Box
        justifyContent="flex-end"
        flex={1}
        alignContent="center"
        alignItems="center"
        paddingBottom="s"
        borderTopLeftRadius="large"
        borderTopRightRadius="large"
        paddingTop="l"
      >
        {children}
        <Box width="90%" marginTop="l" marginBottom="l">
          <Button
            title="Close"
            onPress={() => onClose()}
            backgroundColor="backgroundContrastXLow"
          />
        </Box>
      </Box>
    </Box>
  ) : null;
};
